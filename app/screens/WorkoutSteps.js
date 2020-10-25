import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity, Modal, ActivityIndicator } from 'react-native'
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { font } from '../consts/fontFamily';
import { NavigationEvents } from 'react-navigation';
const { height, width } = Dimensions.get('screen');
import YoutubePlayer from "react-native-youtube-iframe";
import { useSelector,useDispatch } from 'react-redux';
import { AlternateExercise } from '../model/workout';
import {alternateExercises, submitIndividualWorkout, submitWorkout} from '../reducers/workout/service-calls';
import { checkDayDiff } from '../lib/dateLib';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Video from 'react-native-video';
import Toast from 'react-native-easy-toast';

const videos = [
    require('../assets/Half_Jacks.mp4'),
    require('../assets/High_Knees.mp4'),
    require('../assets/Rotations.mp4'),
    require('../assets/Seal_Jacks.mp4'),
    require('../assets/Butt_Ups.mp4')
]
const DuringWorkoutOne = (props) => {

    const [timer, setTimer] = React.useState(1);
    const [pause, setPause] = React.useState(true);
    const [videoPlayStatus,playVideo] = React.useState(false);
    const [exercise,setExercise] = React.useState('');
    const [initialLoad,setInitialLoad] = React.useState(true);
    const [index,setIndex] = React.useState(-1);
    const [rep,setRep] = React.useState(1);
    const [playlistData,setPlaylistData] = React.useState([]);
    const [loopValue,setLoop] = React.useState(false);
    const _youtubeRef = React.useRef();
    const {picked_alternate,isAlternateSet,workout_day} = useSelector(state => state.WorkoutReducer);
    const {authResponse} = useSelector(state => state.AuthReducer);
    const dispatch = useDispatch();
    const {item} = props.navigation.state.params;
    const [day_of_workout,setDayOfWorkout] = React.useState('1');
    // const [currentTime,setDuration] = React.useState(0);
    const [videoToPlay,setVideoToPlay] = React.useState('');
    const [duration,setDuration] = React.useState(null);
    const toastRef = React.useRef();

    useEffect(()=>{
        console.log('workout_day: ',workout_day);
        playVideo(true);
        if(workout_day !== null){
            setDayOfWorkout(checkDayDiff(workout_day));
        }else{
            setDayOfWorkout('1');
        }
        AlternateExercise.user_id= authResponse?.user_id || '437';
        AlternateExercise.exercise_id = exercise?.exercise_id;
        AlternateExercise.user_id = authResponse?.user_id || '437';
        AlternateExercise.workout_frequency_id = authResponse?.workout_frequency_id || '14';
        AlternateExercise.goal_id = authResponse?.goal_id || '13';
        AlternateExercise.workout_plan_id = authResponse?.workout_plan_id || '23';
        AlternateExercise.workout_type_id = authResponse?.workout_type_id || '11';
        AlternateExercise.workout_day = day_of_workout;
    },[])

    const checkRest = () => {
        setPause(true);
        playVideo(false);
        console.log('check rest: ',index,item.length)
        if(index === ((item.length)-1)){
            let submitData = {
                user_id: authResponse?.user_id || '437',//"199",
                workout_frequency_id: authResponse?.workout_frequency_id || '14',
                goal_id: authResponse?.goal_id || '13',
                workout_plan_id: authResponse?.workout_plan_id || '23',
                workout_type_id: authResponse?.workout_type_id || '11',
                workout_day: day_of_workout || '1',//"1",
                workout_details_by_user_id: "1"
            }
            let submitData1 = {
                details_by_user_exercize_id: exercise?.exercise_id,
                seconds: exercise?.time,
                user_id: authResponse?.user_id
            }
            submitIndividualWorkout(submitData1).then(res => {
                console.log('Success submit: ', res);
            }).catch(ex => {
                console.log('Failure submit: ', ex);
            })
            submitWorkout(submitData).then(res=>{
                console.log('Success submit: ',res);
                props.navigation.push('PostWorkout',{response:res})
            }).catch(ex=>{
                console.log('Failure submit: ',ex);
            })
        }else{
            props.navigation.push('WorkoutRest',{rest: exercise.rest,time:exercise.time,exercise_id:exercise.exercise_id});            
        }
    }

    const fetchApi = () => {
        console.log('fetch api hit')
        // console.log('Initiated: ',((item[index+1].youtube).split('/'))[3]);
        console.log(item[index+1].exercise_name)
        setExercise(item[index+1]);//exercise object
        setIndex(index+1);//exercise index(from 5)
        setVideoToPlay(videos[index+1]);
        console.log('VideoToPlay: ',videos[index+1]);
        setInitialLoad(false);
        setPause(false);
        playVideo(true);
    }

    useEffect(() => {
        if (!pause) {
            setTimeout(() => {
                setTimer(timer + 1)
            }, 1000);
        }else if(pause){
            setTimer(timer)
        }
    }, [timer])

    const fetchAlternate = () => {
        AlternateExercise.exercise_id = exercise.exercise_id;
        dispatch({ type: 'ALTERNATE_PICKED', isAlternateSet: false, picked_alternate: [] })
        alternateExercises(AlternateExercise).then((res) => {
            console.log('alternate length: ', res.data.alternate_exercise.length);
            setInitialLoad(false);
            if (res.data.alternate_exercise.length < 1) {
                playVideo(true);
                setPause(false);
                if(duration> -1){
                    setDuration(prevState => (prevState-1))
                }
                toastRef.current.show('No alternate found', 500)
            } else {
                console.log('Success alternate seconds: ', res.data.alternate_exercise);
                dispatch({ type: 'SET_ALTERNATE_EXERCISE', alternate_exercise: res.data.alternate_exercise });
                props.navigation.toggleDrawer();
            }
        }).catch(ex => {
            setInitialLoad(false);
            playVideo(true);
            setPause(false);
            console.log('1',pause)
            if(!pause && duration> -1){
                setDuration(prevState => (prevState-1))
            }
            console.log('Failed', ex);
        })
    }
    
    useEffect(()=>{
        console.log('isAlternateSet check: ',isAlternateSet)
        if(isAlternateSet){
            // console.log('called: ',((picked_alternate.youtube).split('=')[1]).split('&')[0])
            setExercise(picked_alternate);//exercise object
            setIndex(index);//exercise index(from 5) - replace with already selected index
            // getLoopPlaylist( ((picked_alternate.youtube).split('=')[1]).split('&')[0], picked_alternate.reps );
            // setLoop(true);
            dispatch({type: 'ALTERNATE_PICKED',isAlternateSet: false,picked_alternate:[]})
            playVideo(true);
            setPause(false);
            setDuration(duration-1)
            props.navigation.toggleDrawer();
        }
    },[isAlternateSet])

    const getLoopPlaylist = (videoId,reps) => {
        if(videoId !== ''){
            let value = [...Array(reps)].map((_,i)=>videoId);
            console.log('playlist: ',value);
            setPlaylistData(value)
        }else{
            setPlaylistData(['4XcGTvcSRxY'])
        }   
    }

    const youtubeUI = () => (
        <YoutubePlayer
                        ref={_youtubeRef}
                        height={heightPercentageToDP('100%')}
                        width={widthPercentageToDP('100%')}
                        play={videoPlayStatus}
                        onReady={() => [playVideo(true)]}
                        videoId={exercise !== ''? ((exercise.youtube).split('/')[3]) : '4XcGTvcSRxY'}
                        playList={playlistData}
                        onChangeState={(e) => {
                            if(e === 'ended'){
                                console.log('rep condition: ',rep,exercise.reps)//not handled for alternate
                                setRep(rep+1);
                                setPause(true);
                                setTimer(0)
                                playVideo(true);
                                if (isAlternateSet) {
                                    if (rep < (picked_alternate.reps)+1) {
                                        setLoop(true);
                                    } else {
                                        setTimer(1)
                                        fetchApi();
                                        setRep(1);
                                        setLoop(false);
                                        console.log('reps over')
                                        dispatch({type: 'ALTERNATE_PICKED',isAlternateSet: false,picked_alternate:[]})
                                    }
                                } else {
                                    if (rep < (exercise.reps)+1) {
                                        console.log('looping: ',playlistData)
                                        setLoop(true);
                                    } else {
                                        setTimer(1)
                                        fetchApi();
                                        setRep(1);
                                        setLoop(false);
                                        console.log('reps over')
                                    }
                                }
                                
                            } else if(e === 'playing') {
                                console.log('playing')
                                setPause(false);
                                setTimer(timer+1)
                            } else if(e === 'paused'){
                                setPause(true);
                            }
                        }
                        }
                        initialPlayerParams={{ loop: loopValue, rel: false, controls: true, modestbranding: false }}
                    />
    )
    
    const getDuration = (data) => {
        // setDuration(parseInt(data.currentTime));
    }

    useEffect(() => {
        console.log('hitted', pause)
        if (duration !== null && duration > -1 && videoPlayStatus && !pause) {
            setTimeout(() => {
                setDuration(duration - 1);
            }, 1000);
            if (duration === 0) {
                console.log('duration finished')
                setDuration(null);
                checkRest()
            }
        }
    }, [duration,videoPlayStatus])

    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1,backgroundColor:'white' }]}>
            <Modal
                transparent={true}
                visible={initialLoad}
                onRequestClose={()=>{setInitialLoad(false)}}>
                <View style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
                    <ActivityIndicator size='large' color='blue' />
                </View>
            </Modal>
            <Toast
                ref={toastRef}
                style={{ backgroundColor: 'skyblue' }}
                position='bottom'
                positionValue={200}
                fadeInDuration={750}
                fadeOutDuration={1000}
                opacity={0.9}
                textStyle={{ color: 'black' }}
            />
            <NavigationEvents
                onWillFocus={()=> [setDuration(null),fetchApi()]}
            />
            <Video
                source={videoToPlay}
                style={styles.fullScreen}
                resizeMode={'contain'}
                play={videoPlayStatus}
                paused={!videoPlayStatus}
                onLoadStart={()=>[setDuration(exercise?.time),console.log('started')]}
                onEnd={() => {
                    console.log('ended')
                    // if (duration !== 0) {
                    //     checkRest()
                    // }
                }
                }
                repeat={false}
                controls={false}
                fullscreen={false}
                fullscreenAutorotate={false}
                fullscreenOrientation={'portrait'}
                onProgress={getDuration}
            /> 
                
            <View style={{position: 'absolute', alignItems: 'center', top: heightPercentageToDP('5%'),
            }}>
                <View style={{ width: widthPercentageToDP('97.5%'),justifyContent: 'space-between', paddingHorizontal: widthPercentageToDP('2.5%'),
                flexDirection: 'row',alignItems: 'center', }}>
                    <EllipticalButton
                        ellipticClick={() => {fetchAlternate()
                            setInitialLoad(true);
                            playVideo(false);
                            setPause(true)
                        }}
                        width={width * 0.4}
                        height={height * 0.07}
                        btnImg={''}
                        btnSize={width * 0.05}
                        btnText={'Alternate'}
                        bgColor='#4069ff'
                        labelColor='white'
                        fontWeight='bold'
                    />
                    <TouchableOpacity onPress={() => props.navigation.pop()} style={{
                        backgroundColor: 'red', width: width * 0.1, height: width * 0.1, alignItems: 'center', justifyContent: 'center',
                        borderRadius: (width * 0.1) / 2
                    }}>
                        <Entypo name='cross' size={width * 0.05} color='white' />
                    </TouchableOpacity>
                </View>
                
                    <Text style={{ color: 'black', fontSize: height * 0.045, fontFamily: font.bold, marginVertical: height * 0.02 }}>
                        {duration}
                    </Text>
                
                <View style={{flexDirection:'row',marginTop: heightPercentageToDP('45%'),alignItems:'center',
                    marginBottom: heightPercentageToDP('3%')}}>
                <Text style={{
                    color: 'black', fontSize: height * 0.025, fontFamily: font.bold
                }}>
                    "{exercise.exercise_name}"
                    </Text>
                    <Text style={{ color: 'black', fontSize: height * 0.025, fontFamily: font.bold, }}>
                        {'  '}Sets: {exercise.sets} & {exercise.reps == 0? 'timing':'reps'}:{exercise.reps == 0? exercise.time:exercise.reps}
                    </Text>
                    </View>
                    <EllipticalButton
                        ellipticClick={() => {
                            playVideo(!videoPlayStatus)
                            setPause(!pause)
                            if(pause && duration> -1){
                                setDuration(duration-1)
                            }
                          }}
                        width={width * 0.8}
                        height={height * 0.07}
                        btnImg={''}
                        btnSize={width * 0.05}
                        btnText={'PAUSE'}
                        bgColor='#e08b02'
                        labelColor='white'
                        fontWeight='bold'
                    />
                    <View style={{ marginVertical: height * 0.02 }}>
                        <EllipticalButton
                            ellipticClick={() => {
                                if((index === ((item.length)-1))){
                                    checkRest();
                                }else{
                                    setPause(true)
                                    props.navigation.navigate('WorkoutRest',{timer: exercise.rest})
                                } 
                            }}
                            width={width * 0.8}
                            height={height * 0.07}
                            btnImg={''}
                            btnSize={width * 0.05}
                            btnText={'SKIP'}
                            bgColor='#e08b02'
                            labelColor='white'
                            fontWeight='bold'
                        />
                    </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fullScreen: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height: heightPercentageToDP('85%')
    }
  });
  
export default DuringWorkoutOne;
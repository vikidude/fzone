import React from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, Alert, Modal, ActivityIndicator } from 'react-native';
const { width, height } = Dimensions.get('screen');
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { workout_1, tfz_black_logo } from '../consts/images';
import { font } from '../consts/fontFamily';
import { getDayOneWorkout, cancelPlan, nextDayWorkout } from '../reducers/workout/service-calls';
import { useDispatch, useSelector } from 'react-redux';
import { checkDayDiff } from '../lib/dateLib';
import { NextWorkout } from '../model/workout';

const SeniorCitizenPlan = (props) => {
    const [workoutDetails, setWorkoutDetails] = React.useState([]);
    const [initialLoad, setInitialLoad] = React.useState(true);
    const [selectedItem, setSelecteItem] = React.useState('');
    const [workoutPlan, setWorkoutPlan] = React.useState([]);
    const [errorMsg,setErrorMsg] = React.useState('');

    const { workout_day } = useSelector(state => state.WorkoutReducer);
    const {authResponse} = useSelector(state => state.AuthReducer);
    const [dayOfWorkout,setDayOfWorkout] = React.useState('');

    const dispatch = useDispatch()
    React.useEffect(() => {
        console.log('workout_day: ',workout_day);
        getWorkout();
        // if (workout_day === null) {
        //     getWorkout();
        // } else {
        //     setDayOfWorkout(checkDayDiff(workout_day));
        //     getNextDayWorkout();
        // }
    }, [])

    const getNextDayWorkout = () => {
        NextWorkout.existing_workout_day = dayOfWorkout;
        NextWorkout.workout_type_id = authResponse.workout_type_id;
        NextWorkout.workout_plan_id = authResponse.workout_plan_id;
        NextWorkout.workout_frequency_id = authResponse.workout_frequency_id;
        NextWorkout.goal_id = authResponse.goal_id;
        NextWorkout.user_id = authResponse.user_id;
        console.log('NextWorkout: ',NextWorkout);
        nextDayWorkout(NextWorkout).then(res => {
            setWorkoutDetails(res);
            let value = [];
                for (let i in res.work_out_plan_excercise) {
                    if (parseInt(i) < 5) {
                        value.push({
                            exercise_name: res.work_out_plan_excercise[i].exercise_name, sets: res.work_out_plan_excercise[i].sets,
                            reps: res.work_out_plan_excercise[i].reps, youtube: res.work_out_plan_excercise[i].youtube_link,
                            workout_image: res.work_out_plan_excercise[i].workout_image,exercise_id: res.work_out_plan_excercise[i].exercise_id
                            ,time:res.work_out_plan_excercise[i].time,rest:res.work_out_plan_excercise[i].rest
                        })
                    }
                    if (parseInt(i) === 4) {
                        setWorkoutPlan(value);
                        setInitialLoad(false);
                        console.log('Workouts count: ', value.length)
                    }
                }
                if(res.Success === 'True'){
                    setInitialLoad(false);
                    setErrorMsg('NO DATA');
                }
            console.log('here tis12 called: ', res)
        }).catch(ex => {
            setInitialLoad(false);
                    setErrorMsg('NO DATA');
            console.log('Error next day plan: ', ex);
        })
    }

    const getWorkout = () => {
        console.log('userddata: ',authResponse)
        const testdata = {
            user_id: authResponse?.user_id,
            workout_frequency_id: authResponse?.workout_frequency_id,
            goal_id: authResponse?.goal_id,
            workout_plan_id: authResponse?.workout_plan_id,
            workout_type_id: authResponse?.workout_type_id
        }
        console.log('GetWorkout hit')
        getDayOneWorkout(testdata).then(res => {
            console.log('Get day one exercise called: ', res.work_out_plan_excercise.length)
            setWorkoutDetails(res);
                let value = [];
                for (let i in res.work_out_plan_excercise) {
                    if (parseInt(i) < 5) {
                        value.push({
                            exercise_name: res.work_out_plan_excercise[i].exercise_name, sets: res.work_out_plan_excercise[i].sets,
                            reps: res.work_out_plan_excercise[i].reps, youtube: res.work_out_plan_excercise[i].youtube_link,rest: res.work_out_plan_excercise[i].rest,
                            workout_image: res.work_out_plan_excercise[i].workout_image,exercise_id: res.work_out_plan_excercise[i].exercise_id,time:res.work_out_plan_excercise[i].time
                        })
                    }
                    if (parseInt(i) <5) {
                        setWorkoutPlan(value);
                        setInitialLoad(false);
                        console.log('Workouts count: ', value.length)
                    }
                }
                if(res.work_out_plan_excercise.length === 0){
                    setInitialLoad(false);
                    setErrorMsg('NO DATA');
                }
        }).catch(ex => {
            console.log('Error in user details for plan: ', ex);
            setInitialLoad(false);
            setErrorMsg('Error get data');
        })
    }

    const canclWorkoutPlan = () => {
        cancelPlan(authResponse).then(res => {
            Alert.alert(res.Data, res.Message, [
                {
                    text: 'OK',
                    onPress: () => props.navigation.navigate('AddWorkout')
                }
            ],
                { cancelable: false });
        }).catch(ex => {
            console.log('error', ex);
        })
    }

    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white' }]}>
            {initialLoad ?
                <Modal
                    transparent={true}
                    visible={initialLoad}
                    onRequestClose={() => props.navigation.pop()}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.25)', justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size='large' animating={true} color={'blue'} />
                    </View>
                </Modal>
                :
                errorMsg !== ''?
                    <View style={{ flex:1,justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: font.regular, fontSize: width * 0.05, color: 'red' }}>
                            {errorMsg}
                        </Text>
                    </View>
                :
                <ScrollView>
                    {workoutDetails.length>0 ?
                        <Image source={{ uri: 'data:image/png;base64,' + workoutDetails?.work_out_plan_header[0].work_out_plan_image }}
                            style={{ width: width, height: width * 0.6, resizeMode: 'cover' }} />
                        :
                        <Image source={workout_1}
                            style={{ width: width, height: width * 0.6, resizeMode: 'cover' }} />
                    }
                    <Image source={tfz_black_logo}
                        style={{ width: width * 0.28, height: width * 0.1, position: 'absolute', top: height * 0.13, left: width * 0.37 }} />
                    {/* <Text style={{ color: '#ffd666', fontFamily: font.bold, fontSize: width * 0.06, position: 'absolute', top: height * 0.25, right: 0 }}>
                        SENIOR CITIZEN PLAN
                    </Text> */}
                    <View style={{ paddingHorizontal: width * 0.04 }}>
                        <Text style={{ marginTop: height * 0.01, fontSize: height * 0.05, color: 'black', fontFamily: font.bold, textTransform: 'uppercase' }}>
                            {workoutDetails.length>0 ? workoutDetails?.work_out_plan_header[0].workout_day_string : 'DAY 1'}
                        </Text>
                        <Text style={{ fontSize: height * 0.03, color: 'red', fontFamily: font.bold }}>
                            20 mins
                        </Text>
                        
                        <FlatList
                            data={workoutPlan}
                            contentContainerStyle={{ marginTop: height * 0.06 }}
                            initialNumToRender={4}
                            removeClippedSubviews={true}
                            ListEmptyComponent={() => (
                                <View style={{
                                    flex: 1, justifyContent: 'center', height: height * 0.15,
                                    alignItems: 'center'
                                }}>
                                    <Text style={{ fontFamily: font.bold, fontSize: width * 0.06 }}>
                                        NO DATA
                                    </Text>
                                </View>
                            )}
                            renderItem={({ item, index }) =>{
                                return(
                                    <TouchableOpacity style={{
                                        flexDirection: 'row', borderWidth: item.exercise_id === selectedItem.exercise_id ? 1 : 0,
                                        borderColor: item.exercise_id === selectedItem.exercise_id ? 'blue' : 'white', padding: width * 0.02
                                    }}
                                        onPress={() => [setSelecteItem(item)]}>
                                        {item.workout_image === '' ?
                                            <Image source={workout_1}
                                                style={{ width: width * 0.38, height: width * 0.25, resizeMode: 'cover' }} />
                                            :
                                            <Image source={{ uri: 'data:image/png;base64,' + item.workout_image }}
                                                style={{ width: width * 0.38, height: width * 0.25, resizeMode: 'cover' }} />
                                        }
                                        <View style={{ flexDirection: 'column', paddingHorizontal: width * 0.05 }}>
                                            <Text style={{ color: 'black', fontSize: width * 0.05, fontFamily: font.bold }}>
                                                {/* Jumping Jacks */}
                                                {item.exercise_name}
                                            </Text>
                                            <Text style={{ color: 'grey', fontSize: width * 0.04, fontFamily: font.regular }}>
                                                Sets: {item.sets} Reps: {item.reps}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                                }
                            }
                            ItemSeparatorComponent={() => (
                                <View style={{ marginTop: height * 0.01 }} />
                            )}
                        />
                    </View>
                    <View style={{ marginTop: height * 0.04, alignItems: 'center' }}>
                        <EllipticalButton
                            ellipticClick={() => props.navigation.push('DuringWorkoutOne',
                                { item: workoutPlan })}
                            width={width * 0.9}
                            height={height * 0.07}
                            btnImg={''}
                            btnSize={width * 0.05}
                            btnText={'START WORKOUT'}
                            bgColor='#e08b02'
                            labelColor='white'
                            fontWeight='bold'
                        />
                    </View>
                    <View style={{ marginVertical: height * 0.02, alignItems: 'center' }}>
                        <EllipticalButton
                            ellipticClick={() => canclWorkoutPlan()}
                            width={width * 0.9}
                            height={height * 0.07}
                            btnImg={''}
                            btnSize={width * 0.05}
                            btnText={'CANCEL PLAN'}
                            bgColor='red'
                            labelColor='white'
                            fontWeight='bold'
                        />
                    </View>
                </ScrollView>
            }
        </View>
    );
}

export default SeniorCitizenPlan;
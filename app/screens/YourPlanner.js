import React from 'react'
import { View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity, ScrollView, Modal, ActivityIndicator } from 'react-native';
import Dpicker from '../components/functionalComponent/DPicker';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { font } from '../consts/fontFamily';
import { useSelector, useDispatch } from 'react-redux';
import { getWorkoutFrequency } from '../actions/workoutAction';
import axios from 'axios';
import { UserDetails } from '../model/user';
const { width, height } = Dimensions.get('screen');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-easy-toast';

const YourPlanner = (props) => {

    const [workFreq, setWorkFreq] = React.useState('');
    const [goal, setGoal] = React.useState('');
    const [workoutFrequency, updateWorkoutFrequency] = React.useState([]);
    const [goalValues, setGoalValues] = React.useState([]);
    const [goalDesc, setGoalDec] = React.useState('');
    const [recGoal,setRecGoal] = React.useState('');
    const [recDesc,setRecDesc] = React.useState('');
    const [individualGoal, setIndividualGoal] = React.useState([]);
    const [loading,setLoading] = React.useState(false);

    const { workoutFreqData } = useSelector(state => state.WorkoutReducer);
    const { registerUserData } = useSelector(state => state.AuthReducer);
    const dispatch = useDispatch();
    const toastRef = React.useRef();

    const getIndividualGoal = (goal_id) => {
        console.log('Goal id: ', goal_id);
        setLoading(true);
        axios.get(`http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/getgoals/${goal_id}`).then(res => {
            console.log('Get individual goals response: ', res.data.length);
            setIndividualGoal(res.data[0]);
            setLoading(false);
        }).catch(ex => {
            console.log('Error of get individual goal: ', ex);
            setLoading(false);
        })
    }

    React.useState(() => {
        if (registerUserData) {
            if (registerUserData.goals.length > 0) {
                let value = registerUserData.goals.map(item => ({
                    id: (item.id), label: (item.goal_name).trim(),
                    value: (item.goal_name).trim(), desc: (item.goal_description).trim()
                }));
                setGoalValues(value)
            }
        }
        dispatch(getWorkoutFrequency())
    }, [])

    React.useEffect(() => {
        if (workoutFreqData.length > 0) {
            let value = workoutFreqData.map(item => ({ id: (item.id), label: (item.workout_schedule).trim(), value: (item.workout_schedule).trim() }));
            updateWorkoutFrequency(value);
        }
    }, [workoutFreqData])

    const onSubmit = () => {
        console.log(UserDetails);
        if(workFreq !== ''){
            if(goal!== ''){
                props.navigation.navigate('FinalStep', { value: individualGoal })
            }else{
                toastRef.current.show('Pick One Goal',5000);
            }
        }else{
            toastRef.current.show('Pick One Workout Frequency',5000);
        }
    }
    
    const setGoalDropdown = (item) => {
        setGoal(item.value);
        getIndividualGoal(item.id);
        setGoalDec(item.desc);
        UserDetails.goal_id = item.id
        if (item.value === 'Loose Fat') {
            setRecGoal('Gain Muscle');
            setRecDesc('Gain Muscle');
        } else if (item.value === 'Gain Muscle') {
            setRecGoal('Loose Fat');
            setRecDesc('Loose Fat');
        }else{
            setRecGoal('');
            setRecDesc('');
        }
    }

    const getMarginTop = () => {
        //console.log(goalValues.length)
        if(goalValues.length>2){
            return hp('2%');
        }else if(goalValues.length>1){
            return hp('5%')
        }else{
            return hp('8%')
        }
        // if(goal !== '' && recGoal !== ''){
        //     return (hp('5%'))
        // } else if(goal !== ''){
        //     return (hp('26%'))
        // } else{
        //     return (hp('48%'))
        // }
    }

    const showRecommend = (item) => {
        if(goalValues.length>2){
            return false;//normal weight
        }else if(item.value === 'Improve Flexibility'){
            return false;//improve flexiblity
        }else{
            return true;//lose fat,gain muscle
        }
    }

    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'black', alignItems: 'center' }]}>
            <ScrollView>
                <Modal
                    visible={loading}
                    transparent={true}
                    onRequestClose={() => { }}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <ActivityIndicator size='large' color='blue' />
                    </View>
                </Modal>
                <Toast
                        ref= {toastRef}
                        style={{ backgroundColor: 'skyblue' }}
                        position='bottom'
                        positionValue={200}
                        fadeInDuration={750}
                        fadeOutDuration={1000}
                        opacity={0.9}
                        textStyle={{ color: 'black' }}
                    />
                <View style={{ alignItems: 'center', paddingLeft: wp('4%') }}>
                    <View style={{ flexDirection: 'column', alignSelf: 'flex-start', marginLeft: wp('3%'), marginVertical: hp('4%') }}>
                        <Text style={{ fontSize: wp('7%'), color: 'white' }}>YOUR</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: wp('7%'), color: 'white', fontFamily: font.regular }}>PLANNER</Text>
                            <View style={{
                                height: wp('1.5%'), width: wp('1.5%'), marginTop: hp('3.7%'), marginLeft: wp('1%'),
                                borderRadius: (wp('1.5%')) / 2, backgroundColor: 'red'
                            }} />
                        </View>
                    </View>

                    <View style={{ marginTop: hp('3.5%') }}>
                        <Dpicker
                            items={workoutFrequency}
                            placeholder={'Select Workout Frequency'}
                            dValue={workFreq}
                            dLabel={''}
                            fontSize = {wp('5%')}
                            changeDValue={(item) => [setWorkFreq(item.value), UserDetails.workout_frequency_id = item.id]}
                            zIndex={5000}
                        />
                    </View>
                    <View style={{ marginTop: hp('3%') }} />
                    <Dpicker
                        items={goalValues}
                        placeholder={'Select Goals'}
                        dValue={goal}
                        dLabel={''}
                        fontSize = {wp('5%')}
                        changeDValue={(item) => setGoalDropdown(item)}
                        zIndex={4000}
                    />

                    {goalValues.map(item => (
                        <CustomInputBox
                            containerTop={hp('2.5%')}
                            showBtn={showRecommend(item)}
                            leftText={item.value}
                            textInputValue={item.desc}
                        />
                    ))}
                    {/* {goal !== '' &&
                        <CustomInputBox
                            containerTop={hp('2.5%')}
                            leftText={goal}
                            textInputValue={goalDesc}
                        />
                    }

                    {recGoal !== '' &&
                        <CustomInputBox
                            containerTop={hp('2.5%')}
                            showBtn={true}
                            leftText={recGoal}
                            textInputValue={recDesc}
                        />
                    } */}

                    <View style={{ marginTop: getMarginTop() }}>
                        <EllipticalButton
                            ellipticClick={() => onSubmit()}
                            width={wp('92.5%')}
                            height={hp('7%')}
                            btnImg={''}
                            btnSize={wp('5%')}
                            btnText={'Next'}
                            bgColor='#4069ff'
                            labelColor='white'
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default (YourPlanner);

const CustomInputBox = (props) => {
    return (
        <View style={{
            flexShrink: 1, backgroundColor: 'white', borderRadius: width * 0.035,
            paddingHorizontal: width * 0.03, marginTop: props.containerTop
        }}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', width: width * 0.9
                , paddingTop: height * 0.01
            }}>
                <Text style={{ color: 'green', fontSize: width * 0.04, fontFamily: font.bold }}>
                    {props.leftText}
                </Text>
                {props.showBtn &&
                    <TouchableOpacity onPress={() => { }} style={{ backgroundColor: '#4069ff', padding: width * 0.014, borderRadius: width * 0.03 }}>
                        <Text style={{ color: 'white', fontSize: width * 0.025, fontFamily: font.bold }}>
                            Recommended
                        </Text>
                    </TouchableOpacity>}
            </View>
            <TextInput
                value={props.textInputValue}
                style={{
                    width: width * 0.9,
                    marginTop: height * 0.02,
                    marginBottom: height * 0.04,
                    fontFamily: font.regular,
                    fontSize: width * 0.04
                }}
            />

        </View>
    );
}

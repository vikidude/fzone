import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { font } from '../consts/fontFamily';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import { submitIndividualWorkout } from '../reducers/workout/service-calls';

const WorkoutRest = (props) => {
    const {rest,exercise_id,time} = props.navigation.state.params;
    const [timer, setTimer] = React.useState(rest ||20);
    const [pause, setPause] = React.useState(false);
    const {authResponse} = useSelector(state => state.AuthReducer);
    const { workout_day } = useSelector(state => state.WorkoutReducer);
    const [day_of_workout,setDayOfWorkout] = React.useState(workout_day||'1');

    React.useEffect(() => {
        if (!pause) {
            setTimeout(() => {
                setTimer(timer - 1)
            }, 1000);
        }
        if (timer == 0) {
            console.log('back hit: ',timer)
            props.navigation.pop();
        }
    }, [timer])

    React.useEffect(()=>{
        submitExercise();
    },[])

    const submitExercise = () => {
        let submitData = {
            details_by_user_exercize_id: exercise_id,
            seconds: time,
            user_id: authResponse?.user_id
        }
        console.log(exercise_id,time,rest,submitData)
        submitIndividualWorkout(submitData).then(res => {
            console.log('Success submit: ', res);
        }).catch(ex => {
            console.log('Failure submit @ rest: ', ex);
        })
    }

    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white', paddingHorizontal: wp('2%') }]}>
            
                <View style={{ marginTop: hp('4%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <View style={{
                        backgroundColor: 'red', width: wp('9.5%'), height: wp('9.5%'), alignItems: 'center', justifyContent: 'center',
                        borderRadius: (wp('9.5%')) / 2
                    }}>
                        <Entypo name='cross' size={wp('6%')} color='white' />
                    </View>
                </View>
                <View style={{ alignItems: 'center',marginVertical: hp('28%') }}>
                    <Text style={{ color: 'black', fontSize: hp('8%'), fontFamily: font.regular }}>
                        REST
                    </Text>
                    <Text style={{ color: 'black', fontSize: hp('6%'), fontFamily: font.bold, marginTop: hp('12%'),marginBottom: hp('3%') }}>
                        {timer}
                    </Text>
                    <View style={{ marginTop: hp('2%') }}>
                    <EllipticalButton
                        ellipticClick={() => { setPause(!pause); pause && setTimer(timer - 1) }}
                        width={wp('80%')}
                        height={hp('7.5%')}
                        btnSize={wp('5%')}
                        btnImg={''}
                        btnText={'PAUSE'}
                        bgColor='#e08b02'
                        labelColor='white'
                        fontWeight='bold'
                    />
                    </View>
                    <View style={{ marginVertical: hp('2%') }}>
                        <EllipticalButton
                            ellipticClick={() => props.navigation.pop()}
                            width={wp('80%')}
                        height={hp('7.5%')}
                        btnSize={wp('5%')}
                            btnImg={''}
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

export default WorkoutRest;
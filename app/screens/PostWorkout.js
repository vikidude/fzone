import React from 'react';
import { View, Text, StyleSheet, Image, BackHandler } from 'react-native'
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { workout_1 } from '../consts/images';
import { font } from '../consts/fontFamily';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { checkDayDiff } from '../lib/dateLib';

const PostWorkout = (props) => {
    const dispatch = useDispatch();
    const { workout_day } = useSelector(state => state.WorkoutReducer);
    const [dayOfWorkout,setDayOfWorkout] = React.useState(1);
    // const {calories,total_points} = props.navigation.state.params.response;
    const {calories,total_points} = props.navigation.state.params?.response?.Data;

    React.useEffect(()=>{
        const date = (new Date().getMonth()+1)+'/'+new Date().getDate()+'/'+new Date().getFullYear()
        // if(workout_day !== null){
        //     setDayOfWorkout(checkDayDiff(date))
        // }
        console.log(props.navigation.state.params.response.Data)
        dispatch({type: 'SET_WORKOUT_DAY',workout_day: date});
    },[])

    React.useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backButtonHandler);
    
        return () => {
          BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
        };
      }, [backButtonHandler]);

    const backButtonHandler = () => {
        console.log('Back handler')
        props.navigation.push('Home')
    }

    return (
        <View style={[StyleSheet.absoluteFill, {
            flex: 1, backgroundColor: 'white',
            alignItems: 'center', justifyContent: 'center'
        }]}>
            <View style={{ flexDirection: 'row', marginTop: hp('11%'), alignItems: 'center' }}>
                <Text style={{ fontSize: wp('7%'), fontFamily: font.bold }}>
                    DAY 1
                </Text>
                <View style={{
                    backgroundColor: 'greenyellow', width: wp('7%'), marginLeft: wp('2%'),
                    height: wp('7%'), borderRadius: (wp('7%')) / 2, alignItems: 'center'
                }}>
                    <Entypo name='check' size={wp('6.3%')} color='white' />
                </View>
            </View>
            <Image source={workout_1} style={{ width: wp('100%'), height: hp('40%'), marginTop: hp('3%') }} />
            <Text style={{
                color: 'white', fontFamily: font.bold, fontSize: wp('9%'), position: 'absolute',
                top: hp('50%')
            }}>
                WELL DONE
            </Text>
            <View style={{
                flexDirection: 'column', marginVertical: hp('6%'), width: wp('100%'),
                paddingLeft: wp('7%')
            }}>
                <Text style={{
                    color: 'black', fontFamily: font.bold, fontSize: wp('5%')
                }}>
                    TOTAL CALORIES BURNED: {calories}
            </Text>
                <Text style={{
                    color: 'black', fontFamily: font.bold, fontSize: wp('5%')
                }}>
                    PROGRESS: {total_points}%
            </Text>
            </View>
            <View style={{ marginVertical: hp('2%') }}>
                <EllipticalButton
                    ellipticClick={() => props.navigation.navigate('Home')}
                    width={wp('90%')}
                    height={hp('8%')}
                    btnImg={''}
                    btnSize={wp('5%')}
                    btnText={'HOME'}
                    bgColor='#d9a821'
                    labelColor='white'
                    fontWeight='bold'
                />
            </View>
        </View>
    );
}

export default PostWorkout;
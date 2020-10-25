import React from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity,Text } from 'react-native';
import { workout_1, tfz_black_logo } from '../consts/images';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { Colors } from '../consts/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationEvents } from 'react-navigation';

const Home = (props) => {
    const [duration,setDuraction] = React.useState(null);
    const[play,setPlay] = React.useState(false);
    const [pause,setPause] = React.useState(false);
    // React.useEffect(()=>{
    //     console.log('hitted',pause)
    //     if(duration !== null && duration > -1 && play && !pause){
    //         setTimeout(() => {
    //             setDuraction(duration-1);
    //         }, 1000);
    //         if(duration === 0){
    //             console.log('hi')
    //             setDuraction(null);
    //             // props.navigation.push('Profile')
    //         }
    //     }
    // },[duration])
    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white' }]}>
            {/* <NavigationEvents
                onWillFocus={()=>setDuraction(null)}
            />
            <TouchableOpacity onPress={()=>[setDuraction(25),setPlay(true)]}>
                <Text>Start Timer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                setPause(!pause)
                console.log('pause: ',pause,play)
                if(pause && duration> -1){
                    setDuraction(duration-1)
                }
            }}>
                <Text>Pause</Text>
            </TouchableOpacity>
            <Text style={{color:'black',textAlign:'center'}}>{duration}</Text> */}
            <ScrollView>
                <Image source={workout_1} style={{ width: wp('100%'), height: hp('35%') }} />
                <Image source={tfz_black_logo} style={{
                    width: wp('60%'), height: hp('13%'), position: 'absolute',
                    top: hp('13%'), left: wp('20%')
                }} />
                <View style={{ marginVertical: wp('5%'), alignItems: 'center' }}>
                    <EllipticalButton
                        ellipticClick={() => props.navigation.push('SeniorCitizenPlan')}
                        width={wp('90%')}
                        height={hp('20%')}
                        btnImg={''}
                        btnSize={wp('6%')}
                        btnText={'WORKOUTS'}
                        bgColor='white'
                        labelColor='grey'
                        borderRadius={wp('5%')}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <EllipticalButton
                        ellipticClick={() => props.navigation.navigate('FoodPlan')}
                        width={wp('90%')}
                        height={hp('15%')}
                        btnImg={''}
                        btnSize={wp('6%')}
                        btnText={'FOOD CHART'}
                        bgColor= {Colors.purple}
                        labelColor='white'
                        borderRadius={wp('5%')}
                    />
                </View>
                <View style={{ marginVertical: wp('5%'), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', }}>
                    <EllipticalButton
                        ellipticClick={() => props.navigation.navigate('SingleLeaderBoard')}
                        width={wp('45%')}
                        height={hp('13.5%')}
                        btnImg={''}
                        btnSize={wp('4%')}
                        btnText={'LEADERBOARD'}
                        bgColor= {Colors.navy_blue}
                        labelColor='white'
                        borderRadius={wp('5%')}
                    />
                    <EllipticalButton
                        ellipticClick={() => props.navigation.push('Profile')}
                        width={wp('45%')}
                        height={hp('13.5%')}
                        btnImg={''}
                        btnSize={wp('4%')}
                        btnText={'PROFILE'}
                        bgColor= {Colors.light_green}
                        labelColor='white'
                        borderRadius={wp('5%')}
                    />
                </View>
                <View style={{ marginVertical: wp('1.5%'), alignItems: 'center',flexDirection:'row', justifyContent:'space-around', }}>
                <EllipticalButton
                    ellipticClick={() => props.navigation.navigate('Feedback')}
                    width={wp('45%')}
                    height={hp('13.5%')}
                    btnImg={''}
                    btnSize={wp('4%')}
                    btnText={'SUPPORT'}
                    bgColor= {Colors.light_yellow}
                    labelColor='white'
                    borderRadius={wp('5%')}
                />
                <EllipticalButton
                    ellipticClick={() => props.navigation.push('Settings')}
                    width={wp('45%')}
                    height={hp('13.5%')}
                    btnImg={''}
                    btnSize={wp('4%')}
                    btnText={'SETTINGS'}
                    bgColor= {Colors.medium_red}
                    labelColor='white'
                    borderRadius={wp('5%')}
                />
            </View>
            <View style={{alignItems:'center', marginVertical: hp('4%')}}>
            <EllipticalButton
                    ellipticClick={() => props.navigation.navigate('Login')}
                    width={wp('90%')}
                    height={hp('7.5%')}
                    btnImg={''}
                    btnSize={wp('5%')}
                    btnText={'Logout'}
                    bgColor= {Colors.dark_blue}
                    labelColor='white'
                    borderRadius={wp('5%')}
                />
                </View>
            </ScrollView>
        </View>
    );
}

export default Home;
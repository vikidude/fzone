import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { workout_1, tfz_black_logo } from '../consts/images';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { Colors } from '../consts/colors';
const { height, width } = Dimensions.get('screen');

const Home = (props) => {
    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white' }]}>
            <ScrollView>
                <Image source={workout_1} style={{ width: width, height: height * 0.35 }} />
                <Image source={tfz_black_logo} style={{
                    width: width * 0.6, height: height * 0.12, position: 'absolute',
                    top: height * 0.13, left: width * 0.2
                }} />
                <View style={{ marginVertical: width * 0.045, alignItems: 'center' }}>
                    <EllipticalButton
                        ellipticClick={() => props.navigation.navigate('SeniorCitizenPlan')}
                        width={width * 0.9}
                        height={height * 0.20}
                        btnImg={''}
                        btnSize={width * 0.06}
                        btnText={'WORKOUTS'}
                        bgColor='white'
                        labelColor='grey'
                        borderRadius={width * 0.06}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <EllipticalButton
                        ellipticClick={() => props.navigation.navigate('FoodPlan')}
                        width={width * 0.9}
                        height={height * 0.14}
                        btnImg={''}
                        btnSize={width * 0.06}
                        btnText={'FOOD CHART'}
                        bgColor= {Colors.purple}
                        labelColor='white'
                        borderRadius={width * 0.06}
                    />
                </View>
                <View style={{ marginVertical: width * 0.045, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', }}>
                    <EllipticalButton
                        ellipticClick={() => props.navigation.navigate('SingleLeaderBoard')}
                        width={width * 0.45}
                        height={height * 0.13}
                        btnImg={''}
                        btnSize={width * 0.04}
                        btnText={'LEADERBOARD'}
                        bgColor= {Colors.navy_blue}
                        labelColor='white'
                        borderRadius={width * 0.06}
                    />
                    <EllipticalButton
                        ellipticClick={() => props.navigation.navigate('Profile')}
                        width={width * 0.45}
                        height={height * 0.13}
                        btnImg={''}
                        btnSize={width * 0.04}
                        btnText={'PROFILE'}
                        bgColor= {Colors.light_green}
                        labelColor='white'
                        borderRadius={width * 0.05}
                    />
                </View>
                <View style={{ marginVertical: width * 0.01, alignItems: 'center',flexDirection:'row', justifyContent:'space-around', }}>
                <EllipticalButton
                    ellipticClick={() => props.navigation.navigate('Feedback')}
                    width={width * 0.45}
                    height={height * 0.13}
                    btnImg={''}
                    btnSize={width * 0.04}
                    btnText={'SUPPORT'}
                    bgColor= {Colors.light_yellow}
                    labelColor='white'
                    borderRadius = {width * 0.06}
                />
                <EllipticalButton
                    ellipticClick={() => props.navigation.navigate('Settings')}
                    width={width * 0.45}
                    height={height * 0.13}
                    btnImg={''}
                    btnSize={width * 0.04}
                    btnText={'SETTINGS'}
                    bgColor= {Colors.medium_red}
                    labelColor='white'
                    borderRadius = {width * 0.05}
                />
            </View>
            <View style={{alignItems:'center', marginVertical: height * 0.03}}>
            <EllipticalButton
                    ellipticClick={() => props.navigation.navigate('Login')}
                    width={width * 0.9}
                    height={height * 0.07}
                    btnImg={''}
                    btnSize={width * 0.04}
                    btnText={'Logout'}
                    bgColor= {Colors.dark_blue}
                    labelColor='white'
                    borderRadius = {width * 0.06}
                />
                </View>
            </ScrollView>
        </View>
    );
}

export default Home;

// import React, { Component } from 'react';
// import { View, Text, StyleSheet, ScrollView, Dimensions, FlatList } from 'react-native';
// import PlanCard from '../components/functionalComponent/PlanCard';

// const { height, width } = Dimensions.get('screen');

// class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }

//     render() {
//         return (
//             <View style={[{ flex: 1, paddingLeft: width * 0.035, alignItems: 'center', backgroundColor: 'red' }]}>
//                 <ScrollView>
//                     <Text style={{ color: 'white', fontSize: height * 0.05, textAlign: 'center', paddingVertical: height * 0.015 }}>
//                         Home
//                     </Text>
//                     <FlatList
//                         data={[1, 2, 3]}
//                         horizontal={true}
//                         showsHorizontalScrollIndicator={false}
//                         renderItem={({ item, index }) => (
//                             <PlanCard
//                                 height={height * 0.4}
//                                 width={width * 0.9}
//                                 planImg={'https://i.ytimg.com/vi/clFVVaXyLio/hqdefault.jpg'}
//                                 planName={'Relax Yoga: Spine & Breathwork'}
//                                 planLimit={'1h'}
//                                 btnSize={width * 0.04}
//                                 planBy={'by Anvita Dixit | BEGINNER'}
//                                 timeSlots={[{ time: '07:00 PM', showDot: true }, { time: '08:00 PM', showDot: false }, { time: 'MORE', showDot: false }]}
//                             />
//                         )}
//                         ItemSeparatorComponent={() => (
//                             <View style={{ marginLeft: width * 0.03 }} />
//                         )}
//                         keyExtractor={(item, index) => index}
//                     />
//                 </ScrollView>
//             </View>
//         );
//     }
// }

// export default Home;
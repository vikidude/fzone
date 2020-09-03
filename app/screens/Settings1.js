import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { workout_1, tfz_black_logo } from '../consts/images';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
const { height, width } = Dimensions.get('screen');

const Settings = (props) => {
    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white' }]}>
            <ScrollView>
                <Image source={workout_1} style={{ width: width, height: height * 0.35 }} />
                <Image source={tfz_black_logo} style={{
                    width: width * 0.3, height: width * 0.1, position: 'absolute',
                    top: height * 0.15, left: width * 0.35
                }} />
                <View style={{ marginVertical: width * 0.045, alignItems: 'center' }}>
                    <EllipticalButton
                        ellipticClick={() => props.navigation.navigate('Planner')}
                        width={width * 0.9}
                        height={height * 0.25}
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
                        ellipticClick={() => props.navigation.navigate('Planner')}
                        width={width * 0.9}
                        height={height * 0.16}
                        btnImg={''}
                        btnSize={width * 0.06}
                        btnText={'FOOD CHART'}
                        bgColor='#ac28b8'
                        labelColor='white'
                        borderRadius={width * 0.06}
                    />
                </View>
                <View style={{ marginVertical: width * 0.045, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', }}>
                    <EllipticalButton
                        ellipticClick={() => props.navigation.navigate('LeaderBoard')}
                        width={width * 0.45}
                        height={height * 0.15}
                        btnImg={''}
                        btnSize={width * 0.05}
                        btnText={'LEADERBOARD'}
                        bgColor='#2b728a'
                        labelColor='white'
                        borderRadius={width * 0.06}
                    />
                    <EllipticalButton
                        ellipticClick={() => props.navigation.navigate('Planner')}
                        width={width * 0.45}
                        height={height * 0.15}
                        btnImg={''}
                        btnSize={width * 0.05}
                        btnText={'PROFILE'}
                        bgColor='#29d6b6'
                        labelColor='white'
                        borderRadius={width * 0.05}
                    />
                </View>
                <View style={{ marginVertical: width * 0.01, alignItems: 'center',flexDirection:'row', justifyContent:'space-around', }}>
                <EllipticalButton
                    ellipticClick={() => props.navigation.navigate('Planner')}
                    width={width * 0.45}
                    height={height * 0.15}
                    btnImg={''}
                    btnSize={width * 0.05}
                    btnText={'SUPPORT'}
                    bgColor='#e5ed51'
                    labelColor='white'
                    borderRadius = {width * 0.06}
                />
                <EllipticalButton
                    ellipticClick={() => props.navigation.navigate('Planner')}
                    width={width * 0.45}
                    height={height * 0.15}
                    btnImg={''}
                    btnSize={width * 0.05}
                    btnText={'SETTINGS'}
                    bgColor='#fa4d6d'
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
                    btnSize={width * 0.05}
                    btnText={'Logout'}
                    bgColor='#498fde'
                    labelColor='white'
                    borderRadius = {width * 0.06}
                />
                </View>
            </ScrollView>
        </View>
    );
}

export default Settings;
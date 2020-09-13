import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity, Modal } from 'react-native'
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
const { height, width } = Dimensions.get('screen');
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { tfz_black_logo, workout_1, start_workout } from '../consts/images';
import { font } from '../consts/fontFamily';

export const DuringWorkoutOne = (props) => {
    const [showSideMenu, updateSideMenu] = React.useState(false);
    const [timer, setTimer] = React.useState(0);
    const [pause, setPause] = React.useState(false);
    React.useEffect(() => {
        if (!pause) {
            setTimeout(() => {
                setTimer(timer + 1)
            }, 1000);
        }
    }, [timer])
    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: !showSideMenu ? 'white' : 'rgba(0,0,0,0.5)', paddingHorizontal: width * 0.04 }]}>
            {/* <Modal
                    animationType= 'slide'
                    transparent={true}
                    visible={showSideMenu}
                    onRequestClose={() => {
                        updateSideMenu(!showSideMenu)
                    }}>
                        <View style={{flex:1, width: width * 0.75,backgroundColor:'rgba(0,0,0,0.1)'}}>
                    <SideMenu />
                    </View>
                </Modal> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: height * 0.04, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <EllipticalButton
                        ellipticClick={() => props.navigation.toggleDrawer()}
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
                <View style={{ marginTop: height * 0.1, alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: height * 0.035, fontFamily: font.bold }}>
                        "Jumping Jack"
                </Text>
                    <View style={{
                        backgroundColor: '#dee609', borderWidth: 1, borderRadius: width * 0.04, marginTop: height * 0.03,
                        paddingVertical: height * 0.22, width: width * 0.8, borderColor: 'lightgrey'
                    }} />
                    <Text style={{ color: 'black', fontSize: height * 0.03, fontFamily: font.bold, marginVertical: height * 0.06 }}>
                        "Sets & reps"
                    </Text>
                    <Text style={{ color: 'black', fontSize: height * 0.045, fontFamily: font.bold, marginVertical: height * 0.02 }}>
                        {timer}
                    </Text>
                    <EllipticalButton
                        ellipticClick={() => { setPause(!pause); setTimer(timer + 1); }}
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
                            ellipticClick={() => props.navigation.navigate('DuringWorkoutTwo')}
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
            </ScrollView>
        </View>
    );
}

export const DuringWorkoutTwo = (props) => {
    const [timer, setTimer] = React.useState(0);
    const [pause, setPause] = React.useState(false);
    React.useEffect(() => {
        if (!pause) {
            setTimeout(() => {
                setTimer(timer + 1)
            }, 1000);
        }
    }, [timer])
    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white', paddingHorizontal: width * 0.04 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: height * 0.04, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <View style={{
                        backgroundColor: 'red', width: width * 0.1, height: width * 0.1, alignItems: 'center', justifyContent: 'center',
                        borderRadius: (width * 0.1) / 2
                    }}>
                        <Entypo name='cross' size={width * 0.05} color='white' />
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: height * 0.09, fontFamily: font.regular, marginVertical: height * 0.2 }}>
                        REST
                    </Text>
                    <Text style={{ color: 'black', fontSize: height * 0.055, fontFamily: font.bold, marginVertical: height * 0.02 }}>
                        {timer}
                    </Text>
                    <EllipticalButton
                        ellipticClick={() => { setPause(!pause); setTimer(timer + 1) }}
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
                            ellipticClick={() => props.navigation.navigate('PostWorkout')}
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
            </ScrollView>
        </View>
    );
}

export const SideMenu = (props) => {
    // React.useEffect(()=>{
    //     props.navigation.navigate('PostWorkout')
    // },[])
    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }]}>
            <View style={{
                borderColor: '#d9ff52', borderWidth: width * 0.025, borderRadius: width * 0.07,
                paddingVertical: height * 0.1, width: width * 0.5
            }} />
            <View style={{
                borderColor: '#ffd152', borderWidth: width * 0.025, borderRadius: width * 0.07,
                paddingVertical: height * 0.1, width: width * 0.5, marginVertical: height * 0.07
            }} />
            <View style={{
                borderColor: 'red', borderWidth: width * 0.025, borderRadius: width * 0.07,
                paddingVertical: height * 0.1, width: width * 0.5
            }} />
        </View>
    );
}

export const AddWorkout = (props) => {
    return (
        <View style={[StyleSheet.absoluteFill, {
            flex: 1, backgroundColor: 'white', paddingTop: height * 0.07, paddingBottom: height * 0.05,
            alignItems: 'center', justifyContent: 'space-between'
        }]}>
            <Image source={tfz_black_logo}
                style={{ width: width * 0.6, height: width * 0.23 }} />
            {/* <Text style={{ color: 'black', fontSize: height * 0.07, fontWeight: 'bold' }}>
                EMPTY
            </Text> */}
            <Image source={start_workout} style={{ width: width, height: height * 0.5 }} />
            <EllipticalButton
                ellipticClick={() => props.navigation.navigate('Planner')}
                width={width * 0.9}
                height={height * 0.07}
                btnImg={''}
                btnSize={width * 0.05}
                btnText={'Add Workout Plan'}
                bgColor='#d9a821'
                labelColor='white'
                fontWeight='bold'
            />
        </View>
    );
}

export const PostWorkout = (props) => {
    return (
        <View style={[StyleSheet.absoluteFill, {
            flex: 1, backgroundColor: 'white',
            alignItems: 'center', justifyContent: 'center'
        }]}>
            <View style={{ flexDirection: 'row', marginTop: height * 0.12, alignItems: 'center' }}>
                <Text style={{ fontSize: width * 0.09, fontFamily: font.bold }}>
                    DAY 1
                </Text>
                <View style={{
                    backgroundColor: 'greenyellow', width: width * 0.07,
                    height: width * 0.07, borderRadius: (width * 0.07) / 2, alignItems: 'center'
                }}>
                    <Entypo name='check' size={width * 0.065} color='white' />
                </View>
            </View>
            <Image source={workout_1} style={{ width: width, height: height * 0.35, marginTop: height * 0.03 }} />
            <Text style={{
                color: 'white', fontFamily: font.bold, fontSize: width * 0.1, position: 'absolute',
                top: height * 0.5
            }}>
                WELL DONE
            </Text>
            <View style={{
                flexDirection: 'column', marginVertical: height * 0.05, width: width,
                paddingLeft: width * 0.08
            }}>
                <Text style={{
                    color: 'black', fontFamily: font.bold, fontSize: width * 0.05
                }}>
                    TOTAL CALORIES BURNED: 500
            </Text>
                <Text style={{
                    color: 'black', fontFamily: font.bold, fontSize: width * 0.05
                }}>
                    PROGRESS: 1%
            </Text>
            </View>
            <View style={{ marginVertical: height * 0.01 }}>
                <EllipticalButton
                    ellipticClick={() => props.navigation.navigate('SeniorCitizenPlan')}
                    width={width * 0.9}
                    height={height * 0.07}
                    btnImg={''}
                    btnSize={width * 0.05}
                    btnText={'HOME'}
                    bgColor='#d9a821'
                    labelColor='white'
                    fontWeight='bold'
                />
            </View>
        </View>
    );
}
import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
const { width, height } = Dimensions.get('screen');
import CustomTextInput from '../components/classComponent/CustomTextInput';
import Dpicker from '../components/functionalComponent/DPicker';
import Icon from 'react-native-vector-icons/Feather';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { workout_1, tfz_black_logo } from '../consts/images';

export const Planner = (props) => {
    const workoutFreq = [
        { label: 'Once a Day', value: 'Once a Day' },
        { label: 'Twice a Day', value: 'Twice a Day' },
    ]
    const goals = [
        { label: 'Lose Fat', value: 'Lose Fat' },
        { label: 'Gain Muscle', value: 'Gain Muscle' },
        { label: 'Improve Flexibility', value: 'Improve Flexibility' },
    ]
    const [workFreq,setWorkFreq] = React.useState('');
    const [goal,setGoal] = React.useState('');

    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'black', alignItems: 'center' }]}>
            <ScrollView>
                <View style={{ alignItems: 'center', paddingLeft: width * 0.03 }}>
                    {/* <View style={{ marginTop: height * 0.03, marginBottom: height * 0.02, alignSelf: 'flex-start', marginHorizontal: width * 0.06 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: width * 0.07 }}>
                            YOUR
                        </Text>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: width * 0.07 }}>
                            PLANNER
                        </Text>
                        <View style={{height: width * 0.02, width: width * 0.02,marginTop: height * 0.03,marginLeft: width * 0.01,
                            borderRadius: (width * 0.02)/2 ,backgroundColor:'red'}} />
                        </View>
                    </View> */}

                    <View style={{ flexDirection: 'column', alignSelf: 'flex-start', marginLeft: width * 0.03, marginVertical: height * 0.03 }}>
                        <Text style={{ fontSize: width * 0.07, color: 'white' }}>YOUR</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: width * 0.07, color: 'white' }}>PLANNER</Text>
                            <View style={{
                                height: width * 0.02, width: width * 0.02, marginTop: height * 0.03, marginLeft: width * 0.01,
                                borderRadius: (width * 0.02) / 2, backgroundColor: 'red'
                            }} />
                        </View>
                    </View>

                    <View style={{marginTop: height * 0.03}}>
                    <Dpicker
                        items={workoutFreq}
                        placeholder = {'Select Workout Frequency'}
                        dValue={workFreq}
                        dLabel={''}
                        changeDValue={(item) => setWorkFreq(item.value)}
                        zIndex={5000}
                    />
                    </View>
                    <View style={{marginTop: height * 0.03 }}/>
                    <Dpicker
                        items={goals}
                        placeholder = {'Select Goals'}
                        dValue={goal}
                        dLabel={''}
                        changeDValue={(item) => setGoal(item.value)}
                        zIndex={4000}
                    />
                    <CustomInputBox
                        containerTop={height * 0.03}
                        leftText={'LOSE FAT'}
                        showBtn={true}
                    />
                    <CustomInputBox
                        containerTop={height * 0.03}
                        leftText={'GAIN MUSCLE'}
                        showBtn={false}
                    />
                    <CustomInputBox
                        containerTop={height * 0.03}
                        leftText={'IMPROVE FLEXIBLITY'}
                        showBtn={false}
                    />
                    <View style={{ marginVertical: height * 0.03 }}>
                        <EllipticalButton
                            ellipticClick={() => props.navigation.navigate('FinalStep')}
                            width={width * 0.9}
                            height={height * 0.07}
                            btnImg={''}
                            btnSize={width * 0.05}
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
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: width * 0.04 }}>
                    {props.leftText}
                </Text>
                {props.showBtn &&
                    <TouchableOpacity onPress={() => { }} style={{ backgroundColor: '#4069ff', padding: width * 0.014, borderRadius: width * 0.03 }}>
                        <Text style={{ color: 'white', fontSize: width * 0.025, fontWeight: 'bold' }}>
                            Recommended
                </Text>
                    </TouchableOpacity>}
            </View>
            <TextInput
                style={{
                    width: width * 0.9,
                    marginTop: height * 0.02,
                    marginBottom: height * 0.04
                }}
            />

        </View>
    );
}

export const FinalStep = (props) => {
    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'black' }]}>
            <ScrollView>
                {/* <View style={{ marginTop: height * 0.15, marginBottom: height * 0.02, alignSelf: 'flex-start', marginHorizontal: width * 0.06 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: width * 0.07 }}>
                        FINAL
                </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: width * 0.07 }}>
                            STEP
                    </Text>
                    <View style={{height: width * 0.02, width: width * 0.02,marginTop: height * 0.03,marginLeft: width * 0.01,
                            borderRadius: (width * 0.02)/2 ,backgroundColor:'red'}} />
                    </View>
                </View> */}
                 <View style={{ flexDirection: 'column', alignSelf: 'flex-start', marginLeft: width * 0.06, marginVertical: height * 0.03 }}>
                        <Text style={{ fontSize: width * 0.07, color: 'white' }}>FINAL</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: width * 0.07, color: 'white' }}>STEP</Text>
                            <View style={{
                                height: width * 0.02, width: width * 0.02, marginTop: height * 0.03, marginLeft: width * 0.01,
                                borderRadius: (width * 0.02) / 2, backgroundColor: 'red'
                            }} />
                        </View>
                    </View>

                <View style={{
                    marginVertical: height * 0.03, backgroundColor: 'white', width: width * 0.9,
                    borderWidth: 1, borderRadius: width * 0.05, alignSelf: 'center', paddingHorizontal: width * 0.07
                }}>
                    <Image source={workout_1} style={{ width: width * 0.75, height: width * 0.5, resizeMode: 'cover', marginVertical: height * 0.04 }} />
                    <Text style={{ color: '#73dea3', fontWeight: 'bold', fontSize: height * 0.035, width: width * 0.75 }}>
                        LOOSE FAT
                    </Text>
                    <Text style={{ color: 'black', fontSize: height * 0.023, width: width * 0.75, marginVertical: height * 0.015 }}>
                        Here is the demo test for final step screen. You can test the responsiveness from here.
                    </Text>
                    <TouchableOpacity onPress={() => { }} style={{
                        backgroundColor: 'white', borderWidth: 1, marginVertical: height * 0.03, elevation: 3,
                        paddingVertical: height * 0.015, borderRadius: width * 0.5, borderColor: '#ffffff'
                    }}>
                        <Text style={{ color: 'grey', textAlign: 'center', fontWeight: 'bold', fontSize: width * 0.04 }}>
                            Begineer
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={{
                        backgroundColor: 'white', borderWidth: 1, elevation: 3, borderColor: '#ffffff',
                        paddingVertical: height * 0.015, borderRadius: width * 0.5
                    }}>
                        <Text style={{ color: 'grey', textAlign: 'center', fontWeight: 'bold', fontSize: width * 0.04 }}>
                            Intermediate
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }} style={{
                        backgroundColor: 'white', borderWidth: 1, marginVertical: height * 0.03, elevation: 3, borderColor: '#ffffff',
                        paddingVertical: height * 0.015, borderRadius: width * 0.5
                    }}>
                        <Text style={{ color: 'grey', textAlign: 'center', fontWeight: 'bold', fontSize: width * 0.04 }}>
                            Advanced
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: height * 0.03, alignItems: 'center' }}>
                    <EllipticalButton
                        ellipticClick={() => props.navigation.navigate('ChoosePlan')}
                        width={width * 0.9}
                        height={height * 0.07}
                        btnImg={''}
                        btnSize={width * 0.05}
                        btnText={'Next'}
                        bgColor='#4069ff'
                        labelColor='white'
                    />
                </View>
            </ScrollView>
        </View>
    );
}

export const ChoosePlan = (props) => {
    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'black' }]}>
            <ScrollView>
                {/* <View style={{ marginTop: height * 0.08, marginBottom: height * 0.02, alignSelf: 'flex-start', marginHorizontal: width * 0.06 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: width * 0.07 }}>
                        CHOOSE
                </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: width * 0.07 }}>
                            PLAN
                    </Text>
                    <View style={{height: width * 0.02, width: width * 0.02,marginTop: height * 0.03,marginLeft: width * 0.01,
                            borderRadius: (width * 0.02)/2 ,backgroundColor:'red'}} />
                    </View>
                </View> */}
                <View style={{ flexDirection: 'column', alignSelf: 'flex-start', marginLeft: width * 0.06, marginVertical: height * 0.03 }}>
                        <Text style={{ fontSize: width * 0.07, color: 'white' }}>CHOOSE</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: width * 0.07, color: 'white' }}>PLAN</Text>
                            <View style={{
                                height: width * 0.02, width: width * 0.02, marginTop: height * 0.03, marginLeft: width * 0.01,
                                borderRadius: (width * 0.02) / 2, backgroundColor: 'red'
                            }} />
                        </View>
                    </View>

                <FlatList
                    data={[30, 60, 90]}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress = {()=> props.navigation.navigate('SeniorCitizenPlan') }style={{
                            backgroundColor: 'white', width: width * 0.9, borderWidth: 1,
                            borderRadius: width * 0.06, alignSelf: 'center', paddingHorizontal: width * 0.07, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                        }}>
                            <Image source={workout_1} style={{ width: width * 0.45, height: width * 0.35, resizeMode: 'cover', marginVertical: height * 0.04 }} />
                            <View style={{ backgroundColor: '#73dea3', height: width * 0.2, width: width * 0.2, borderRadius: (width * 0.2) / 2, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: width * 0.055, fontWeight: 'bold' }}>
                                    {item}
                                </Text>
                                <Text style={{ color: 'black', fontSize: width * 0.035 }}>
                                    DAYS
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ marginTop: height * 0.03 }} />
                    )}
                />
            </ScrollView>
        </View>
    );
}

export const SeniorCitizenPlan = (props) => {
    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white' }]}>
            <ScrollView>
                <Image source={workout_1}
                    style={{ width: width, height: width * 0.6, resizeMode: 'cover' }} />
                <Image source={tfz_black_logo}
                    style={{ width: width * 0.28, height: width * 0.1, position: 'absolute', top: height * 0.13, left: width * 0.37 }} />
                <Text style={{ color: '#ffd666', fontWeight: 'bold', fontSize: width * 0.06, position: 'absolute', top: height * 0.25, right: 0 }}>
                    SENIOR CITIZEN PLAN
            </Text>
                <View style={{ paddingHorizontal: width * 0.04 }}>
                    <Text style={{ marginTop: height * 0.01, fontSize: height * 0.05, color: 'black', fontWeight: 'bold' }}>
                        DAY 1
            </Text>
                    <Text style={{ fontSize: height * 0.03, color: 'red', fontWeight: 'bold' }}>
                        20 mins
            </Text>

                    <FlatList
                        contentContainerStyle={{ marginTop: height * 0.06 }}
                        data={[1, 2, 3, 4, 5]}
                        renderItem={({ item, index }) => (
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={workout_1}
                                    style={{ width: width * 0.38, height: width * 0.25, resizeMode: 'cover' }} />
                                <View style={{ flexDirection: 'column', paddingHorizontal: width * 0.05 }}>
                                    <Text style={{ color: 'black', fontSize: width * 0.05, fontWeight: 'bold' }}>
                                        Jumping Jacks
                                    </Text>
                                    <Text style={{ color: 'grey', fontSize: width * 0.04, }}>
                                        Sets: Reps
                                    </Text>
                                </View>
                            </View>
                        )}
                        ItemSeparatorComponent={() => (
                            <View style={{ marginTop: height * 0.03 }} />
                        )}
                    />
                </View>
                <View style={{ marginTop: height * 0.04, alignItems: 'center' }}>
                    <EllipticalButton
                        ellipticClick={() => props.navigation.navigate('DuringWorkoutOne')}
                        width={width * 0.9}
                        height={height * 0.07}
                        btnImg={''}
                        btnSize={width * 0.05}
                        btnText={'START WORKOUT'}
                        bgColor='#e08b02'
                        labelColor='white'
                        fontWeight = 'bold'
                    />
                </View>
                <View style={{ marginVertical: height * 0.02, alignItems: 'center' }}>
                    <EllipticalButton
                        ellipticClick={() => props.navigation.navigate('AddWorkout')}
                        width={width * 0.9}
                        height={height * 0.07}
                        btnImg={''}
                        btnSize={width * 0.05}
                        btnText={'CANCEL PLAN'}
                        bgColor='red'
                        labelColor='white'
                        fontWeight = 'bold'
                    />
                </View>
            </ScrollView>
        </View>
    );
}
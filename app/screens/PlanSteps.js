import React from 'react'
import { View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
const { width, height } = Dimensions.get('screen');
import Dpicker from '../components/functionalComponent/DPicker';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { workout_1, tfz_black_logo } from '../consts/images';
import { font } from '../consts/fontFamily';
import { connect } from 'react-redux';
import { getWorkoutFrequency } from '../actions/workoutAction';

const Planner = (props) => {

    const goals = [
        { label: 'Lose Fat', value: 'Lose Fat' },
        { label: 'Gain Muscle', value: 'Gain Muscle' },
        { label: 'Improve Flexibility', value: 'Improve Flexibility' },
    ]
    const [workFreq, setWorkFreq] = React.useState('');
    const [goal, setGoal] = React.useState('');
    const [workoutFrequency, updateWorkoutFrequency] = React.useState([]);

    // const getWorkoutFrequency = () => {
    //     axios.get('http://ttci-demo.com:10/tfz_web/tfzapi_user/public/api/mobile/yourplanner').then(res => {
    //         console.log('Get workout frequency response: ', res.data.workout_frequency);
    //         let data = res.data.workout_frequency;
    //         let value = data.map(item => ({ label: (item.workout_schedule).trim(), value: (item.workout_schedule).trim() }));
    //         updateWorkoutFrequency(value);
    //     }).catch(ex => {
    //         console.log('Error of get workout frequency level: ', ex);
    //     })
    // }

    React.useState(() => {
        // getWorkoutFrequency();
        props.getWorkoutFrequency();
    }, [])

    React.useEffect(() => {
        //console.log('frequ data: ', props.workoutFreqData.length)
        if(props.workoutFreqData.length>0){
            let value = props.workoutFreqData.map(item => ({ label: (item.workout_schedule).trim(), value: (item.workout_schedule).trim() }));
            console.log(value)
            updateWorkoutFrequency(value);
        }
    }, [props.workoutFreqData])

    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'black', alignItems: 'center' }]}>
            <ScrollView>
                <View style={{ alignItems: 'center', paddingLeft: width * 0.03 }}>
                    <View style={{ flexDirection: 'column', alignSelf: 'flex-start', marginLeft: width * 0.03, marginVertical: height * 0.03 }}>
                        <Text style={{ fontSize: width * 0.07, color: 'white' }}>YOUR</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: width * 0.07, color: 'white', fontFamily: font.regular }}>PLANNER</Text>
                            <View style={{
                                height: width * 0.02, width: width * 0.02, marginTop: height * 0.03, marginLeft: width * 0.01,
                                borderRadius: (width * 0.02) / 2, backgroundColor: 'red'
                            }} />
                        </View>
                    </View>

                    <View style={{ marginTop: height * 0.03 }}>
                        <Dpicker
                            items={workoutFrequency}
                            placeholder={'Select Workout Frequency'}
                            dValue={workFreq}
                            dLabel={''}
                            changeDValue={(item) => setWorkFreq(item.value)}
                            zIndex={5000}
                        />
                    </View>
                    <View style={{ marginTop: height * 0.03 }} />
                    <Dpicker
                        items={goals}
                        placeholder={'Select Goals'}
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

const mapStateToProps = state => {
    return {
        workoutFreqData: state.WorkoutReducer.workoutFreqData,
    };

};
const mapDispatchToProps = dispatch => {
    return {
        getWorkoutFrequency: () => dispatch(getWorkoutFrequency()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Planner);

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
                style={{
                    width: width * 0.9,
                    marginTop: height * 0.02,
                    marginBottom: height * 0.04
                }}
            />

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
                <Text style={{ color: '#ffd666', fontFamily: font.bold, fontSize: width * 0.06, position: 'absolute', top: height * 0.25, right: 0 }}>
                    SENIOR CITIZEN PLAN
            </Text>
                <View style={{ paddingHorizontal: width * 0.04 }}>
                    <Text style={{ marginTop: height * 0.01, fontSize: height * 0.05, color: 'black', fontFamily: font.bold }}>
                        DAY 1
            </Text>
                    <Text style={{ fontSize: height * 0.03, color: 'red', fontFamily: font.bold }}>
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
                                    <Text style={{ color: 'black', fontSize: width * 0.05, fontFamily: font.bold }}>
                                        Jumping Jacks
                                    </Text>
                                    <Text style={{ color: 'grey', fontSize: width * 0.04, fontFamily: font.regular }}>
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
                        fontWeight='bold'
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
                        fontWeight='bold'
                    />
                </View>
            </ScrollView>
        </View>
    );
}
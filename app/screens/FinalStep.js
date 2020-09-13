import React from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
const { width, height } = Dimensions.get('screen');
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { workout_1 } from '../consts/images';
import { font } from '../consts/fontFamily';
import axios from 'axios';
import { connect } from 'react-redux';
import { getWorkoutTypes } from '../actions/workoutAction';

const FinalStep = (props) => {
    const [workoutType, updateWorkoutType] = React.useState([]);

    // const getWorkoutType = () => {
    //     axios.get('http://ttci-demo.com:10/tfz_web/tfzapi_user/public/api/mobile/workouttype').then(res => {
    //         // console.log('Get workout type response: ', res.data.workout_type);
    //         let data = res.data.workout_type;
    //         let value = data.map(item => ({ id: (item.id), value: (item.workout_type_name).trim() }));
    //         // console.log('values: ',value);
    //         updateWorkoutType(value);
    //     }).catch(ex => {
    //         console.log('Error of get workout type: ', ex);
    //     })
    // }

    React.useState(() => {
        props.getWorkoutTypes();
    }, [])

    React.useEffect(() => {
        console.log(props.workoutType)
        if (props.workoutType.length > 0) {
            let value = props.workoutType.map(item => ({ id: (item.id), value: (item.workout_type_name).trim() }));
            console.log(value)
            updateWorkoutType(value);
        }
    }, [props.workoutType])

    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'black' }]}>
            <ScrollView>
                <View style={{ flexDirection: 'column', alignSelf: 'flex-start', marginLeft: width * 0.06, marginVertical: height * 0.03 }}>
                    <Text style={{ fontSize: width * 0.07, color: 'white', fontFamily: font.regular }}>FINAL</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: width * 0.07, color: 'white', fontFamily: font.regular }}>STEP</Text>
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
                    <Text style={{ color: '#73dea3', fontSize: height * 0.035, width: width * 0.75, fontFamily: font.bold }}>
                        LOSE FAT
                    </Text>
                    <Text style={{ color: 'black', fontSize: height * 0.023, width: width * 0.75, marginVertical: height * 0.015, fontFamily: font.regular }}>
                        Here is the demo test for final step screen. You can test the responsiveness from here.
                    </Text>
                    <FlatList
                        data={workoutType}
                        showsVerticalScrollIndicator = {false}
                        contentContainerStyle={{ marginTop: height * 0.03, paddingBottom: height * 0.04 }}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => { }} style={{
                                backgroundColor: 'white', borderWidth: 1, elevation: 3, borderColor: '#ffffff',
                                paddingVertical: height * 0.015, borderRadius: width * 0.5
                            }}>
                                <Text style={{ color: 'grey', textAlign: 'center', fontFamily: font.regular, fontSize: width * 0.04 }}>
                                    {item.value}
                                </Text>
                            </TouchableOpacity>
                        )}
                        ItemSeparatorComponent={() => (
                            <View style={{ marginVertical: height * 0.015 }} />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
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

const mapStateToProps = state => {
    return {
        workoutType: state.WorkoutReducer.workoutType,
    };

};
const mapDispatchToProps = dispatch => {
    return {
        getWorkoutTypes: () => dispatch(getWorkoutTypes()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FinalStep);
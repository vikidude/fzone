import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
const { width, height } = Dimensions.get('screen');
import CustomTextInput from '../components/classComponent/CustomTextInput';
import Dpicker from '../components/functionalComponent/DPicker';
import Icon from 'react-native-vector-icons/Feather';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { workout_1, tfz_black_logo } from '../consts/images';
import { font } from '../consts/fontFamily';
import axios from 'axios';
import { connect } from 'react-redux';
import { getActivityDetails, getWorkoutFrequency, getWorkoutTypes, getWorkoutPlans } from '../actions/workoutAction';

const ChoosePlan = (props) => {
    const [plans, updatePlans] = React.useState([]);

    // const getPlans = () => {
    //     axios.get('http://ttci-demo.com:10/tfz_web/tfzapi_user/public/api/mobile/workoutplan').then(res => {
    //         // console.log('Get plans response: ', res.data.workoutplan);
    //         let data = res.data.workoutplan;
    //         updatePlans(data);
    //     }).catch(ex => {
    //         console.log('Error of get plans: ', ex);
    //     })
    // }

    React.useState(() => {
        props.getWorkoutPlans();
    }, [])

    React.useEffect(() => {
        console.log('WORKOUT PLANS: ',props.workoutPlans.length)
        if (props.workoutPlans.length > 0) {
            updatePlans(props.workoutPlans);
        }
    }, [props.workoutType])

    const data = "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"
    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'black' }]}>
            <ScrollView>
                <View style={{flex:1}}>
                <View style={{ flexDirection: 'column', alignSelf: 'flex-start', marginLeft: width * 0.06, marginVertical: height * 0.03 }}>
                    <Text style={{ fontSize: width * 0.07, color: 'white', fontFamily: font.regular }}>CHOOSE</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: width * 0.07, color: 'white', fontFamily: font.regular }}>PLAN</Text>
                        <View style={{
                            height: width * 0.02, width: width * 0.02, marginTop: height * 0.03, marginLeft: width * 0.01,
                            borderRadius: (width * 0.02) / 2, backgroundColor: 'red'
                        }} />
                    </View>
                </View>

                <FlatList
                    data={plans}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={{
                            backgroundColor: 'white', width: width * 0.9, borderWidth: 1, flexDirection: 'row', alignItems: 'center',
                            borderRadius: width * 0.06, alignSelf: 'center', paddingHorizontal: width * 0.07, justifyContent: 'space-between'
                        }}>
                            <Image source={{ uri: 'data:image/png;base64,' + item.work_out_plan_image }} style={{ width: width * 0.45, height: width * 0.35, resizeMode: 'cover', marginVertical: height * 0.04 }} />
                            <View style={{ backgroundColor: '#73dea3', height: width * 0.2, width: width * 0.2, borderRadius: (width * 0.2) / 2, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: width * 0.055, fontFamily: font.bold }}>
                                    {item.work_out_plan_count}
                                </Text>
                                <Text style={{ color: 'black', fontSize: width * 0.035, fontFamily: font.regular }}>
                                    DAYS
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ marginTop: height * 0.03 }} />
                    )}
                />
                </View>
            </ScrollView>
        </View>
    );
}

const mapStateToProps = state => {
    return {
        workoutPlans: state.WorkoutReducer.workoutPlans,
    };

};
const mapDispatchToProps = dispatch => {
    return {
        getWorkoutPlans: () => dispatch(getWorkoutPlans()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChoosePlan);
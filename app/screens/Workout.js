import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, FlatList, Pressable } from 'react-native';
import { workout_1, jumping_jack, incline_pushups, knee_pushups, pushups } from '../consts/images';
const { height, width } = Dimensions.get('screen');
import Ionicons from 'react-native-vector-icons/Ionicons';

const Workout = (props) => {
    const exercises = [
        {exe_img:jumping_jack,exe_name:'JUMPING JACK',exe_time: '00:20'},
        {exe_img:incline_pushups,exe_name:'INCLINE PUSH-UPS',exe_time: 'x10'},
        {exe_img:knee_pushups,exe_name:'KNEE PUSH-UPS',exe_time: 'x6'},
        {exe_img:pushups,exe_name:'PUSH-UPS',exe_time: 'x6'},
    ]
    return (
        <View style={{ flex: 1, }}>
            <Image source={workout_1} style={{ height: height * 0.35, width: width }} />
            <View style={{ position: 'absolute', top: height * 0.05, padding: width * 0.04, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', }}>
                    <Pressable onPress={()=>props.navigation.pop()}>
                    <Ionicons name='arrow-back' color='white' size={width * 0.08} />
                    </Pressable>
                    <Ionicons name='ellipsis-vertical' color='white' size={width * 0.08} style={{marginRight: width * 0.03}} />
                </View>
                <View style={{ marginTop: height * 0.025, paddingLeft: width * 0.085 }}>
                    <Text style={{ color: 'white', fontSize: width * 0.095, fontWeight: 'bold' }}>Day 1</Text>
                    <Text style={{ color: 'white', fontSize: width * 0.05, fontWeight: 'bold', marginTop: height * 0.02 }}>FULL BODY</Text>
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgrey', flexDirection: 'row', alignItems: 'center', padding: width * 0.05 }}>
                <View style={{ borderLeftWidth: width * 0.01, borderLeftColor: 'blue', height: height * 0.02, width: width * 0.01, }} />
                <Text style={{ color: 'black', paddingHorizontal: width * 0.02, fontSize: width * 0.046, fontWeight: 'bold' }}>9 mins</Text>
                <View style={{ width: width * 0.015, height: width * 0.015, backgroundColor: 'black', borderRadius: (width * 0.015) / 2 }} />
                <Text style={{ color: 'black', fontSize: width * 0.046, paddingHorizontal: width * 0.02, fontWeight: 'bold' }}>11 workouts</Text>
            </View>
            <FlatList
                data = {exercises}
                renderItem = {({item,index})=>(
                    <Exercise
                        {...item}
                    />
                )}
                keyExtractor ={(item,index)=>index}
            />

        </View>
    );
}

const Exercise = (props) => {
    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: width * 0.045, paddingTop: height * 0.03 }}>
                <Ionicons name='md-menu' color='grey' size={width * 0.08} />
                <Image source={props.exe_img} style={{ width: width * 0.2, height: height * 0.15, resizeMode: 'center' }} />
                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', flexGrow: 1, paddingLeft: width * 0.045 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: width * 0.05 }}>
                        {props.exe_name}
                    </Text>
                    <Text style={{ fontSize: width * 0.05, color: 'grey', marginTop: height * 0.02 }}>
                        {props.exe_time}
                    </Text>
                </View>
            </View>
            <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1, width: width * 0.8, marginTop: height * 0.02, marginLeft: width * 0.15 }} />
        </>
    );
}
export default Workout;
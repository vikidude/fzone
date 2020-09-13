import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { font } from '../consts/fontFamily';
const { width, height } = Dimensions.get('screen');

const Test = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{fontSize: width * 0.09,fontFamily: font.regular}}>
                Calculation
            </Text>
            <View style={{justifyContent: 'center',flex:1, alignItems:'center'}}>
            <Text style={{fontSize: width *0.08,fontFamily: font.regular}}>
                BMI 15.25
            </Text>
            <Text style={{fontSize: width *0.08,fontFamily: font.regular}}>
                BMR 25
            </Text>
            <View style={{ marginTop: width * 0.05, paddingHorizontal: width * 0.08 }}>
                <EllipticalButton
                    ellipticClick={() => props.navigation.navigate('Workout')}
                    width={width * 0.83}
                    height={height * 0.075}
                    btnImg={''}
                    btnSize={width * 0.06}
                    btnText={'Go To Workout'}
                    bgColor='grey'
                    labelColor='white'
                />
            </View>
            </View>
           
        </View>
    );
}

export default Test;
import React from 'react';
import { View, Text } from 'react-native';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { font } from '../consts/fontFamily';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BMICalculation = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: wp('9%'), fontFamily: font.regular }}>
                Calculation
            </Text>
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: wp('8%'), fontFamily: font.regular }}>
                    BMI 15.25
            </Text>
                <Text style={{ fontSize: wp('8%'), fontFamily: font.regular }}>
                    BMR 25
            </Text>
                <View style={{ marginTop: hp('3.5%'), paddingHorizontal: wp('8%') }}>
                    <EllipticalButton
                        ellipticClick={() => props.navigation.navigate('Workout')}
                        width={wp('85%')}
                        height={hp('9%')}
                        btnImg={''}
                        btnSize={wp('6%')}
                        btnText={'Go To Workout'}
                        bgColor='grey'
                        labelColor='white'
                    />
                </View>
            </View>
        </View>
    );
}

export default BMICalculation;
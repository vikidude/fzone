import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { tfz_black_logo, start_workout } from '../consts/images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AddWorkout = (props) => {
    return (
        <View style={[StyleSheet.absoluteFill, {
            flex: 1, backgroundColor: 'white', paddingTop: hp('6%'), paddingBottom: hp('5%'),
            alignItems: 'center', justifyContent: 'space-between'
        }]}>
            <Image source={tfz_black_logo}
                style={{ width: wp('60%'), height: wp('22%') }} />
            <Image source={start_workout} style={{ width: wp('100%'), height: hp('55%') }} />
            <EllipticalButton
                ellipticClick={() => props.navigation.navigate('YourPlanner')}
                width={wp('90%')}
                height={hp('8%')}
                btnImg={''}
                btnSize={wp('5%')}
                btnText={'Add Workout Plan'}
                bgColor='#d9a821'
                labelColor='white'
                fontWeight='bold'
            />
        </View>
    );
}

export default AddWorkout;
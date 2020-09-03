import React from 'react';
import {View,Text,Dimensions,StyleSheet, Image} from 'react-native';
import { tfz_white_logo } from '../consts/images';
const {width,height} = Dimensions.get('screen');

export const Welcome = (props) => {
    React.useEffect(()=>{
        setTimeout(() => {
            props.navigation.navigate('TFZ')
        }, 500);
    },[])
    return(
        <View style={[StyleSheet.absoluteFill,{flex:1, backgroundColor:'black',justifyContent:'center',alignItems:'center'}]}>
            <Text style={{fontSize: width * 0.15, color:'white', fontWeight:'bold'}}>
                WELCOME
            </Text>
        </View>
    );
}

export const TFZ = (props) => {
    React.useEffect(()=>{
        setTimeout(() => {
            props.navigation.navigate('Login')
        }, 500);
    },[])
    return(
        <View style={[StyleSheet.absoluteFill,{flex:1, backgroundColor:'black',justifyContent:'center',alignItems:'center'}]}>
            <Image source={tfz_white_logo} style={{width: width * 0.68, height: width * 0.25}} />
        </View>
    );
}
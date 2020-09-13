import React from 'react';
import {View,Text,Dimensions,StyleSheet, TextInput, Image, Alert, ScrollView} from 'react-native';
import { Colors } from '../consts/colors';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
const {width,height} = Dimensions.get('screen');
import {smiley} from '../consts/images';
import { font } from '../consts/fontFamily';

const Feedback = (props) => {
    return(
        <View style={[StyleSheet.absoluteFill,{flex: 1,backgroundColor: 'white',paddingVertical: height * 0.05}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignItems:'center'}}>
            <Image source = {smiley} style={{width: width * 0.3, height: width * 0.3}} />
            <Text style={{color:'black', fontSize: width * 0.05,fontFamily: font.regular}}>
                That`s great!
            </Text>
            <Text style={{color:'black', fontSize: width * 0.05,fontFamily: font.regular}}>
                Tell us what we got right
            </Text>
            <View style={{marginVertical: height * 0.05}}>
            <TextInput
                multiline={true}
                placeholder = 'Tell something about us!'
                style={{
                    borderWidth: 1,
                    borderRadius: width * 0.02,
                    borderColor: Colors.light_blue,
                    padding: width * 0.02,
                    height: height * 0.25,
                    width: width * 0.8,
                    fontFamily: font.regular
                }}
                textAlignVertical = 'top'
            />
            </View>
            <View style={{ marginVertical: height * 0.1 }}>
                <EllipticalButton
                    ellipticClick={() => {props.navigation.pop()}}
                    width={width * 0.9}
                    height={height * 0.07}
                    btnImg={''}
                    btnSize={width * 0.06}
                    btnText={'Submit'}
                    bgColor= {Colors.dark_blue}
                    labelColor='white'
                />
            </View>
            </View>
            </ScrollView>
        </View>
    );
}

export default Feedback;
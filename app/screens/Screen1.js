import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, } from 'react-native';
import CustomTextInput from '../components/classComponent/CustomTextInput';
const { width, height } = Dimensions.get('screen');
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { google_icon, fb_icon, mail_icon, fzone_logo, tfz_black_logo } from '../consts/images';
import { font } from '../consts/fontFamily';

class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    inputFocus() {
        this.textRef.setNativeProps({
            borderBottomWidth: 2,
            borderBottomColor: 'skyblue'
        })
    }
    inputBlur() {
        this.textRef.setNativeProps({
            borderBottomWidth: 1,
            borderBottomColor: 'grey'
        })
    }

    render() {
        const google = google_icon
        const fb = fb_icon
        const mail = mail_icon
        return (
            <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: '#fcfcfc' }]}>
                <ScrollView>
                <View style={{ alignItems: 'center', width: width, marginVertical: height * 0.09 }}>
                    <Image source={tfz_black_logo} style={{ width: width * 0.8, height: width * 0.3 }} />
                </View>
                <View style={{ paddingHorizontal: width * 0.08, }}>
                    <Text style={{ position: 'absolute', left: width * 0.08, top: width * 0.02, fontFamily: font.regular,
                    fontSize: width * 0.05, color: 'black' }}>+91 </Text>
                    <TextInput
                    ref={component => (this.textRef = component)}
                    value= {this.state.input}
                    placeholder = 'Enter your phone number'
                    keyboardType = 'number-pad'
                    onChangeText={text => this.setState({ input: text })}
                    style={{
                        width: width * 0.7,
                        height: height * 0.06,
                        marginLeft: width * 0.095,
                        fontSize: width * 0.045,
                        color: 'black',
                        borderBottomWidth: 1,
                        borderBottomColor: 'grey',
                        backgroundColor: '#fcfcfc',
                        fontFamily: font.regular
                    }}
                    onFocus={() => this.inputFocus()}
                    onBlur={() => this.inputBlur()}
                />
                </View>
                <View style={{ marginTop: width * 0.09, paddingHorizontal: width * 0.08 }}>
                    <EllipticalButton
                        ellipticClick={() => this.props.navigation.navigate('PersonalScreen')}
                        width={width * 0.83}
                        height={height * 0.075}
                        btnImg={''}
                        btnSize={width * 0.06}
                        btnText={'Continue'}
                        bgColor='#345eeb'
                        labelColor='white'
                    />
                </View>
                <Text style={{ color: 'black', paddingHorizontal: width * 0.07, lineHeight: width * 0.05, fontSize: width * 0.038, marginTop: height * 0.025 }}>
                    By Continuing you agree to the
                    <Text style={{ color: 'red',fontFamily: font.regular }}>
                        {' '}Terms of Services
                    </Text>
                    {' '}and
                    <Text style={{ color: 'red',fontFamily: font.regular }}>
                        {' '}Privacy policy.
                    </Text>
                </Text>
                <View
                    style={{
                        flexDirection: 'row', backgroundColor: 'white', height: height * 0.075, width: width * 0.83, marginHorizontal: width * 0.055,
                        alignItems: 'center', borderRadius: (width * 0.83) / 2, justifyContent: 'center', marginVertical: height * 0.02, elevation: 4,
                        marginTop: height * 0.08
                    }}>
                    <Text style={{ fontSize: width * 0.05, color: 'black',fontFamily: font.regular }}>
                        Continue with
                    </Text>
                    <TouchableOpacity style={{marginLeft: width * 0.03}} onPres={() => console.log()}>
                        <Image source={ google }
                            style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: width * 0.035}} onPres={() => console.log()}>
                        <Image source={ fb }
                            style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPres={() => console.log()}>
                        <Image source={ mail }
                            style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        );
    }
}

export default Screen1;
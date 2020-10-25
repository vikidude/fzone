import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { google_icon, fb_icon, mail_icon, tfz_black_logo } from '../consts/images';
import { font } from '../consts/fontFamily';

class MobileNumberAuth extends Component {
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
                    <View style={{ alignItems: 'center', width: wp('100%'), marginVertical: hp('10%') }}>
                        <Image source={tfz_black_logo} style={{ width: wp('80%'), height: wp('30%') }} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput
                            ref={component => (this.textRef = component)}
                            value={this.state.input}
                            placeholder='Enter your phone number'
                            keyboardType='number-pad'
                            onChangeText={text => this.setState({ input: text })}
                            style={{
                                width: wp('70%'),
                                height: hp('6.7%'),
                                marginLeft: wp('7.5%'),
                                fontSize: wp('5%'),
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
                    <Text style={{
                            position: 'absolute', left: wp('8%'), top: hp('39.1%'), fontFamily: font.regular,
                            fontSize: wp('5%'), color: 'black'
                        }}>+91 </Text>
                    <View style={{ marginTop: wp('9%'), alignItems: 'center' }}>
                        <EllipticalButton
                            ellipticClick={() => this.props.navigation.navigate('Registration')}
                            width={wp('85%')}
                            height={hp('8%')}
                            btnImg={''}
                            btnSize={wp('7%')}
                            btnText={'Continue'}
                            bgColor='#345eeb'
                            labelColor='white'
                        />
                    </View>
                    <Text style={{
                        color: 'black', paddingHorizontal: wp('9%'), lineHeight: wp('5%'),
                        fontSize: wp('4.3%'), marginTop: hp('4%')
                    }}>
                        By Continuing you agree to the
                    <Text style={{ color: 'red', fontFamily: font.regular, fontSize: wp('4.3%') }}>
                            {' '}Terms of Services
                    </Text>
                        {' '}and
                    <Text style={{ color: 'red', fontFamily: font.regular, fontSize: wp('4.3%') }}>
                            {' '}Privacy policy.
                    </Text>
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row', backgroundColor: 'white', width: wp('85%'), marginHorizontal: wp('6%'),
                            alignItems: 'center', borderRadius: (wp('15%')) / 2, justifyContent: 'center', paddingVertical: hp('1.5%'), elevation: 4,
                            marginVertical: hp('10%')
                        }}>
                        <Text style={{ fontSize: wp('5%'), color: 'black', fontFamily: font.regular }}>
                            Continue with
                    </Text>
                        <TouchableOpacity style={{ marginLeft: wp('4%') }} onPres={() => console.log()}>
                            <Image source={google}
                                style={{ height: hp('4%'), width: hp('4%') }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: wp('4%') }} onPres={() => console.log()}>
                            <Image source={fb}
                                style={{ height: hp('4%'), width: hp('4%') }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPres={() => console.log()}>
                            <Image source={mail}
                                style={{ height: hp('4%'), width: hp('4%') }} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default MobileNumberAuth;
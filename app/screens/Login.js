import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, FlatList, Image, ImageBackground } from 'react-native';
import CustomTextInput from '../components/classComponent/CustomTextInput';
const { width, height } = Dimensions.get('screen');
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { fzone_logo, google_icon, fb_icon, tfz_white_logo, six_pack } from '../consts/images';
import { font } from '../consts/fontFamily';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    login() {

    }

    render() {
        const btns = [
            { btnImg: google_icon, btnText: 'LOGIN WITH GOOGLE', icon: false },
            { btnImg: 'mobile-phone', btnText: 'LOGIN WITH PHONE NUMBER', icon: true },
            { btnImg: fb_icon, btnText: 'LOGIN WITH FACEBOOK', icon: false }
        ]
        return (
            <ImageBackground source={six_pack}
                style={{ flex: 1, alignSelf: 'stretch', width: null }}>
                {/* <Text style={{ textAlign: 'center', fontSize: width * 0.125,fontFamily: font.black,
                 color: 'white', marginTop: width * 0.11 }}>
                    WELCOME
                </Text> */}
                <View style={{ alignItems: 'center', width: width, marginTop: height * 0.15 }}>
                    <Image source={tfz_white_logo} style={{ width: width * 0.55, height: width * 0.2 }} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <FlatList
                        data={btns}
                        ItemSeparatorComponent={() => <View style={{ marginTop: height * 0.04 }} />}
                        contentContainerStyle={{ marginTop: height * 0.15 }}
                        renderItem={({ item, index }) => (
                            <EllipticalButton
                                ellipticClick={() => this.props.navigation.navigate('Screen1')}
                                width={width * 0.83}
                                height={height * 0.06}
                                btnImg={item.btnImg}
                                btnSize={width * 0.035}
                                btnText={item.btnText}
                                labelColor='black'
                                icon={item.icon}
                            />
                        )}
                    />
                </View>
            </ImageBackground>
        );
    }
}

export default Login;
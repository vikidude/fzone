import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, FlatList, Image } from 'react-native';
import CustomTextInput from '../components/classComponent/CustomTextInput';
const { width, height } = Dimensions.get('screen');
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import {fzone_logo,google_icon,fb_icon, tfz_white_logo} from '../consts/images';

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
             {btnImg: google_icon,btnText: 'LOGIN WITH GOOGLE'},
             {btnImg: '',btnText: 'LOGIN WITH PHONE NUMBER'},
             {btnImg: fb_icon,btnText: 'LOGIN WITH FACEBOOK'}
         ]
        return (
            <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'black' }]}>
                <Text style={{ textAlign: 'center', fontSize: width * 0.125, color: 'white', marginTop: width * 0.11 }}>
                    WELCOME
                </Text>
                <View style={{alignItems:'center', width: width, marginTop: height * 0.09}}>
                    <Image source = {tfz_white_logo} style={{width: width*0.6 , height: width * 0.25}} />
                    </View>
                <View style={{ alignSelf: 'center' }}>
                    <FlatList
                        data={btns}
                        ItemSeparatorComponent = {()=> <View style={{marginTop: height * 0.04}} />}
                        contentContainerStyle={{marginTop: height * 0.15}}
                        renderItem={({item,index}) => (
                            <EllipticalButton
                                ellipticClick={() =>  this.props.navigation.navigate('PersonalScreen')}
                                width={width * 0.83}
                                height={height * 0.06}
                                btnImg= {item.btnImg}
                                btnSize={width * 0.05}
                                btnText= {item.btnText}
                                labelColor = 'black'
                            />
                        )}
                    />
                </View>
            </View>
        );
    }
}

export default Login;
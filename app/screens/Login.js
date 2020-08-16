import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, FlatList, Image } from 'react-native';
import CustomTextInput from '../components/classComponent/CustomTextInput';
const { width, height } = Dimensions.get('screen');
import EllipticalButton from '../components/functionalComponent/EllipticalButton';

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
             {btnImg: 'https://pngmind.com/wp-content/uploads/2019/08/Google-Logo-PNG-Transparent-Background.jpeg',btnText: 'LOGIN WITH GOOGLE'},
             {btnImg: '',btnText: 'LOGIN WITH PHONE NUMBER'},
             {btnImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLZcl1IvSqDvrxuIwG3mRlwerRaJ8LuYNECg&usqp=CAU',btnText: 'LOGIN WITH FACEBOOK'}
         ]
        return (
            <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'black' }]}>
                <Text style={{ textAlign: 'center', fontSize: width * 0.125, color: 'white', marginTop: width * 0.11 }}>
                    WELCOME
                </Text>
                <View style={{ alignItems: 'center', backgroundColor: 'white', marginVertical: height * 0.05,marginHorizontal: width * 0.25, borderRadius: (width * 0.3)/2 }}>
                    <Image source = {require('../assets/fzone_logo.png')} style={{width: width * 0.5, height: width * 0.5}} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <FlatList
                        data={btns}
                        ItemSeparatorComponent = {()=> <View style={{marginTop: height * 0.04}} />}
                        renderItem={({item,index}) => (
                            <EllipticalButton
                                ellipticClick={() => index == 1? this.props.navigation.navigate('Screen1'): ''}
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
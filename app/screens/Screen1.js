import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import CustomTextInput from '../components/classComponent/CustomTextInput';
const { width, height } = Dimensions.get('screen');
import EllipticalButton from '../components/functionalComponent/EllipticalButton';

class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        const google = 'https://pngmind.com/wp-content/uploads/2019/08/Google-Logo-PNG-Transparent-Background.jpeg'
        const fb = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLZcl1IvSqDvrxuIwG3mRlwerRaJ8LuYNECg&usqp=CAU'
        const mail = 'https://i.pinimg.com/originals/c3/0e/ee/c30eee73a5e3d31b072f555985175165.jpg'
        return (
            <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'lightgrey' }]}>
                <Image source={require('../assets/fzone_logo.png')}
                    style={{ width: width * 0.6, height: height * 0.3, alignSelf: 'center' }}
                />
                <View style={{ paddingHorizontal: width * 0.08, }}>
                    <Text style={{ position: 'absolute', left: width * 0.08, top: width * 0.12, fontSize: width * 0.05, color: 'black' }}>+91 </Text>
                    <CustomTextInput
                        labelSize={width * 0.06}
                        label=''
                        inputValue={this.state.input}
                        placeholder='Enter your phone number'
                        keyboardType='number-pad'
                        onInputChange={(text) => this.setState({ input: text })}
                        width={width * 0.8}
                        height={height * 0.06}
                        inputSize={width * 0.05}
                        mLeft = {width * 0.15}
                    />
                </View>
                <View style={{ marginTop: width * 0.09, paddingHorizontal: width * 0.08 }}>
                    <EllipticalButton
                        ellipticClick={() => this.props.navigation.navigate('Registration')}
                        width={width * 0.83}
                        height={height * 0.075}
                        btnImg={''}
                        btnSize={width * 0.06}
                        btnText={'Continue'}
                        bgColor='grey'
                        labelColor='white'
                    />
                </View>
                <Text style={{ color: 'black', paddingHorizontal: width * 0.07, lineHeight: width * 0.05, fontSize: width * 0.038, marginTop: height * 0.025 }}>
                    By Continuing you agree to the
                    <Text style={{ color: 'red' }}>
                        {' '}Terms of Services
                    </Text>
                    {' '}and
                    <Text style={{ color: 'red' }}>
                        {' '}Privacy policy.
                    </Text>
                </Text>
                <View
                    style={{
                        flexDirection: 'row', backgroundColor: 'white', height: height * 0.075, width: width * 0.83, marginHorizontal: width * 0.055,
                        alignItems: 'center', borderRadius: (width * 0.83) / 2, justifyContent: 'center', marginVertical: height * 0.02, elevation: 4,
                        marginTop: height * 0.08
                    }}>
                    <Text style={{ fontSize: width * 0.05, color: 'black' }}>
                        Continue with
                    </Text>
                    <TouchableOpacity style={{marginLeft: width * 0.03}} onPres={() => console.log()}>
                        <Image source={{ uri: google }}
                            style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: width * 0.035}} onPres={() => console.log()}>
                        <Image source={{ uri: fb }}
                            style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPres={() => console.log()}>
                        <Image source={{ uri: mail }}
                            style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Screen1;
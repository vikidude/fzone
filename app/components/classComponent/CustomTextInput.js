import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import { font } from '../../consts/fontFamily';
const { height, width } = Dimensions.get('screen');

export default class CustomTextInput extends Component {

    inputFocus() {
        // this.labelRef.setNativeProps({
        //     style: {
        //         color: 'skyblue'
        //     }
        // })
        this.textRef.setNativeProps({
            borderBottomWidth: 2,
            borderBottomColor: 'skyblue'
        })
    }
    inputBlur() {
        // this.labelRef.setNativeProps({
        //     style: {
        //         color: this.props.lColor || 'grey'
        //     }
        // })
        this.textRef.setNativeProps({
            borderBottomWidth: 1,
            borderBottomColor: 'grey'
        })
    }
    render() {
        return (
            <View style={{}}>
                {/* <Text style={{ color: this.props.lColor || 'grey',fontSize: this.props.labelSize,marginVertical: height * 0.02 }} ref={component => (this.labelRef = component)}>
                    {this.props.label}
                </Text> */}
                <TextInput
                    ref={component => (this.textRef = component)}
                    value={this.props.inputValue}
                    placeholder={this.props.placeholder}
                    keyboardType={this.props.keyboardType}
                    onChangeText={text => this.props.onInputChange(text)}
                    style={{
                        width: this.props.width,
                        height: this.props.height,
                        marginLeft: this.props.mLeft || 0,
                        fontSize: this.props.inputSize,
                        color: this.props.tColor || 'black',
                        borderWidth: 1,
                        borderColor: 'grey',
                        backgroundColor: '#fcfcfc',
                        borderRadius: (this.props.height) / 2,
                        paddingLeft: this.props.paddingLeft,
                        fontFamily: font.regular
                    }}
                    onFocus={() => this.inputFocus()}
                    onBlur={() => this.inputBlur()}
                />
            </View>
        );
    }
}
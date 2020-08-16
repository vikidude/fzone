import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class CustomTextInput extends Component {

    inputFocus() {
        this.labelRef.setNativeProps({
            style: {
                color: 'skyblue'
            }
        })
        this.textRef.setNativeProps({
            borderBottomWidth: 2,
            borderBottomColor: 'skyblue'
        })
    }
    inputBlur() {
        this.labelRef.setNativeProps({
            style: {
                color: this.props.lColor || 'grey'
            }
        })
        this.textRef.setNativeProps({
            borderBottomWidth: 1,
            borderBottomColor: 'grey'
        })
    }
    render() {
        return (
            <View style={{borderBottomWidth: 1,marginTop: this.props.width * 0.035,
                borderBottomColor: 'grey',}} ref={component => (this.textRef = component)}>
                    <Text style={{ color: this.props.lColor || 'grey',fontSize: this.props.labelSize }} ref={component => (this.labelRef = component)}>
                    {this.props.label}
                </Text>
                <TextInput
                    value={this.props.inputValue}
                    placeholder = {this.props.placeholder}
                    keyboardType =  {this.props.keyboardType}
                    onChangeText={text => this.props.onInputChange(text)}
                    style={{
                        width: this.props.width,
                        height: this.props.height,
                        marginLeft: this.props.mLeft || 0,
                        fontSize: this.props.inputSize,
                        color: this.props.tColor || 'black',
                    }}
                    onFocus={() => this.inputFocus()}
                    onBlur={() => this.inputBlur()}
                />
            </View>
        );
    }
}
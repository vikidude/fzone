import React, { Component } from 'react';
import { View, Text, Image, Pressable, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('screen');
import Ionicons from 'react-native-vector-icons/Ionicons';

const Test1 = (props) => {
    const {exe_name,exe_img} = props.navigation.state.params
    const [counter, setCounter] = React.useState(10);
    React.useEffect(() => {
        if (counter > 0) {
            setTimeout(() => {
                setCounter(counter - 1)
            }, 1000);
        }else{
            setCounter(10)
        }
        console.log(props.navigation.state.params)
    }, [counter])
    return (
        <View style={{ flex: 1, padding: width * 0.03, backgroundColor: 'white' }}>
            <Pressable onPress={() => props.navigation.pop()}>
                <Ionicons name='arrow-back' color='grey' size={width * 0.08} />
            </Pressable>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: width * 0.09, fontWeight: 'bold', color: 'black' }}>
                    Ready to go!
                </Text>
                <Text style={{ color: 'grey', fontSize: width * 0.065 }}>
                    {exe_name}
                </Text>
                <Image source={exe_img} style={{ width: width * 0.8, height: height * 0.5, resizeMode: 'center' }} />
                <Text style={{ color: 'black', fontSize: width * 0.1, marginTop: height * 0.02 }}>
                    {counter}
                </Text>
                <Text style={{ color: 'blue', fontSize: width * 0.05, marginVertical: height * 0.04 }}>
                    Skip
                </Text>
            </View>
        </View>
    );
}

export default Test1;
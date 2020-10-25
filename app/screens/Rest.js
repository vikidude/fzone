import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { font } from '../consts/fontFamily';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Rest = (props) => {
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
    }, [counter])

    return (
        <View style={{ flex: 1, padding: wp('3%'), backgroundColor: 'white' }}>
            <Pressable onPress={() => props.navigation.pop()}>
                <Ionicons name='arrow-back' color='grey' size={wp('8%')} />
            </Pressable>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: wp('9%'), fontFamily: font.bold, color: 'black' }}>
                    Ready to go!
                </Text>
                <Text style={{ color: 'grey', fontSize: wp('6.5%'), fontFamily: font.regular }}>
                    {exe_name}
                </Text>
                <Image source={{ uri: 'data:image/png;base64,' + exe_img}} style={{ width: wp('80%'), height: hp('55%'), resizeMode: 'contain' }} />
                <Text style={{ color: 'black', fontSize: wp('8%'), marginTop: hp('2%'), fontFamily: font.regular }}>
                    {counter}
                </Text>
                <Text style={{ color: 'blue', fontSize: wp('5%'), marginVertical: hp('4%'), fontFamily: font.regular }}>
                    Skip
                </Text>
            </View>
        </View>
    );
}

export default Rest;
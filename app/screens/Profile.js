import React from 'react';
import { Dimensions, View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { people_icon_2 } from '../consts/images';
const { width, height } = Dimensions.get('screen');
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { Colors } from '../consts/colors';
import { font } from '../consts/fontFamily';

const Profile = (props) => {
    const [user, setUser] = React.useState('Vigneshwaran')
    const [email, setEmail] = React.useState('vigneshwaran@yop.com');
    const [location, setLocation] = React.useState('Velacherry');

    return (
        <View style={[StyleSheet.absoluteFill, { backgroundColor: 'black' }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ margin: width * 0.05 }}>
                <View style={{ backgroundColor: Colors.light_blue, paddingVertical: width * 0.17 }}>
                    <View style={{ position: 'absolute', right: width * 0.05, top: height * 0.02 }}>
                        <Feather name='check' size={width * 0.06} color='white' />
                    </View>
                    <Image source={people_icon_2} style={{
                        width: width * 0.2, height: width * 0.2,
                        borderRadius: (width * 0.2) / 2, borderColor: 'white', borderWidth: 1, alignSelf: 'center', justifyContent: 'center'
                    }} />
                    <View style={{
                        position: 'absolute', top: height * 0.095, left: width * 0.5, backgroundColor: Colors.dark_pink, width: width * 0.05,
                        height: width * 0.05, borderRadius: (width * 0.05) / 2, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <FontAwesome name='pencil' size={width * 0.025} color='white' />
                    </View>
                </View>
                <View style={{ backgroundColor: 'white', padding: width * 0.03 }}>
                    <Text style={{ color: Colors.medium_pink, fontSize: width * 0.05,fontFamily: font.bold }}>PROFILE DETAILS</Text>
                    <CustomTextInput
                        value={user}
                        label={'Username'}
                        placeholder={'Username'}
                        setText={(text) => setUser(text)}
                    />
                    <CustomTextInput
                        value={email}
                        label={'Email'}
                        placeholder={'Email'}
                        setText={(text) => setEmail(text)}
                    />
                    <CustomTextInput
                        value={location}
                        label={'Location'}
                        placeholder={'Location'}
                        setText={(text) => setLocation(text)}
                    />
                </View>
            </View>
            <View style={{ alignSelf:'center' }}>
                <EllipticalButton
                    ellipticClick={() => props.navigation.navigate('Planner')}
                    width={width * 0.9}
                    height={height * 0.07}
                    btnImg={''}
                    btnSize={width * 0.06}
                    btnText={'Next'}
                    bgColor= {Colors.dark_blue}
                    labelColor='white'
                />
            </View>
            </ScrollView>
        </View>
    );
}

export default Profile;

const CustomTextInput = (props) => {
    onFocusCall = () => {
        // inputRef.setNativeProps({
        //     borderBottomColor: 'pink',
        //     borderBottomWidth: width * 0.005
        // })
    }
    onBlurCall = () => {
        // inputRef.setNativeProps({
        //     borderBottomColor: 'grey',
        //     borderBottomWidth: width * 0.001
        // })
    }
    return (
        <>
            <Text style={{ color: Colors.light_blue, fontSize: width * 0.04, marginTop: width * 0.03,fontFamily: font.regular }}>
                {props.label}
            </Text>
            <TextInput
                ref={(component) => (inputRef = component)}
                value={props.value}
                placeholder={props.placeholder}
                onChangeText={(text) => props.setText(text)}
                style={{
                    borderBottomColor: Colors.light_grey,
                    borderBottomWidth: width * 0.001,
                    marginBottom: height * 0.01,
                    fontFamily: font.regular
                }}
                onFocus={() => onFocusCall()}
                onBlur={() => onBlurCall()}
            />
        </>
    );
}
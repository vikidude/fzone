import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Modal, ActivityIndicator, TouchableOpacity } from 'react-native';
import { app_avatar } from '../consts/images';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { Colors } from '../consts/colors';
import { font } from '../consts/fontFamily';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-easy-toast';
import { getProfileDetails, updateProfileDetails } from '../reducers/auth/service-calls';
import { useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

const Profile = (props) => {
    const [user, setUser] = React.useState('')
    const [email, setEmail] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [profilePic, setProfilePic] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const toastRef = React.useRef();
    const {authResponse} = useSelector(state => state.AuthReducer)

    React.useEffect(() => {
        getProfile()
    }, [])

    const getProfile = () => {
        const data = {
            user_id: authResponse?.user_id || "273"
        }
        console.log('get Profile hit: ',data)
        getProfileDetails(data).then(res => {
            if (res.data.length > 0) {
                setUser(res.data[0]?.name);
                setEmail(res.data[0]?.email);
                setLocation(res.data[0]?.address);
                setProfilePic(res.data[0]?.profile_image)
                setLoading(false);
                //console.log('Profile data: ', res.data[0]);
            } else {
                setLoading(false);
                console.log('Profile returns empty: ', res);
            }
        }).catch(ex => {
            console.log('Profile get error: ', ex);
        })
    }

    const updateProfile = () => {
        const values = {
            user_id: authResponse?.user_id || "273",
            name: user,
            address: location,
            email: email,
            profile_image: profilePic
        }
        setLoading(true);
        updateProfileDetails(values).then(res => {
            setLoading(false);
            console.log('Success update profile: ', res.data.Message);
            toastRef.current.show(res.data.Message, 1000, () => {
                props.navigation.pop()
            })
        }).catch(ex => {
            setLoading(false);
            toastRef.current.show('Failure update profile', 1000);
            console.log('Failure update profile: ', ex);
        })
    }

    const selectImage = () => {
        console.log('img picker called')
        ImagePicker.showImagePicker(options, (response) => {
            //console.log('Response = ', response);
           
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
              console.log(source);
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
              setProfilePic('data:image/jpeg;base64,' + response.data);
            }
          });
    }

    return (
        <View style={[StyleSheet.absoluteFill, { backgroundColor: 'black' }]}>
            <Toast
                ref={toastRef}
                style={{ backgroundColor: 'skyblue' }}
                position='bottom'
                positionValue={200}
                fadeInDuration={750}
                fadeOutDuration={1000}
                opacity={0.9}
                textStyle={{ color: 'black' }}
            />
            <Modal
                transparent={true}
                visible={loading}
                onRequestClose={() => props.navigation.pop()}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.25)', justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size='large' animating={true} color={'blue'} />
                </View>
            </Modal>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ margin: wp('5%') }}>
                    <View style={{ backgroundColor: Colors.light_blue, paddingVertical: wp('20%') }}>
                        <View style={{ position: 'absolute', right: wp('4%'), top: hp('2%') }}>
                            <Feather name='check' size={wp('6%')} color='white' />
                        </View>
                        {profilePic !== null ?
                            <Image source={{ uri: profilePic }} style={{
                                width: wp('30%'), height: wp('30%'), borderRadius: (wp('30%')) / 2, justifyContent: 'center',
                                borderColor: 'white', borderWidth: 1, alignSelf: 'center'
                            }} />
                            :
                            <Image source={app_avatar} style={{
                                width: wp('30%'), height: wp('30%'), borderRadius: (wp('30%')) / 2, justifyContent: 'center',
                                borderColor: 'white', borderWidth: 1, alignSelf: 'center'
                            }} />
                        }
                        <View style={{
                            position: 'absolute', top: hp('13%'), left: wp('55%'), backgroundColor: Colors.dark_pink, width: wp('5%'),
                            height: wp('5%'), borderRadius: (wp('5%')) / 2, alignItems: 'center', justifyContent: 'center'
                        }}>
                            <TouchableOpacity activeOpacity={0.8} onPress={()=>selectImage()}>
                                <FontAwesome name='pencil' size={wp('3%')} color='white' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white', padding: wp('4%') }}>
                        <Text style={{ color: Colors.medium_pink, fontSize: wp('5%'), fontFamily: font.bold }}>PROFILE DETAILS</Text>
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
                <View style={{ alignSelf: 'center' }}>
                    <EllipticalButton
                        ellipticClick={() => updateProfile()}
                        width={wp('90%')}
                        height={hp('7%')}
                        btnImg={''}
                        btnSize={wp('5%')}
                        btnText={'Next'}
                        bgColor={Colors.dark_blue}
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
            <Text style={{ color: Colors.light_blue, fontSize: wp('4.5%'), marginTop: wp('4%'), fontFamily: font.regular }}>
                {props.label}
            </Text>
            <TextInput
                ref={(component) => (inputRef = component)}
                value={props.value}
                placeholder={props.placeholder}
                onChangeText={(text) => props.setText(text)}
                style={{
                    borderBottomColor: Colors.light_grey,
                    borderBottomWidth: wp('0.3%'),
                    marginBottom: hp('1%'),
                    fontFamily: font.regular
                }}
                onFocus={() => onFocusCall()}
                onBlur={() => onBlurCall()}
            />
        </>
    );
}
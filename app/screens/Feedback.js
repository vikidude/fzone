import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, Modal, ActivityIndicator } from 'react-native';
import { Colors } from '../consts/colors';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { smiley } from '../consts/images';
import { font } from '../consts/fontFamily';
import axios from 'axios';
import { store } from '../store/store';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-easy-toast';

const Feedback = (props) => {
    const [feedback, setFeedback] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const toastRef = React.useRef();

    const onsubmit = () => {
        const uId = store.getState().AuthReducer.registerUserData.user_id;
        let value = {
            user_id: uId,
            feedback_name: feedback
        }
        setLoading(true);
        axios.post('http://ttci-demo.com:10/tfz_web/tfzapi_user/public/api/mobile/feedback', value).then(res => {
            console.log('Response for feedback submit: ', res.data);
            setLoading(false);
            toastRef.current.show(res.data.Message, 5000, () => {
                props.navigation.pop()
            })
        }).catch(ex => {
            console.log('Error response for feedback: ', ex);
            toastRef.current.show('Error adding feedback',5000);
        })
    }

    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white', paddingVertical: hp('5%') }]}>
            <Modal
                transparent={true}
                visible={loading}
                onRequestClose={() => setLoading(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.25)' }}>
                    <ActivityIndicator size='large' color={Colors.light_blue} animating={true} />
                </View>
            </Modal>
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={smiley} style={{ width: wp('28%'), height: wp('28%') }} />
                    <Text style={{ color: 'black', fontSize: wp('5%'), fontFamily: font.regular }}>
                        That`s great!
                    </Text>
                    <Text style={{ color: 'black', fontSize: wp('5%'), fontFamily: font.regular }}>
                        Tell us what we got right
                    </Text>
                    <View style={{ marginVertical: hp('7%') }}>
                        <TextInput
                            multiline={true}
                            placeholder='Tell something about us!'
                            style={{
                                borderWidth: 1,
                                borderRadius: wp('4%'),
                                borderColor: Colors.light_blue,
                                padding: wp('2%'),
                                height: hp('28%'),
                                width: wp('80%'),
                                fontFamily: font.regular
                            }}
                            onChangeText={text => setFeedback(text)}
                            textAlignVertical='top'
                        />
                    </View>
                    <View style={{ marginVertical: hp('10%') }}>
                        <EllipticalButton
                            ellipticClick={() => onsubmit()}
                            width={wp('90%')}
                            height={hp('7.5%')}
                            btnImg={''}
                            btnSize={wp('5%')}
                            btnText={'Submit'}
                            bgColor={Colors.dark_blue}
                            labelColor='white'
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Feedback;
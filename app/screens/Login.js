import React, { Component } from 'react';
import { View, FlatList, Image, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { google_icon, fb_icon, tfz_white_logo, six_pack } from '../consts/images';

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
            { btnImg: google_icon, btnText: 'LOGIN WITH GOOGLE', icon: false },
            { btnImg: 'mobile-phone', btnText: 'LOGIN WITH PHONE NUMBER', icon: true },
            { btnImg: fb_icon, btnText: 'LOGIN WITH FACEBOOK', icon: false }
        ]
        return (
            <ImageBackground source={six_pack}
                style={{ flex: 1, alignSelf: 'stretch', width: null }}>
                <View style={{ alignItems: 'center', width: wp('100%'), marginTop: hp('18%') }}>
                    <Image source={tfz_white_logo}
                        style={{ width: wp('60%'), height: wp('22.5%') }} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <FlatList
                        data={btns}
                        ItemSeparatorComponent={() => <View style={{ marginTop: hp('4%') }} />}
                        contentContainerStyle={{ marginTop: hp('16%') }}
                        renderItem={({ item, index }) => (
                            <EllipticalButton
                                ellipticClick={() => this.props.navigation.navigate('MobileNumberAuth')}
                                width={wp('85%')}
                                height={hp('7%')}
                                btnImg={item.btnImg}
                                btnSize={wp('3.8%')}
                                btnText={item.btnText}
                                labelColor='black'
                                icon={item.icon}
                            />
                        )}
                    />
                </View>
            </ImageBackground>
        );
    }
}

export default Login;
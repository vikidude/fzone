import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { Colors } from '../consts/colors';
import { font } from '../consts/fontFamily';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-easy-toast';
import { useSelector } from 'react-redux';
import { resetUserDetails } from '../model/user';

const Settings = (props) => {
    const { authResponse } = useSelector(state => state.AuthReducer);
    const listData = [
        {
            listName: 'LeaderBoard',
            iconName: 'basket'
        },
        {
            listName: 'Active Packs and Subscription',
            iconName: 'basket'
        },
        {
            listName: 'Medical Records',
            iconName: 'heart'
        },
        {
            listName: 'Redeem Voucher',
            iconName: 'basket'
        },
        {
            listName: 'Account',
            iconName: 'settings'
        },
        {
            listName: 'Support',
            iconName: 'basket'
        },
        {
            listName: 'Logout',
            iconName: 'log-out'
        },
    ]
    const toastRef = React.useRef();

    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1 }]}>
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
            <View style={{
                borderBottomColor: 'lightgrey', borderBottomWidth: 1,
                padding: wp('7%'), width: wp('100%'), alignItems: 'center'
            }}>
                <Text style={{ fontSize: wp('6%'), color: 'black', fontFamily: font.bold, textAlign: 'center' }}>
                    SETTINGS
                    </Text>
            </View>

            <FlatList
                data={[
                    { name: 'Personal Details', route: 'Registration', icon: 'user-circle' },
                    { name: 'Profile Details', route: 'Profile', icon: 'user-edit' }
                ]}
                contentContainerStyle={{ margin: wp('6%'), marginTop: hp('6%') }}
                renderItem={({ item, index }) => (
                    <View style={{
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name={item.icon} size={wp('5%')} color={Colors.dark_blue} />
                            <Text style={{ fontSize: wp('6%'), marginLeft: wp('5%'), fontFamily: font.regular }}>
                                {item.name}
                            </Text>
                        </View>
                        <Pressable onPress={() =>[resetUserDetails(), props.navigation.navigate(item.route, { edit: true, user_id: authResponse?.user_id })]}>
                            <FontAwesome name='pencil' size={wp('5%')} color={Colors.dark_blue} />
                        </Pressable>
                    </View>
                )}
                ItemSeparatorComponent={() => (
                    <View style={{ marginTop: hp('3.5%') }} />
                )}
                ListFooterComponentStyle={{ marginTop: hp('8%') }}
                ListFooterComponent={() => (
                    <View style={{ alignSelf: 'center' }}>
                        <EllipticalButton
                            ellipticClick={() => { }}
                            width={wp('70%')}
                            height={hp('7%')}
                            btnImg={''}
                            btnSize={wp('6%')}
                            btnText={'Delete Account'}
                            bgColor={Colors.medium_red}
                            labelColor='white'
                        />
                    </View>
                )}
                keyExtractor={(item, index) => index}
            />
            {/* <FlatList
                    data={listData}
                    contentContainerStyle={{ flexGrow: 1, marginVertical: height * 0.03, paddingLeft: width * 0.06, }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <Pressable onPress={() => {
                            this.setState({ itemSelected: item.listName })
                            switch (index) {
                                case 0: this.props.navigation.navigate('LeaderBoard');
                                    break;
                                case 1: this.props.navigation.navigate('Subscription');
                                    break;
                                default: this.props.navigation.navigate('LeaderBoard');
                                    break;
                            }
                        }}
                            style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingTop: height * 0.035 }}>
                            <Text style={{ color: this.state.itemSelected === item.listName ? '#e81c59' : 'black', fontSize: width * 0.055, }}>
                                {item.listName}
                            </Text>
                            {item.iconName === 'log-out' ? (
                                <Feather name={item.iconName} size={width * 0.07} color={this.state.itemSelected === item.listName ? '#e81c59' : 'black'} style={{ marginRight: width *0.05 }} />
                            ) : (
                                    <SimpleLineIcons name={item.iconName} size={width * 0.07} color={this.state.itemSelected === item.listName ? '#e81c59' : 'black'} style={{ marginRight: width *0.06 }} />
                                )}
                            {this.state.itemSelected === item.listName &&
                                <View style={{ borderLeftWidth: width * 0.015, borderLeftColor: '#e81c59', height: height * 0.09, position: 'absolute', right: 0, top: 10 }} />
                            }
                        </Pressable>
                    )}
                    keyExtractor={(item, index) => index}
                /> */}
        </View>
    );
}

export default Settings;
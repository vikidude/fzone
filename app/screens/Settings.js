import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { Colors } from '../consts/colors';
import { font } from '../consts/fontFamily';
const { height, width } = Dimensions.get('screen')

const Settings = (props) => {
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
        return (
            <View style={[StyleSheet.absoluteFill, { flex: 1 }]}>
                <View style={{
                    borderBottomColor: 'lightgrey', borderBottomWidth: 1,
                    padding: width * 0.06, width: width, alignItems: 'center'
                }}>
                    {/* <Feather name="user" size={width * 0.15} color="black" />
                    <View style={{ flexDirection: 'column', marginLeft: width * 0.06, alignSelf: 'center' }}>
                        <Text style={{ fontSize: width * 0.06, color: 'black', fontWeight: 'bold' }}>Elangovan</Text>
                        <Text style={{ fontSize: width * 0.04, color: 'red' }}>VIEW PROFILE</Text>
                    </View> */}
                    <Text style={{ fontSize: width * 0.06, color: 'black',fontFamily: font.bold, textAlign: 'center' }}>
                        SETTINGS
                    </Text>
                </View>

                <FlatList
                    data={[
                        { name: 'Personal Details', route: 'PersonalScreen', icon: 'user-circle' },
                        { name: 'Profile Details', route: 'Profile', icon: 'user-edit' }
                    ]}
                    contentContainerStyle={{ margin: width * 0.06, marginTop: height * 0.06 }}
                    renderItem={({ item, index }) => (
                        <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                        }}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                            <FontAwesome5 name= {item.icon} size={width * 0.045} color = {Colors.dark_blue} />
                            <Text style={{ fontSize: width * 0.06, marginLeft: width * 0.05,fontFamily: font.regular }}>
                                {item.name}
                            </Text>
                            </View>
                            <Pressable onPress={()=>props.navigation.navigate(item.route,{edit:true})}>
                            <FontAwesome name='pencil' size={width * 0.06} color = {Colors.dark_blue} />
                            </Pressable>
                        </View>
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ marginTop: height * 0.03 }} />
                    )}
                    ListFooterComponentStyle = {{marginTop: height * 0.09}}
                    ListFooterComponent={() => (
                        <View style={{ alignSelf: 'center' }}>
                            <EllipticalButton
                                ellipticClick={() => {}}
                                width={width * 0.7}
                                height={height * 0.07}
                                btnImg={''}
                                btnSize={width * 0.06}
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
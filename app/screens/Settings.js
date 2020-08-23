import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
const { height, width } = Dimensions.get('screen')

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemSelected: ''
        }
    }

    render() {
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
                <View style={{ flexDirection: 'row', borderBottomColor: 'lightgrey', borderBottomWidth: 1, padding: width * 0.06 }}>
                    <Feather name="user" size={width * 0.15} color="black" />
                    <View style={{ flexDirection: 'column', marginLeft: width * 0.06, alignSelf: 'center' }}>
                        <Text style={{ fontSize: width * 0.06, color: 'black', fontWeight: 'bold' }}>Elangovan</Text>
                        <Text style={{ fontSize: width * 0.04, color: 'red' }}>VIEW PROFILE</Text>
                    </View>
                </View>

                <FlatList
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
                />
            </View>
        );
    }
}

export default Settings;
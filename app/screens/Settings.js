import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';


class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemSelected: 'Orders'
        }
    }

    render() {
        const listData = [
            {
                listName: 'Orders',
                iconName: 'basket'
            },
            {
                listName: 'Medical Records',
                iconName: 'heart'
            },
            {
                listName: 'Active Packs and Subscription',
                iconName: 'basket'
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
                <View style={{ flexDirection: 'row', borderBottomColor: 'lightgrey', borderBottomWidth: 1, padding: 35 }}>
                    <Feather name="user" size={80} color="black" />
                    <View style={{ flexDirection: 'column', marginLeft: 35, alignSelf: 'center' }}>
                        <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>Elangovan</Text>
                        <Text style={{ fontSize: 18, color: 'red' }}>VIEW PROFILE</Text>
                    </View>
                </View>

                <FlatList
                    data={listData}
                    contentContainerStyle = {{ flexGrow:1, marginVertical: 30, paddingLeft: 25,}}
                    renderItem={({ item, index }) => (
                        <Pressable onPress = {()=>{
                            switch(index){
                                case 0: this.props.navigation.navigate('Workout');
                                break;
                                case 1: this.props.navigation.navigate('Subscription');
                                break;
                                case 2: this.props.navigation.navigate('PersonalScreen');
                                break;
                                case 2: this.props.navigation.navigate('LeaderBoard');
                                break;
                                default: this.props.navigation.navigate('HealthScreen');
                                break;
                            }
                            this.setState({itemSelected: item.listName})}}
                            style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between',paddingTop: 30 }}>
                            <Text style={{ color: this.state.itemSelected === item.listName?'#e81c59':'black', fontSize: 23, }}>
                                {item.listName}
                            </Text>
                            {item.iconName === 'log-out'?(
                            <Feather name={item.iconName} size={30} color= {this.state.itemSelected === item.listName?'#e81c59':'black'} style={{marginRight: 30}} />
                            ):(
                                <SimpleLineIcons name={item.iconName} size={30} color= {this.state.itemSelected === item.listName?'#e81c59':'black'} style={{marginRight: 30}} />  
                            )}
                            {this.state.itemSelected === item.listName &&
                                <View style={{ borderLeftWidth: 6, borderLeftColor: '#e81c59', height: 70, position: 'absolute', right: 0, top: 10 }} />
                            }
                        </Pressable>
                    )}
                    keyExtractor = {(item,index)=> index}
                />
            </View>
        );
    }
}

export default Settings;
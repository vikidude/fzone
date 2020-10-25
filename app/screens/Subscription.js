import React from 'react';
import { View, Text, SafeAreaView, FlatList, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { font } from '../consts/fontFamily';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Subscription = (props) => {
    const plans = [
        { term: '14 days', realPrice: '', offerPrice: 'Free', perMonth: '', bottomText: '', selected: true },
        { term: '1 Year', realPrice: 3999, offerPrice: 2499, perMonth: 208, bottomText: 'Free 1 month TFZ live membership', selected: false },
        { term: '6 Months', realPrice: 2499, offerPrice: 1799, perMonth: 299, bottomText: 'Get 6 month TFZ live pack at just Rs.1799', selected: false },
        { term: '3 Months', realPrice: 1749, offerPrice: 1099, perMonth: 366, bottomText: 'Get 3 month TFZ live pack at just Rs.1099', selected: false },
    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <Text style={{ textAlign: 'center', color: 'white', marginTop: hp('2%'), fontSize: wp('6%'), fontFamily: font.bold }}>
                Subscriptions
            </Text>
            <FlatList
                data={plans}
                contentContainerStyle={{
                    backgroundColor: 'white', width: wp('90%'), margin: wp('5%'),
                    paddingHorizontal: wp('7%'), elevation: 4, borderRadius: wp('3%'), paddingVertical: hp('5%')
                }}
                renderItem={({ item, index }) => (
                    <>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Pressable onPress={() => { alert('okie') }}>
                                    <View style={{
                                        width: wp('5%'), height: wp('5%'), borderRadius: (wp('5%')) / 2, borderWidth: 1,
                                        borderColor: 'black', backgroundColor: item.selected ? '#c94f9a' : 'white'
                                    }} />
                                    {item.selected === true && <Entypo name='check' color='white'
                                        style={{
                                            position: 'absolute', top: wp('1%'),
                                            left: wp('1%')
                                        }} />}
                                </Pressable>
                                <Text style={{ fontSize: wp('4.5%'), marginLeft: wp('3%'), fontFamily: font.regular }}>{item.term}</Text>
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: wp('5%'), textDecorationLine: 'line-through', textDecorationColor: 'grey', color: 'grey', fontFamily: font.regular }}>{item.realPrice}</Text>
                                    <Text style={{ fontSize: wp('5%'), fontFamily: font.bold }}>{' '}{typeof (item.offerPrice) === 'number' ? '$' : ''} {item.offerPrice}</Text>
                                </View>
                                {item.perMonth !== '' && <Text style={{ fontSize: wp('4%'), fontFamily: font.regular }}>{item.perMonth}/mon</Text>}
                            </View>
                        </View>
                        {item.bottomText !== '' ? (<Text style={{ fontSize: wp('3%'), marginVertical: hp('3.5%'), color: 'grey', fontFamily: font.regular }}>{item.bottomText} | <Text style={{ textDecorationLine: 'underline' }}>+1 offers</Text></Text>)
                            :
                            (<View style={{ marginVertical: hp('3.3%') }} />)}
                        <View style={{ borderBottomWidth: 1, width: wp('75%'), borderBottomColor: 'lightgrey' }} />
                    </>
                )}
                ItemSeparatorComponent={() => (
                    <View style={{ marginTop: hp('2%') }} />
                )}
            />
        </SafeAreaView>
    );
}

export default Subscription;
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions, FlatList, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { font } from '../consts/fontFamily';

const { width, height } = Dimensions.get('screen');

const Subscription = (props) => {
    const plans = [
        { term: '14 days', realPrice: '', offerPrice: 'Free', perMonth: '', bottomText: '', selected: true },
        { term: '1 Year', realPrice: 3999, offerPrice: 2499, perMonth: 208, bottomText: 'Free 1 month TFZ live membership', selected: false },
        { term: '6 Months', realPrice: 2499, offerPrice: 1799, perMonth: 299, bottomText: 'Get 6 month TFZ live pack at just Rs.1799', selected: false },
        { term: '3 Months', realPrice: 1749, offerPrice: 1099, perMonth: 366, bottomText: 'Get 3 month TFZ live pack at just Rs.1099', selected: false },
    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <Text style={{ textAlign: 'center', color: 'white', marginTop: height * 0.01, fontSize: width * 0.06, fontFamily: font.bold }}>Subscriptions</Text>
            {/* <View style={{flexDirection:'row',justifyContent:'space-between', paddingVertical: height * 0.04}}>
                    <Text>14 days</Text>
                    <Text>Free</Text>
                </View> */}
            <FlatList
                data={plans}
                contentContainerStyle={{
                    backgroundColor: 'white', width: width * 0.9, margin: width * 0.05,
                    paddingHorizontal: width * 0.07, elevation: 4, borderRadius: width * 0.03, paddingVertical: height * 0.05
                }}
                renderItem={({ item, index }) => (
                    <>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Pressable onPress={() => { alert('okie') }}>
                                    <View style={{
                                        width: width * 0.05, height: width * 0.05, borderRadius: (width * 0.05) / 2, borderWidth: 1,
                                        borderColor: 'black', backgroundColor: item.selected ? '#c94f9a' : 'white'
                                    }} />
                                    {item.selected === true && <Entypo name='check' color='white'
                                        style={{
                                            position: 'absolute', top: height * 0.0045,
                                            left: width * 0.008
                                        }} />}
                                </Pressable>
                                <Text style={{ fontSize: 18, marginLeft: width * 0.025, fontFamily: font.regular }}>{item.term}</Text>
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: width * 0.05, textDecorationLine: 'line-through', textDecorationColor: 'grey', color: 'grey', fontFamily: font.regular }}>{item.realPrice}</Text>
                                    <Text style={{ fontSize: width * 0.05, fontFamily: font.bold }}>{' '}{typeof (item.offerPrice) === 'number' ? '$' : ''} {item.offerPrice}</Text>
                                </View>
                                {item.perMonth !== '' && <Text style={{ fontSize: width * 0.04, fontFamily: font.regular }}>{item.perMonth}/mon</Text>}
                            </View>
                        </View>
                        {item.bottomText !== '' ? (<Text style={{ fontSize: 14, marginVertical: height * 0.03, color: 'grey', fontFamily: font.regular }}>{item.bottomText} | <Text style={{ textDecorationLine: 'underline' }}>+1 offers</Text></Text>)
                            :
                            (<View style={{ marginVertical: height * 0.03 }} />)}
                        <View style={{ borderBottomWidth: 1, width: width * 0.75, borderBottomColor: 'lightgrey' }} />
                    </>
                )}
                ItemSeparatorComponent={() => (
                    <View style={{ marginTop: height * 0.02 }} />
                )}
            />
            {/* <View style={{borderBottomWidth:1, width: width * 0.8, borderBottomColor:'black'}} /> */}

            {/* <View style={{flexDirection:'row',justifyContent:'space-between', paddingVertical: height * 0.04}}>
                    <Text>6 Months</Text>
                    <View style={{flexDirection:'column'}}>
                    <Text>2499 $ 1799</Text>
                    <Text>299/mon</Text>
                    </View>
                </View>
                <Text>Get 6 month TFZ live pack at just Rs.1799 | <Text style={{textDecorationLine:'underline'}}>+1 offers</Text></Text>
                <View style={{borderBottomWidth:1, width: width * 0.8, borderBottomColor:'black'}} /> */}

            {/* <View style={{flexDirection:'row',justifyContent:'space-between', paddingVertical: height * 0.04}}>
                    <Text>3 Months</Text>
                    <View style={{flexDirection:'column'}}>
                    <Text>1749 $ 1099</Text>
                    <Text>366/mon</Text>
                    </View>
                </View>
                <Text>Get 3 month TFZ live pack at just Rs.1099 | <Text style={{textDecorationLine:'underline'}}>+1 offers</Text></Text> */}
        </SafeAreaView>
    );
}

export default Subscription;
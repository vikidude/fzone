import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { people_icon_3 } from '../consts/images';
import { Colors } from '../consts/colors';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph'
import { font } from '../consts/fontFamily';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SingleLeaderBoard = (props) => {
    return (
        <View style={[StyleSheet.absoluteFill, {
            flex: 1, backgroundColor: 'white', paddingHorizontal: wp('10%'), justifyContent: 'center'
        }]}>
            <TouchableOpacity style={{ width: wp('35%'), marginBottom: hp('2%'), borderWidth: 1, borderColor: Colors.light_blue }} onPress={() => props.navigation.navigate('LeaderBoard')}>
                <Text style={{ fontSize: wp('4.5%'), padding: wp('2%'), fontFamily: font.regular }}>
                    Global LeaderBoard
                </Text>
            </TouchableOpacity>
            <View style={{
                backgroundColor: 'black', borderTopLeftRadius: hp('100%'), borderTopRightRadius: hp('100%'),
                alignItems: 'center', borderBottomLeftRadius: hp('100%'), borderBottomRightRadius: hp('100%')
            }}>
                <View style={{
                    backgroundColor: Colors.light_green, marginTop: hp('4%'),
                    paddingHorizontal: wp('2%')
                }}>
                    <Image source={people_icon_3} style={{
                        width: wp('25%'), height: wp('25%'),
                        borderRadius: (wp('25%')) / 2, resizeMode: 'cover'
                    }} />
                </View>
                <Text style={{ color: 'white', fontSize: wp('5%'), marginTop: hp('2%'), fontFamily: font.regular }}>
                    This week
                </Text>
                <VerticalBarGraph
                    data={[0, 0, 45, 25, 0, 0]}
                    labels={['S', 'M', 'T', 'T', 'F', 'S']}
                    width={wp('60%')}
                    height={hp('20%')}
                    barRadius={5}
                    barWidthPercentage={0.3}
                    barColor='#53ae31'
                    baseConfig={{
                        hasXAxisBackgroundLines: false,
                        hasXAxisLabels: false,
                        yAxisLabelStyle: {
                            color: 'white',
                            fontSize: wp('4%')
                        }
                    }}
                    style={{
                        marginBottom: hp('3%'),
                        padding: wp('3%'),
                        paddingTop: hp('3%'),
                        borderRadius: 20,
                        width: wp('70%'),
                    }}
                />
                <Text style={{ color: 'white', fontSize: wp('5%'), fontFamily: font.regular }}>
                    This week`s avg.
                </Text>
                <Text style={{ color: 'white', fontSize: wp('5%'), fontFamily: font.regular }}>
                    1260 kcal burnt
                </Text>
                <View style={{ marginVertical: hp('3%') }}>
                    <Text style={{ color: Colors.light_green, fontSize: wp('12%'), fontFamily: font.regular }}>
                        803
                    </Text>
                    <Text style={{ color: Colors.light_green, fontSize: wp('5%'), fontFamily: font.regular }}>
                        kcal burnt
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default SingleLeaderBoard;
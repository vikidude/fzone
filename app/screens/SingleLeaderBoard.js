import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { workout_1, tfz_black_logo, people_icon_3 } from '../consts/images';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { Colors } from '../consts/colors';
const { height, width } = Dimensions.get('screen');
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph'
import { font } from '../consts/fontFamily';

const SingleLeaderBoard = (props) => {
    return (
        <View style={[StyleSheet.absoluteFill, {
            flex: 1, backgroundColor: 'white',paddingHorizontal: width * 0.09,justifyContent:'center'
        }]}>
            <TouchableOpacity style={{width: width * 0.42, marginBottom: height * 0.02, borderWidth: 1, borderColor: Colors.light_blue}} onPress={()=>props.navigation.navigate('LeaderBoard')}>
                <Text style={{fontSize: width * 0.04, padding: width * 0.02,fontFamily: font.regular}}>
                    Global LeaderBoard
                </Text>
            </TouchableOpacity>
            <View style={{
                backgroundColor: 'black', borderTopLeftRadius: height * 1, borderTopRightRadius: height * 1,
                alignItems: 'center', borderBottomLeftRadius: height * 1, borderBottomRightRadius: height * 1
            }}>
                <View style={{
                    backgroundColor: Colors.light_green, marginTop: height * 0.032,
                    paddingHorizontal: width * 0.02
                }}>
                    <Image source={people_icon_3} style={{
                        width: width * 0.3, height: width * 0.25,
                        borderRadius: (width * 0.25) / 2
                    }} />
                </View>
                <Text style={{ color: 'white', fontSize: width * 0.045, marginTop: height * 0.015,fontFamily: font.regular }}>This week</Text>

                <VerticalBarGraph
                    data={[0, 0, 45, 25, 0, 0]}
                    labels={['S', 'M', 'T', 'T', 'F', 'S']}
                    width={width * 0.6}
                    height={height * 0.17}
                    barRadius={5}
                    barWidthPercentage={0.3}
                    barColor='#53ae31'
                    baseConfig={{
                        hasXAxisBackgroundLines: false,
                        hasXAxisLabels: false,
                        yAxisLabelStyle: {
                            color: 'white',
                            fontSize: width * 0.04
                        }
                    }}
                    style={{
                        marginBottom: height * 0.02,
                        padding: width * 0.03,
                        paddingTop: height * 0.03,
                        borderRadius: 20,
                        // backgroundColor: `#dff4d7`,
                        width: width * 0.7,
                    }}
                />
                <Text style={{ color: 'white', fontSize: width * 0.05,fontFamily: font.regular }}>
                    This week`s avg.
                </Text>
                <Text style={{ color: 'white', fontSize: width * 0.05,fontFamily: font.regular }}>
                    1260 kcal burnt
                </Text>
                <View style={{ marginVertical: height * 0.03 }}>
                    <Text style={{ color: Colors.light_green, fontSize: width * 0.13,fontFamily: font.regular }}>
                        803
                    </Text>
                    <Text style={{ color: Colors.light_green, fontSize: width * 0.05,fontFamily: font.regular }}>
                        kcal burnt
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default SingleLeaderBoard;
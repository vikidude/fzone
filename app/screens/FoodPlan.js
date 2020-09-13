import React from 'react'
import { View, Text, Dimensions, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('screen');
import { workout_1, tfz_black_logo } from '../consts/images';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { Colors } from '../consts/colors';
import { font } from '../consts/fontFamily';

const FoodPlan = (props) => {
    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white' }]}>
            <ScrollView>
                <Image source={workout_1}
                    style={{ width: width, height: width * 0.6, resizeMode: 'cover' }} />
                <Image source={tfz_black_logo}
                    style={{ width: width * 0.28, height: width * 0.1, position: 'absolute', top: height * 0.13, left: width * 0.37 }} />
                <Text style={{ color: '#e6a712', fontWeight: 'bold', fontSize: width * 0.06, fontFamily: font.regular,
                position: 'absolute', top: height * 0.28, right: 0 }}>
                    SENIOR CITIZEN PLAN
                </Text>
                <View style={{ paddingHorizontal: width * 0.04 }}>
                    <Text style={{ marginTop: height * 0.01, fontSize: height * 0.04, color: 'black',fontFamily: font.bold }}>
                        DAY 1
                    </Text>
                    <Text style={{ fontSize: height * 0.03, color: 'red',fontFamily: font.regular }}>
                        1200 calories
                        <Text style={{ fontSize: height * 0.03, color: 'black',fontFamily: font.regular }}>
                            {' '}to stay in caloric deficit
                        </Text>
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('FoodPlanSelect', { plan: 'VEG' })} style={{
                        elevation:2, borderRadius: width * 0.03,
                        alignItems: 'center', width: width * 0.425, margin: width * 0.05, paddingVertical: height * 0.03
                    }}>
                        <EllipticalButton
                            ellipticClick={() => {props.navigation.navigate('FoodPlanSelect', { plan: 'VEG' }) }}
                            width={width * 0.3}
                            height={height * 0.07}
                            btnImg={''}
                            btnSize={width * 0.045}
                            btnText={'VEG'}
                            bgColor={Colors.dark_green}
                            labelColor='white'
                        />
                        <FlatList
                            data={[1, 2, 3]}
                            contentContainerStyle={{ marginTop: height * 0.02 }}
                            renderItem={({ item, index }) => (
                                <Image source={workout_1}
                                    style={{ width: width * 0.3, height: width * 0.18 }} />
                            )}
                            ItemSeparatorComponent={() => (
                                <View style={{ marginTop: height * 0.02 }} />
                            )}
                            keyExtractor={({ item, index }) => index}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('FoodPlanSelect', { plan: 'NON-VEG' })} style={{
                        elevation:2, borderRadius: width * 0.03, alignItems: 'center',marginBottom: width * 0.05,
                        width: width * 0.425, marginTop: width * 0.05, paddingVertical: height * 0.03
                    }}>
                        <EllipticalButton
                            ellipticClick={() => { props.navigation.navigate('FoodPlanSelect', { plan: 'NON-VEG' })}}
                            width={width * 0.3}
                            height={height * 0.07}
                            btnImg={''}
                            btnSize={width * 0.045}
                            btnText={'NON-VEG'}
                            bgColor={Colors.medium_red}
                            labelColor='white'
                        />
                        <FlatList
                            data={[1, 2, 3]}
                            contentContainerStyle={{ marginTop: height * 0.02 }}
                            renderItem={({ item, index }) => (
                                <Image source={workout_1}
                                    style={{ width: width * 0.3, height: width * 0.18 }} />
                            )}
                            ItemSeparatorComponent={() => (
                                <View style={{ marginTop: height * 0.02 }} />
                            )}
                            keyExtractor={({ item, index }) => index}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export default FoodPlan;
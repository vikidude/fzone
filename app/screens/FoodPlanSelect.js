import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Colors } from '../consts/colors';
import { workout_1 } from '../consts/images';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { font } from '../consts/fontFamily';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const FoodPlanSelect = (props) => {
    const plan = props.navigation.state.params ? props.navigation.state.params.plan : 'VEG'
    const item = props.navigation.state.params ? props.navigation.state.params.item : []

    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white' }]}>
            <View style={{ alignSelf: 'center', marginVertical: hp('4.5%') }}>
                <EllipticalButton
                    ellipticClick={() => { }}
                    width={wp('35%')}
                    height={hp('7%')}
                    btnImg={''}
                    btnSize={wp('5.5%')}
                    btnText={plan}
                    bgColor={plan === 'VEG' ? Colors.dark_green : Colors.medium_red}
                    labelColor='white'
                />
            </View>

            <FlatList
                data={item}
                contentContainerStyle={{ margin: wp('5%') }}
                renderItem={({ item, index }) => (
                    <View style={{ flexDirection: 'row' }}>
                        {item?.nutrition_image !== '' ?
                            <Image source={{ uri: 'data:image/png;base64,' + item.nutrition_image }}
                                style={{ width: wp('40%'), height: wp('25%') }} />
                            :
                            <Image source={workout_1} style={{ width: wp('40%'), height: wp('25%') }} />
                        }
                        <View style={{ marginLeft: wp('3%'), justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: wp('4%'), fontWeight: 'bold', fontFamily: font.regular }}>Name: {item?.nutrition_details_name}</Text>
                            <Text style={{ fontSize: wp('4%'), color: 'grey', fontFamily: font.regular }}>Qty: {item?.quantity}</Text>
                            <Text style={{ fontSize: wp('4%'), color: 'grey', fontFamily: font.regular }}>Calories: {item?.calories}</Text>
                            <Text style={{ fontSize: wp('4%'), color: 'grey', fontFamily: font.regular }}>Time of the day: {item?.time_of_day}</Text>
                        </View>
                    </View>
                )}
                ItemSeparatorComponent={() => (
                    <View style={{ marginTop: hp('2.5%') }} />
                )}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
}

export default FoodPlanSelect;
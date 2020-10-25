import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { workout_1, tfz_black_logo } from '../consts/images';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { Colors } from '../consts/colors';
import { font } from '../consts/fontFamily';
import { getDayOneFoodPlans,getFoodPlansByDay } from '../reducers/workout/service-calls';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const FoodPlan = (props) => {
    const [foodPlans,setFoodPlans] = React.useState([]);
    const [initialLoading,setInitialLoading] = React.useState(true);

    React.useEffect(()=>{
        let values =   {
            "user_id": "199",
            "workout_frequency_id": "14",
            "goal_id": "13",
            "workout_plan_id": "23",
            "workout_type_id": " 11 "
        }
        let day = 'day2';
        if(day === 'day1'){
            getFoodPlan(values);
        }else{
            getNextDay(values);
        }
    },[])

    const getFoodPlan = (values) => {
        getDayOneFoodPlans(values).then(res=>{
            console.log('food plans: ',res.nonveg_nutrition.length);
            setFoodPlans(res);
            setInitialLoading(false);
        }).catch(ex=>{
            setInitialLoading(false);
            console.log('error: ',ex);
        })
    }

    const getNextDay = (values) => {
        values.existing_workout_day = '1';
        getFoodPlansByDay(values).then(res=>{
            setFoodPlans(res);
            setInitialLoading(false);
            console.log('Next day food plan get success');
        }).catch(ex=>{
            setInitialLoading(false);
            console.log('Next day food get error: ',ex);
        })
    }

    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white' }]}>
            <Modal
                    transparent={true}
                    visible={initialLoading}
                    onRequestClose={() => props.navigation.pop()}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.25)', justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size='large' animating={true} color={'blue'} />
                    </View>
                </Modal>

            <ScrollView>
                <Image source={workout_1}
                    style={{ width: wp('100%'), height: wp('60%'), resizeMode: 'cover' }} />
                <Image source={tfz_black_logo}
                    style={{ width: wp('50%'), height: wp('20%'), position: 'absolute', top: hp('13%'),
                     left: wp('26%') }} />
                <Text style={{ color: '#e6a712', fontWeight: 'bold', fontSize: wp('5.5%'), fontFamily: font.regular,
                position: 'absolute', top: hp('30%'), right: 0 }}>
                    SENIOR CITIZEN PLAN
                </Text>
                <View style={{ paddingHorizontal: wp('4%') }}>
                    <Text style={{ marginTop: hp('1%'), fontSize: hp('5%'), color: 'black',fontFamily: font.bold }}>
                        DAY 1
                    </Text>
                    <Text style={{ fontSize: hp('3.2%'), color: 'red',fontFamily: font.regular }}>
                        1200 calories
                        <Text style={{ fontSize: hp('3.2%'), color: 'black',fontFamily: font.regular }}>
                            {' '}to stay in caloric deficit
                        </Text>
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('FoodPlanSelect', { plan: 'VEG',item:foodPlans.veg_nutrition })} style={{
                        elevation:1, borderRadius: wp('5%'), alignItems: 'center', width: wp('43%'),
                        margin: wp('5%'), paddingVertical: hp('4%')
                    }}>
                        <EllipticalButton
                            ellipticClick={() => {props.navigation.navigate('FoodPlanSelect', { plan: 'VEG',item:foodPlans.veg_nutrition }) }}
                            width={wp('30%')}
                            height={hp('7%')}
                            btnImg={''}
                            btnSize={wp('5%')}
                            btnText={'VEG'}
                            bgColor={Colors.dark_green}
                            labelColor='white'
                        />
                        {!initialLoading &&
                        <FlatList
                            data={foodPlans.veg_nutrition}
                            contentContainerStyle={{ marginTop: hp('2.5%') }}
                            renderItem={({ item, index }) => (
                                item.nutrition_image !== '' ?
                                    <Image source={{ uri: 'data:image/png;base64,' + item.nutrition_image }}
                                        style={{ width: wp('30%'), height: wp('20%') }} />
                                    :
                                    <Image source={workout_1}
                                        style={{ width: wp('30%'), height: wp('20%') }} />
                            )}
                            ItemSeparatorComponent={() => (
                                <View style={{ marginTop: hp('2%') }} />
                            )}
                            ListEmptyComponent = {()=> (
                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontFamily: font.regular, fontSize: wp('4.5%')}}>
                                        NO DATA
                                    </Text>
                                </View>
                            )}
                            keyExtractor={({ item, index }) => index}
                        />
                            }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('FoodPlanSelect', { plan: 'NON-VEG',item:foodPlans.nonveg_nutrition })} style={{
                        elevation:1, borderRadius: wp('5%'), alignItems: 'center',marginBottom: wp('5%'),
                        width: wp('43%'), marginTop: wp('5%'), paddingVertical: hp('4%')
                    }}>
                        <EllipticalButton
                            ellipticClick={() => { props.navigation.navigate('FoodPlanSelect', { plan: 'NON-VEG',item:foodPlans.nonveg_nutrition })}}
                            width={wp('30%')}
                            height={hp('7%')}
                            btnImg={''}
                            btnSize={wp('5%')}
                            btnText={'NON-VEG'}
                            bgColor={Colors.medium_red}
                            labelColor='white'
                        />
                        {!initialLoading &&
                        <FlatList
                            data={foodPlans.nonveg_nutrition}
                            contentContainerStyle={{ marginTop: hp('2.5%') }}
                            renderItem={({ item, index }) => (
                                item.nutrition_image !== '' ?
                                    <Image source={{ uri: 'data:image/png;base64,' + item.nutrition_image }}
                                    style={{ width: wp('30%'), height: wp('20%') }} />
                                    :
                                    <Image source={workout_1}
                                    style={{ width: wp('30%'), height: wp('20%') }} />
                            )}
                            ItemSeparatorComponent={() => (
                                <View style={{ marginTop: hp('2%') }} />
                            )}
                            ListEmptyComponent = {()=> (
                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontFamily: font.regular, fontSize: wp('4.5%')}}>
                                        NO DATA
                                    </Text>
                                </View>
                            )}
                            keyExtractor={({ item, index }) => index}
                        />
                            }
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export default FoodPlan;
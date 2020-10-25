import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, ActivityIndicator, Modal } from 'react-native';
import { font } from '../consts/fontFamily';
import { useDispatch } from 'react-redux';
import { UserDetails } from '../model/user';
import { getDayOneWorkout } from '../reducers/workout/service-calls';
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-easy-toast';

const ChoosePlan = (props) => {
    const [plans, updatePlans] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const dispatch = useDispatch();
    const toastRef = React.useRef();

    const getPlans = () => {
        console.log('Get plans hit');
        axios.get('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/workoutplan').then(res => {
            // console.log('Get plans response: ', res.data.workoutplan);
            let data = res.data.workoutplan;
            updatePlans(data);
            setLoading(false);
        }).catch(ex => {
            toastRef.current.show('Error get plan', 500);
            console.log('Error of getting plans: ', ex);
            setLoading(false);
        })
    }

    React.useState(() => {
        getPlans();
    }, [])

    const onSubmit = (item) => {
        setLoading(true);
        UserDetails.workout_plan_id = item.id;
        const date = (new Date().getMonth()+1)+'/'+new Date().getDate()+'/'+new Date().getFullYear();
        console.log('date: ', date,UserDetails);
        UserDetails.registerdDate = date;
        getDayOneWorkout(UserDetails).then(res => {
            console.log('success: ', res.work_out_plan_excercise.length);
            setLoading(false);
            dispatch({ type: 'SET_AUTH_RESPONSE', authResponse: UserDetails })
            toastRef.current.show('Plan Created successfully', 500, () => {
                props.navigation.navigate('Home')
            });
        }).catch(ex => {
            console.log('error: ', ex)
            setLoading(false);
            toastRef.current.show('Plan Create failed', 500);
        })
    }

    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'black' }]}>
            <Modal
                visible={loading}
                transparent={true}
                onRequestClose={() => {setLoading(false)}}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <ActivityIndicator size='large' color='blue' />
                </View>
            </Modal>
            <Toast
                ref={toastRef}
                style={{ backgroundColor: 'skyblue' }}
                position='bottom'
                positionValue={200}
                fadeInDuration={750}
                fadeOutDuration={1000}
                opacity={0.9}
                textStyle={{ color: 'black' }}
            />
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'column', alignSelf: 'flex-start', marginLeft: wp('5%'), marginVertical: hp('4%') }}>
                        <Text style={{ fontSize: wp('7%'), color: 'white', fontFamily: font.regular }}>CHOOSE</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: wp('7%'), color: 'white', fontFamily: font.regular }}>PLAN</Text>
                            <View style={{
                                height: wp('1%'), width: wp('1%'), marginTop: hp('4%'), marginLeft: wp('1%'),
                                borderRadius: (wp('1%')) / 2, backgroundColor: 'red'
                            }} />
                        </View>
                    </View>
                    <FlatList
                        data={plans}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => onSubmit(item)} style={{
                                backgroundColor: 'white', width: wp('90%'), borderWidth: 1, flexDirection: 'row', alignItems: 'center',
                                borderRadius: wp('6%'), alignSelf: 'center', paddingHorizontal: wp('6%'), justifyContent: 'space-between'
                            }}>
                                <Image source={{ uri: 'data:image/png;base64,' + item.work_out_plan_image }} style={{ width: wp('47%'), height: wp('35%'), resizeMode: 'cover', marginVertical: hp('4%') }} />
                                <View style={{ backgroundColor: '#73dea3', height: wp('22.5%'), width: wp('22.5%'), borderRadius: (wp('22.5%')) / 2, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: wp('5%'), fontFamily: font.bold }}>
                                        {item.work_out_plan_count}
                                    </Text>
                                    <Text style={{ color: 'black', fontSize: wp('4%'), fontFamily: font.regular }}>
                                        DAYS
                                </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        ItemSeparatorComponent={() => (
                            <View style={{ marginTop: hp('3.5%') }} />
                        )}
                        ListEmptyComponent={() => (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontFamily: font.regular }}>
                                <Text>NO DATA</Text>
                            </View>
                        )}
                        keyExtractor={(item,index)=>index.toString()}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

export default (ChoosePlan);
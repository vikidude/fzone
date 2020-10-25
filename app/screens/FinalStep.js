import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, ActivityIndicator, Modal } from 'react-native';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { workout_1 } from '../consts/images';
import { font } from '../consts/fontFamily';
import axios from 'axios';
import { connect, useSelector } from 'react-redux';
import { getWorkoutTypes } from '../actions/workoutAction';
import { UserDetails } from '../model/user';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-easy-toast';

const FinalStep = (props) => {
    const [workoutType, updateWorkoutType] = React.useState([]);
    const [goalInfo, setGoalInfo] = React.useState('');
    const [initialLoader, setInitialLoader] = React.useState(true);
    const [selectedIndex,setSelectedIndex] = React.useState(-1);
    const toastRef = React.useRef();
    const {registerUserData} = useSelector(state=>state.AuthReducer)

    const getWorkoutType = () => {
        axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/workouttype',{"user_id":registerUserData.user_id}).then(res => {
            let data = res.data;
            console.log(res.data)
            let value = data.map(item => ({ id: (item.id), value: (item.workout_type_name).trim() }));
            updateWorkoutType(value);
            setInitialLoader(false);
        }).catch(ex => {
            console.log('Error of get workout type: ', ex);
            setInitialLoader(false);
        })
    }

    React.useState(() => {
        // props.getWorkoutTypes();
        console.log('User ID: ',registerUserData.user_id)
        getWorkoutType();
        let value = props.navigation.state.params ? props.navigation.state.params.value : []
        // console.log('Individual goal: ',value);
        setGoalInfo(value);
    }, [])

    // React.useEffect(() => {
    //     // console.log(props.workoutType)
    //     // console.log('value:',props.navigation.state.params.value)
    //     let value = props.navigation.state.params?props.navigation.state.params.value:[]
    //     setGoalInfo(value);
    //     if (props.workoutType.length > 0) {
    //         let value = props.workoutType.map(item => ({ id: (item.id), value: (item.workout_type_name).trim() }));
    //         updateWorkoutType(value);
    //     }
    // }, [props.workoutType])

    const proceedFinal = () => {
        if(selectedIndex !== -1){
            props.navigation.navigate('ChoosePlan')
        }else{
            toastRef.current.show('Pick a Workout type',500);
        }   
    }

    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'black' }]}>
            <Modal
                    visible={initialLoader}
                    transparent={true}
                    onRequestClose={() => { }}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <ActivityIndicator size='large' color='blue' />
                    </View>
                </Modal>
                <Toast
                        ref= {toastRef}
                        style={{ backgroundColor: 'skyblue' }}
                        position='bottom'
                        positionValue={200}
                        fadeInDuration={750}
                        fadeOutDuration={1000}
                        opacity={0.9}
                        textStyle={{ color: 'black' }}
                    />
                <ScrollView>
                    <View style={{ flexDirection: 'column', alignSelf: 'flex-start', marginLeft: wp('5%'), marginVertical: hp('4%') }}>
                        <Text style={{ fontSize: wp('7%'), color: 'white', fontFamily: font.regular }}>FINAL</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: wp('7%'), color: 'white', fontFamily: font.regular }}>STEP</Text>
                            <View style={{
                                height: wp('1%'), width: wp('1%'), marginTop: hp('4%'), marginLeft: wp('1%'),
                                borderRadius: (wp('1%')) / 2, backgroundColor: 'red'
                            }} />
                        </View>
                    </View>

                    <View style={{
                        marginVertical: hp('3%'), backgroundColor: 'white', width: wp('90%'),borderWidth: 1,
                        borderRadius: wp('5%'), alignSelf: 'center', paddingHorizontal: wp('7.5%')
                    }}>
                        {goalInfo?.goal_image !== '' ?
                            <Image source={{ uri: 'data:image/png;base64,' + goalInfo.goal_image }} style={{ width: wp('75%'), height: wp('50%'), resizeMode: 'cover',
                             marginVertical: hp('4%') }} />
                            :
                            <Image source={workout_1} style={{ width: wp('75%'), height: wp('50%'), resizeMode: 'cover',
                            marginVertical: hp('4%') }} />
                        }

                        <Text style={{ color: '#73dea3', fontSize: wp('6%'), width: wp('70%'), fontFamily: font.bold }}>
                            {goalInfo?.goal_name}
                        </Text>
                        <Text style={{ color: 'black', fontSize: wp('4%'), width: wp('70%'), marginVertical: hp('2%'), fontFamily: font.regular }}>
                            {goalInfo?.goal_description}
                        </Text>
                        {!initialLoader &&
                        <FlatList
                            data={workoutType}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ marginTop: hp('2.5%'), paddingBottom: hp('5%') }}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity activeOpacity={0.8} onPress={() => [ setSelectedIndex(index),UserDetails.workout_type_id = item.id ]} style={{
                                    backgroundColor: 'white', borderWidth: selectedIndex === index? 2:1, elevation: 3, borderColor: selectedIndex === index? 'blue':'#ffffff',
                                    paddingVertical: hp('2%'), borderRadius: wp('7%')
                                }}>
                                    <Text style={{ color: 'grey', textAlign: 'center', fontFamily: font.regular, fontSize: wp('4%') }}>
                                        {item.value}
                                    </Text>
                                </TouchableOpacity>
                            )}
                            ItemSeparatorComponent={() => (
                                <View style={{ marginVertical: hp('1.5%') }} />
                            )}
                            ListEmptyComponent={() => (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',fontFamily: font.regular }}>
                                    <Text>NO DATA</Text>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                            }
                    </View>
                    <View style={{ marginVertical: hp('2%'), alignItems: 'center' }}>
                        <EllipticalButton
                            ellipticClick={() => proceedFinal()}
                            width={wp('90%')}
                            height={hp('7.5%')}
                            btnImg={''}
                            btnSize={wp('5%')}
                            btnText={'Next'}
                            bgColor='#4069ff'
                            labelColor='white'
                        />
                    </View>
                </ScrollView>
        </View>
    );
}

const mapStateToProps = state => {
    return {
        workoutType: state.WorkoutReducer.workoutType,
    };

};
const mapDispatchToProps = dispatch => {
    return {
        getWorkoutTypes: () => dispatch(getWorkoutTypes()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FinalStep);
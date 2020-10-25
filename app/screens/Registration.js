import React from 'react';
import { Text, View, ScrollView, StyleSheet, Modal, ActivityIndicator } from 'react-native';
import CustomTextInput from '../components/classComponent/CustomTextInput';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import Dpicker from '../components/functionalComponent/DPicker';
import { font } from '../consts/fontFamily';
import { PersonalDetails, UserDetails } from '../model/user';
import { connect } from 'react-redux';
import { registerUser, resetRegister } from '../actions/authAction';
import { getActivityDetails } from '../actions/workoutAction';
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-easy-toast'
import { updatePersonalDetails } from '../reducers/auth/service-calls';
import { NavigationEvents } from 'react-navigation';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            fullname: '',
            age: '',
            sex: '',
            mobilenumber: '',
            city: '',
            state: '',
            activity: '',
            medical: '',
            activityLevel: [],
            medicalConditions: [],
            errorMsg: '',
            loading: false,
            update: false,
            user_id: ''
        }
        this.toastRef = React.createRef();
    }

    getPersona(){
        axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/getpersoneldetails', {'user_id':this.state.user_id})
            .then(res => {
                console.log('success',res.data);
                if(res.data.length>0){
                    const data = res.data[0];
                    console.log(data.activitylevel)
                    this.setState({username: data.name,age: data.age,sex:data.gender,medical:data.medicalcondition,activity: data.activitylevel});
                }else{
                    console.log('No data in persona: ',res.data)
                }
            }).catch(ex => {
                console.log('fail',ex.response.data.message)
            })
    }

    updatePersona(PersonalDetails){
        this.setState({loading:true});
        updatePersonalDetails(PersonalDetails).then(res=>{
            this.setState({loading:false});
            this.toastRef.current.show(res.data.Message,1000, () => {
                this.props.navigation.push('Settings');
            })
            console.log('Update persona success');
        }).catch(ex=>{
            this.setState({loading:false});
            this.toastRef.current.show('Error updating persona details',1000);
            console.log('Update persona error: ',ex);
        })
    }

    getActivityLevels() {
        axios.get('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/personel_details').then(async res => {
            //console.log(res.data)
            let data = res.data.activity_level;
            let data1 = res.data.medical_conditions;
            let value = await data.map(item => ({ label: (item.activity_name).trim(), value: (item.activity_name).trim() }));
            let value1 = await data1.map(item => ({ label: (item.medical_conditions_name).trim(), value: (item.medical_conditions_name).trim() }));
            this.setState({ activityLevel: value })
            this.setState({ medicalConditions: value1 })
        }).catch(ex => {
            console.log('Error of get Activity level: ', ex);
            this.setState({ error: 'Error getresponse' });
        })
    }

    registerUser() {
        this.setState({loading:true})
        const st = this.state;
        PersonalDetails.name = st.username;
        PersonalDetails.age = st.age;
        PersonalDetails.gender = st.sex;
        PersonalDetails.activitylevel = st.activity;
        PersonalDetails.medicalcondition = st.medical;
        PersonalDetails.height = st.height;
        PersonalDetails.weight = st.weight;
        PersonalDetails.user_id = st.user_id;
        if(this.state.update){
            this.updatePersona(PersonalDetails);
        }else{
            this.props.registerUser(PersonalDetails);
        }
    }

    componentDidUpdate(prevProps, nextProps) {
        if (prevProps.registerUserData !== this.props.registerUserData) {
            if (this.props.registerUserData !== null && !this.props.isRequesting) {
                this.setState({ loading: false })
                UserDetails.user_id = this.props.registerUserData.user_id;
                this.toastRef.current.show('Register User Success', 1000 ,() => {
                    this.props.navigation.navigate('YourPlanner')
                });
            }
        }

        if(!this.props.isRequesting){
        if (this.props.registerError !== null && prevProps.registerError !== this.props.registerError) {
            this.setState({ loading: false })
            console.log('error: ',this.props.registerError)
            this.toastRef.current.show(this.props.registerError, 1000);
        }
    }
        // if (prevProps.activityMedicalData !== this.props.activityMedicalData) {
        //     if (this.props.activityLoading === false) {
        //         let data = this.props.activityMedicalData;
        //         let value = data.activity_level.map(item => ({ label: (item.activity_name).trim(), value: (item.activity_name).trim() }));
        //         let value1 = data.medical_conditions.map(item => ({ label: (item.medical_conditions_name).trim(), value: (item.medical_conditions_name).trim() }));
        //         this.setState({ activityLevel: value })
        //         this.setState({ medicalConditions: value1 })
        //     }
        // }
    }

    render() {
        const genders = [
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Inter Sex', value: 'Inter Sex' }
        ]

        return (
            <View style={[StyleSheet.absoluteFill, { flex: 1, alignItems: 'center', backgroundColor: 'black' }]}>
                <NavigationEvents
                    onDidFocus={() => {
                        this.props.resetRegister();
                        //this.props.getActivityDetails();
                        let value = this.props.navigation.state.params?.edit;
                        let user_id = this.props.navigation.state.params?.user_id;
                        console.log('Edit mode: ', value, user_id)
                        if (value) {
                            this.getPersona();
                            this.setState({ update: true, user_id: user_id })
                        }
                        this.getActivityLevels();
                    }}
                />
                <ScrollView>
                    <Modal
                        visible={this.state.loading}
                        transparent={true}
                        onRequestClose={()=>{}}
                    >
                        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
                            <ActivityIndicator size='large' color='blue' />
                        </View>
                    </Modal>
                    <View style={{
                        flexDirection: 'column', alignItems: 'flex-start', marginLeft: wp('5%'),
                        marginVertical: hp('4%')
                    }}>
                        <Text style={{ fontSize: wp('7%'), textAlign: 'center', color: 'white', fontFamily: font.regular }}>PERSONAL</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: wp('7%'), textAlign: 'center', color: 'white', fontFamily: font.regular }}>DETAILS</Text>
                            <View style={{
                                height: wp('1.5%'), width: wp('1.5%'), marginTop: hp('3.5%'), marginLeft: wp('1%'),
                                borderRadius: (wp('1.5%')) / 2, backgroundColor: 'red'
                            }} />
                        </View>
                    </View>
                    <CustomTextInput
                        labelSize={wp('5%')}
                        label=''
                        inputValue={this.state.username}
                        placeholder='Username'
                        keyboardType='default'
                        onInputChange={(text) => this.setState({ username: text })}
                        width={wp('90%')}
                        height={hp('6.8%')}
                        inputSize={wp('5%')}
                        paddingLeft={wp('4%')}
                        lColor='white'
                        tColor='black'
                    />
                    <View style={{ marginVertical: hp('3%') }}>
                        <CustomTextInput
                            labelSize={wp('5%')}
                            label='Age'
                            inputValue={this.state.age}
                            placeholder='Age'
                            keyboardType='number-pad'
                            onInputChange={(text) => this.setState({ age: text })}
                            width={wp('90%')}
                            height={hp('6.8%')}
                            inputSize={wp('5%')}
                            paddingLeft={wp('4%')}
                            lColor='white'
                            tColor='black'
                        />
                    </View>
                    <Dpicker
                        items={genders}
                        dValue={this.state.sex}
                        placeholder={'Sex'}
                        dLabel={''}
                        fontSize = {wp('5%')}
                        changeDValue={(item) => { this.setState({ sex: item.value }) }}
                        zIndex={5000}
                    />
                    <View style={{ marginVertical: hp('3%') }}>
                        <Dpicker
                            items={this.state.activityLevel}
                            dValue={this.state.activity}
                            placeholder={'Activity Level'}
                            fontSize = {wp('5%')}
                            dLabel={''}
                            changeDValue={(item) => this.setState({ activity: item.value })}
                            zIndex={4000}
                        />
                    </View>
                    <Dpicker
                        items={this.state.medicalConditions}
                        dValue={this.state.medical}
                        placeholder={'Medical Conditions'}
                        dLabel={''}
                        fontSize = {wp('5%')}
                        changeDValue={(item) => this.setState({ medical: item.value })}
                        zIndex={3000}
                    />
                    <View style={{ marginVertical: hp('3%') }}>
                        <CustomTextInput
                            labelSize={wp('5%')}
                            label='Height'
                            inputValue={this.state.height}
                            placeholder='Height (cms)'
                            keyboardType='number-pad'
                            onInputChange={(text) => this.setState({ height: text })}
                            width={wp('90%')}
                        height={hp('6.8%')}
                        inputSize={wp('5%')}
                        paddingLeft={wp('4%')}
                            lColor='white'
                            tColor='black'
                        />
                    </View>

                    <CustomTextInput
                        labelSize={wp('5%')}
                        label='Weight'
                        inputValue={this.state.weight}
                        placeholder='Weight (kgs)'
                        keyboardType='number-pad'
                        onInputChange={(text) => this.setState({ weight: text })}
                        width={wp('90%')}
                        height={hp('6.8%')}
                        inputSize={wp('5%')}
                        paddingLeft={wp('4%')}
                        lColor='white'
                        tColor='black'
                    />
                    <Toast
                        ref= {this.toastRef}
                        style={{ backgroundColor: 'skyblue' }}
                        position='bottom'
                        positionValue={200}
                        fadeInDuration={750}
                        fadeOutDuration={1000}
                        opacity={0.9}
                        textStyle={{ color: 'black' }}
                    />
                   
                    <View style={{marginVertical: hp('3%')}}>
                        <EllipticalButton
                            ellipticClick={() => this.registerUser()}
                            width={wp('90%')}
                            height={hp('7%')}
                            btnImg={''}
                            btnSize={wp('6%')}
                            btnText={this.state.update? 'Update':'Next'}
                            bgColor='#345eeb'
                            labelColor='white'
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        registerUserData: state.AuthReducer.registerUserData,
        activityMedicalData: state.WorkoutReducer.activityMedicalData,
        activityLoading: state.WorkoutReducer.activityLoading,
        registerError: state.AuthReducer.registerError,
        acitivityErrorMsg: state.WorkoutReducer.errorMessage,
        isRequesting: state.AuthReducer.isRequesting
    };

};

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (PersonalDetails) => dispatch(registerUser(PersonalDetails)),
        resetRegister: () => dispatch(resetRegister()),
        getActivityDetails: () => dispatch(getActivityDetails()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Registration);
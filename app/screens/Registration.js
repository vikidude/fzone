import React from 'react';
import { Text, View, Dimensions, ScrollView, FlatList, Pressable, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import CustomTextInput from '../components/classComponent/CustomTextInput';
import Icon from 'react-native-vector-icons/Feather';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import Dpicker from '../components/functionalComponent/DPicker';

const { width, height } = Dimensions.get('screen')

export class PersonalScreen extends React.Component {
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
            activityLevel: '',
            medicalConditions: '',
        }
    }
    render() {
        const genders = [
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Inter Sex', value: 'Inter Sex' }
        ]
        const activityLevel = [
            { label: 'Sedentary', value: 'Sedentary' },
            { label: 'Lightly Active', value: 'Lightly Active' },

            { label: 'Moderately Active', value: 'Moderatly Active' },
            { label: 'Very Active', value: 'Very Active' },

            { label: 'Extra Active', value: 'Extra Active' },
        ]
        const schedule = [
            { label: 'Once a day', value: 'Once a day' },
            { label: 'Twice a day', value: 'Twice a day' },
        ]
        const rating = [
            { label: 'Beginner', value: 'Beginner' },
            { label: 'Intermediate', value: 'Intermediate' },
            { label: 'Advanced', value: 'Advanced' },
        ]
        const medicalConditions = [
            { label: 'Heart Ailments', value: 'Heart Ailments' },
            { label: 'Respiratory Problems', value: 'Respiratory Problems' },
            { label: 'Arthrits', value: 'Arthrits' },
            { label: 'Cancer/related treatments', value: 'Cancer/related treatments' },
            { label: 'Kidney Diseases', value: 'Kidney Diseases' },
            { label: 'Diabetes', value: 'Diabetes' },

            { label: 'Abnormal Blood Pressure', value: 'Abnormal Blood Pressure' },
            { label: 'Other', value: 'Other' },
        ]
        return (
            <View style={[StyleSheet.absoluteFill, { flex: 1, alignItems: 'center', backgroundColor: 'black' }]}>
                <ScrollView>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginLeft: width * 0.03, 
                        marginVertical: height * 0.03 }}>
                        <Text style={{ fontSize: width * 0.07, textAlign: 'center', color: 'white' }}>PERSONAL</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: width * 0.07, textAlign: 'center', color: 'white' }}>DETAILS</Text>
                            <View style={{
                                height: width * 0.02, width: width * 0.02, marginTop: height * 0.03, marginLeft: width * 0.01,
                                borderRadius: (width * 0.02) / 2, backgroundColor: 'red'
                            }} />
                        </View>
                    </View>
                    
                        <View style={{ marginVertical: height * 0.03 }}>
                            <CustomTextInput
                                labelSize={width * 0.04}
                                label='Age'
                                inputValue={this.state.age}
                                placeholder='Age'
                                keyboardType='number-pad'
                                onInputChange={(text) => this.setState({ age: text })}
                                width={width * 0.9}
                                height={height * 0.06}
                                inputSize={width * 0.045}
                                paddingLeft={width * 0.03}
                                lColor='white'
                                tColor='black'
                            />
                        </View>
                        <Dpicker
                            items={genders}
                            dValue={this.state.sex}
                            placeholder={'Sex'}
                            dLabel={''}
                            changeDValue={(item) => { this.setState({ sex: item.value }); console.log(item) }}
                            zIndex={5000}
                        />
                        <View style={{ marginVertical: height * 0.03 }}>
                            <Dpicker
                                items={activityLevel}
                                dValue={this.state.activityLevel}
                                placeholder={'Activity Level'}
                                dLabel={''}
                                changeDValue={(item) => this.setState({ activityLevel: item.value })}
                                zIndex={4000}
                            />
                        </View>
                        <Dpicker
                            items={medicalConditions}
                            dValue={this.state.medicalConditions}
                            placeholder={'Medical Conditions'}
                            dLabel={''}
                            changeDValue={(item) => this.setState({ medicalConditions: item.value })}
                            zIndex={3000}
                        />
                        <View style={{ marginVertical: height * 0.03 }}>
                            <CustomTextInput
                                labelSize={width * 0.04}
                                label='Height'
                                inputValue={this.state.height}
                                placeholder='Height (cms)'
                                keyboardType='number-pad'
                                onInputChange={(text) => this.setState({ height: text })}
                                width={width * 0.9}
                                height={height * 0.06}
                                inputSize={width * 0.045}
                                paddingLeft={width * 0.03}
                                lColor='white'
                                tColor='black'
                            />
                        </View>

                        <CustomTextInput
                            labelSize={width * 0.04}
                            label='City'
                            inputValue={this.state.weight}
                            placeholder='Weight (kgs)'
                            keyboardType='number-pad'
                            onInputChange={(text) => this.setState({ weight: text })}
                            width={width * 0.9}
                            height={height * 0.06}
                            inputSize={width * 0.045}
                            paddingLeft={width * 0.03}
                            lColor='white'
                            tColor='black'
                        />
                        
                        <View style={{ marginVertical: width * 0.1 }}>
                            <EllipticalButton
                                ellipticClick={() => this.props.navigation.navigate('Planner')}
                                width={width * 0.9}
                                height={height * 0.07}
                                btnImg={''}
                                btnSize={width * 0.06}
                                btnText={'Next'}
                                bgColor='#345eeb'
                                labelColor='white'
                            />
                        </View>
                    
                </ScrollView>
            </View>
        );
    }
}

export class HealthScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activityLevel: '',
            height: '',
            weight: '',
            workoutSchedule: '',
            rating: '',
            medicalConditions: '',
        }
    }
    render() {
        const activityLevel = [
            { label: 'Sedentary', value: 'sedentary' },
            { label: 'Lightly Active', value: 'lightly' },

            { label: 'Moderately Active', value: 'moderatly' },
            { label: 'Very Active', value: 'very' },

            { label: 'Extra Active', value: 'extra' },
        ]
        const schedule = [
            { label: 'Once a day', value: 'once' },
            { label: 'Twice a day', value: 'twice' },
        ]
        const rating = [
            { label: 'Beginner', value: 'sedentary' },
            { label: 'Intermediate', value: 'lightly' },
            { label: 'Advanced', value: 'lightly' },
        ]
        const medicalConditions = [
            { label: 'Heart Ailments', value: 'sedentary' },
            { label: 'Respiratory Problems', value: 'lightly' },
            { label: 'Arthrits', value: 'sedentary' },
            { label: 'Cancer/related treatments', value: 'lightly' },
            { label: 'Kidney Diseases', value: 'sedentary' },
            { label: 'Diabetes', value: 'lightly' },

            { label: 'Abnormal Blood Pressure', value: 'sedentary' },
            { label: 'Other', value: 'lightly' },
        ]
        return (
            <View style={[StyleSheet.absoluteFill, { flex: 1, alignItems: 'center', backgroundColor: 'black' }]}>
                <ScrollView>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginLeft: width * 0.03, marginVertical: height * 0.03 }}>
                        {/* <Feather name="user" size={width * 0.1} color="white" /> */}
                        <Text style={{ fontSize: width * 0.07, textAlign: 'center', color: 'white' }}>Health</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: width * 0.07, textAlign: 'center', color: 'white' }}>Details</Text>
                            <View style={{
                                height: width * 0.02, width: width * 0.02, marginTop: height * 0.03, marginLeft: width * 0.01,
                                borderRadius: (width * 0.02) / 2, backgroundColor: 'red'
                            }} />
                        </View>
                    </View>
                    <View style={{ marginVertical: height * 0.03 }}>
                        <Dpicker
                            items={activityLevel}
                            dValue={this.state.activityLevel}
                            placeholder={'Activity Level'}
                            dLabel={''}
                            changeDValue={(item) => this.setState({ activityLevel: item.value })}
                        />
                    </View>
                    <CustomTextInput
                        labelSize={width * 0.045}
                        label='Height'
                        inputValue={this.state.height}
                        placeholder='Height(in cm)'
                        keyboardType='numeric-pad'
                        onInputChange={(text) => this.setState({ height: text })}
                        width={width * 0.9}
                        height={height * 0.06}
                        inputSize={width * 0.045}
                        paddingLeft={width * 0.03}
                        lColor='white'
                        tColor='black'
                    />
                    <View style={{ marginVertical: height * 0.03 }}>
                        <CustomTextInput
                            labelSize={width * 0.045}
                            label='Weight'
                            inputValue={this.state.weight}
                            placeholder='Weight(in Kg)'
                            keyboardType='numeric-pad'
                            onInputChange={(text) => this.setState({ weight: text })}
                            width={width * 0.9}
                            height={height * 0.06}
                            inputSize={width * 0.045}
                            paddingLeft={width * 0.03}
                            lColor='white'
                            tColor='black'
                        />
                    </View>
                    <Dpicker
                        items={schedule}
                        dValue={this.state.workoutSchedule}
                        placeholder={'Workout Schedule'}
                        dLabel={''}
                        changeDValue={(item) => this.setState({ workoutSchedule: item.value })}
                    />
                    <View style={{ marginVertical: height * 0.03 }}>
                        <Dpicker
                            items={rating}
                            dValue={this.state.rating}
                            placeholder={'Workout Rating'}
                            dLabel={''}
                            changeDValue={(item) => this.setState({ rating: item.value })}
                        />
                    </View>
                    <Dpicker
                        items={medicalConditions}
                        dValue={this.state.medicalConditions}
                        placeholder={'Medical Conditions'}
                        dLabel={''}
                        changeDValue={(item) => this.setState({ medicalConditions: item.value })}
                    />
                    <View style={{ marginVertical: width * 0.08, alignItems: 'center' }}>
                        <EllipticalButton
                            ellipticClick={() => this.props.navigation.navigate('SeniorCitizenPlan')}
                            width={width * 0.9}
                            height={height * 0.07}
                            btnImg={''}
                            btnSize={width * 0.06}
                            btnText={'Submit'}
                            bgColor='#345eeb'
                            labelColor='white'
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

PersonalScreen.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={focused ? 'ios-person' : 'md-person'}
            color={tintColor}
            size={25}
        />
    )
}

HealthScreen.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={focused ? 'ios-health' : 'md-health'}
            color={tintColor}
            size={25}
        />
    )
}
const Regsitration = createMaterialTopTabNavigator({
    Personal: PersonalScreen,
    Health: HealthScreen,
}, {
    initialRouteName: 'Personal',
    tabBarOptions: {
        activeTintColor: 'white',
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: 'green',
            // paddingTop: height *0.03
        }
    }
});


const Reg = createAppContainer(Regsitration);

// const RegFinal = (props) => {
//     return (
//         <>
//             <View style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 backgroundColor: 'green',
//                 paddingHorizontal: 18,
//                 paddingVertical: height * 0.03,
//             }} />
//             <Reg />
//         </>
//     );
// }

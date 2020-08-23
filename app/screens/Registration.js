import React from 'react';
import { Text, View, Dimensions, ScrollView, FlatList, Pressable, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import CustomTextInput from '../components/classComponent/CustomTextInput';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('screen')

class PersonalScreen extends React.Component {
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
        }
    }
    render() {
        return (
            <View style={[StyleSheet.absoluteFill, { flex: 1, alignItems: 'center', backgroundColor: 'black' }]}>
                <ScrollView>
                    <View style={{ paddingHorizontal: width * 0.08, paddingBottom: width * 0.15 }}>
                        <CustomTextInput
                            labelSize={width * 0.04}
                            label='Username'
                            inputValue={this.state.username}
                            placeholder='Username'
                            keyboardType='default'
                            onInputChange={(text) => this.setState({ username: text })}
                            width={width * 0.8}
                            height={height * 0.06}
                            inputSize={width * 0.05}
                            lColor='white'
                            tColor='white'
                        />
                        <CustomTextInput
                            labelSize={width * 0.04}
                            label='E-mail'
                            inputValue={this.state.email}
                            placeholder='Email id'
                            keyboardType='email-address'
                            onInputChange={(text) => this.setState({ email: text })}
                            width={width * 0.8}
                            height={height * 0.06}
                            inputSize={width * 0.05}
                            lColor='white'
                            tColor='white'
                        />
                        <CustomTextInput
                            labelSize={width * 0.04}
                            label='Password'
                            inputValue={this.state.password}
                            placeholder='Password'
                            keyboardType='default'
                            onInputChange={(text) => this.setState({ password: text })}
                            width={width * 0.8}
                            height={height * 0.06}
                            inputSize={width * 0.05}
                            lColor='white'
                            tColor='white'
                        />
                        <CustomTextInput
                            labelSize={width * 0.04}
                            label='Age'
                            inputValue={this.state.age}
                            placeholder='Age'
                            keyboardType='number-pad'
                            onInputChange={(text) => this.setState({ age: text })}
                            width={width * 0.8}
                            height={height * 0.06}
                            inputSize={width * 0.05}
                            lColor='white'
                            tColor='white'
                        />
                        <View style={{ flexDirection: 'row', marginTop: width * 0.04, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: width * 0.05, color: 'white' }}>Sex</Text>
                            <FlatList
                                data={['Male', 'Female', 'Intersex']}
                                contentContainerStyle={{ marginLeft: width * 0.05 }}
                                renderItem={({ item, index }) => (
                                    <Pressable style={{ flexDirection: 'row', alignItems: 'center', }} onPress={() => this.setState({ sex: item })}>
                                        <View style={{
                                            width: width * 0.05, height: width * 0.05, borderRadius: (width * 0.05) / 2,
                                            backgroundColor: this.state.sex === item ? 'blue' : 'white', borderColor: 'black', borderWidth: 1
                                        }} />
                                        <Text style={{ fontSize: width * 0.05, marginLeft: width * 0.02, color: 'white' }}>
                                            {item}
                                        </Text>
                                    </Pressable>
                                )}
                                keyExtractor={(item, index) => item}
                            />
                        </View>
                        <CustomTextInput
                            labelSize={width * 0.04}
                            label='Mobile Number'
                            inputValue={this.state.mobilenumber}
                            placeholder='Mobile number'
                            keyboardType='number-pad'
                            onInputChange={(text) => this.setState({ mobilenumber: text })}
                            width={width * 0.8}
                            height={height * 0.06}
                            inputSize={width * 0.05}
                            lColor='white'
                            tColor='white'
                        />
                        <CustomTextInput
                            labelSize={width * 0.04}
                            label='City'
                            inputValue={this.state.city}
                            placeholder='City'
                            keyboardType='default'
                            onInputChange={(text) => this.setState({ city: text })}
                            width={width * 0.8}
                            height={height * 0.06}
                            inputSize={width * 0.05}
                            lColor='white'
                            tColor='white'
                        />
                        <CustomTextInput
                            labelSize={width * 0.04}
                            label='State'
                            inputValue={this.state.state}
                            placeholder='State'
                            keyboardType='default'
                            onInputChange={(text) => this.setState({ state: text })}
                            width={width * 0.8}
                            height={height * 0.06}
                            inputSize={width * 0.05}
                            lColor='white'
                            tColor='white'
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

class HealthScreen extends React.Component {
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
            { label: 'Sedentary', value: 'sedentary', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Lightly Active', value: 'lightly', icon: () => <Icon name="flag" size={18} color="#900" /> },

            { label: 'Moderately Active', value: 'moderatly', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Very Active', value: 'very', icon: () => <Icon name="flag" size={18} color="#900" /> },

            { label: 'Extra Active', value: 'extra', icon: () => <Icon name="flag" size={18} color="#900" /> },
        ]
        const schedule = [
            { label: 'Once a day', value: 'once', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Twice a day', value: 'twice', icon: () => <Icon name="flag" size={18} color="#900" /> },
        ]
        const rating = [
            { label: 'Beginner', value: 'sedentary', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Intermediate', value: 'lightly', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Advanced', value: 'lightly', icon: () => <Icon name="flag" size={18} color="#900" /> },
        ]
        const medicalConditions = [
            { label: 'Heart Ailments', value: 'sedentary', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Respiratory Problems', value: 'lightly', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Arthrits', value: 'sedentary', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Cancer/related treatments', value: 'lightly', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Kidney Diseases', value: 'sedentary', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Diabetes', value: 'lightly', icon: () => <Icon name="flag" size={18} color="#900" /> },

            { label: 'Abnormal Blood Pressure', value: 'sedentary', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Other', value: 'lightly', icon: () => <Icon name="flag" size={18} color="#900" /> },
        ]
        return (
            <View style={[StyleSheet.absoluteFill, { flex: 1, alignItems: 'center', paddingVertical: height * 0.05, backgroundColor: 'black' }]}>
                <ScrollView>
                    <Dpicker
                        items={activityLevel}
                        dValue={this.state.activityLevel}
                        dLabel={'Activity Level'}
                        changeDValue={(item) => this.setState({ activityLevel: item.value })}
                    />
                    <CustomTextInput
                        labelSize={width * 0.045}
                        label='Height'
                        inputValue={this.state.height}
                        placeholder='Height'
                        keyboardType='numeric-pad'
                        onInputChange={(text) => this.setState({ height: text })}
                        width={width * 0.9}
                        height={height * 0.06}
                        inputSize={width * 0.04}
                        lColor='white'
                        tColor='white'
                    />
                    <View style={{ marginVertical: width * 0.06 }}>
                        <CustomTextInput
                            labelSize={width * 0.045}
                            label='Weight'
                            inputValue={this.state.weight}
                            placeholder='Weight'
                            keyboardType='numeric-pad'
                            onInputChange={(text) => this.setState({ weight: text })}
                            width={width * 0.9}
                            height={height * 0.06}
                            inputSize={width * 0.05}
                            lColor='white'
                            tColor='white'
                        />
                    </View>
                    <Dpicker
                        items={schedule}
                        dValue={this.state.workoutSchedule}
                        dLabel={'Workout Schedule'}
                        changeDValue={(item) => this.setState({ workoutSchedule: item.value })}
                    />

                    <Dpicker
                        items={rating}
                        dValue={this.state.rating}
                        dLabel={'Workout Rating'}
                        changeDValue={(item) => this.setState({ rating: item.value })}
                    />
                    <Dpicker
                        items={medicalConditions}
                        dValue={this.state.medicalConditions}
                        dLabel={'Meidcal Conditions'}
                        changeDValue={(item) => this.setState({ medicalConditions: item.value })}
                    />

                    <View style={{ marginVertical: width * 0.06, alignItems: 'center' }}>
                        <EllipticalButton
                            ellipticClick={() => alert(`btn clicked`)}
                            width={width * 0.9}
                            height={height * 0.07}
                            btnImg={''}
                            btnSize={width * 0.06}
                            btnText={'Submit'}
                            bgColor='grey'
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


const Dpicker = (props) => {
    const radius = (width * 0.9) / 2
    return (
        <View style={{ marginBottom: height * 0.03 }}>
            <Text style={{ marginBottom: width * 0.02, fontSize: width * 0.04, color: 'white' }}>
                {props.dLabel}
            </Text>
            <DropDownPicker
                items={props.items}
                defaultValue={props.dValue}
                containerStyle={{ height: height * 0.06, width: width * 0.9 }}
                style={{
                    backgroundColor: '#fafafa', borderTopLeftRadius: radius, borderTopRightRadius: radius,
                    borderBottomLeftRadius: radius, borderBottomRightRadius: radius
                }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={(item) => props.changeDValue(item)}
            />
        </View>
    );
}

// const Reg = createAppContainer(Regsitration);

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

export default createAppContainer(Regsitration);
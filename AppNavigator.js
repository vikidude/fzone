import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Login from './app/screens/Login'
import Screen1 from './app/screens/Screen1'
import {PersonalScreen,HealthScreen} from './app/screens/Registration';
import Settings from './app/screens/Settings';
import LeaderBoard from './app/screens/LeaderBoard';
import Subscription from './app/screens/Subscription';
import Workout from './app/screens/Workout';
import Home from './app/screens/Home';
import Test from './app/screens/Test';
import Test1 from './app/screens/Test1';
import {Planner,FinalStep,ChoosePlan,SeniorCitizenPlan} from './app/screens/PlanSteps';
import {DuringWorkoutOne,DuringWorkoutTwo,SideMenu,AddWorkout,PostWorkout} from './app/screens/Test2';
import {Welcome,TFZ} from './app/screens/Test3';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {View,Text} from 'react-native';

class DrawerComponent extends React.PureComponent{
    constructor(props){
        super(props);
    }
     render() {
         return (
             <View style={{ flex: 1 }}>
                 <SideMenu />
             </View>
         );
     }
 }
  
const SideNavigator = createDrawerNavigator({
    DuringWorkoutOne: {
        screen: DuringWorkoutOne
    }
},{
    initialRouteName: 'DuringWorkoutOne',
    contentComponent: DrawerComponent,
    drawerPosition: 'left',
    drawerWidth: '85%',
    drawerBackgroundColor: 'rgba(0,0,0,0.5)',
})

const StackNavigator = createStackNavigator({
    Welcome: {
        screen: Welcome
    },
    TFZ: {
        screen: TFZ
    },
    Planner: {
        screen: Planner
    },
    FinalStep: {
        screen: FinalStep
    },
    ChoosePlan: {
        screen: ChoosePlan
    },
    SeniorCitizenPlan: {
        screen: SeniorCitizenPlan
    },
    DuringWorkoutOne: {
        screen: SideNavigator
    },
    DuringWorkoutTwo: {
        screen: DuringWorkoutTwo
    },
    SideMenu: {
        screen: SideMenu
    },
    AddWorkout: {
        screen: AddWorkout
    },
    PostWorkout: {
        screen: PostWorkout
    },
    Login: {
        screen: Login,
    },
    Screen1: {
        screen: Screen1
    },
    HealthScreen: {
        screen: HealthScreen
    },
    PersonalScreen: {
        screen: PersonalScreen
    },
    Settings: {
        screen: Settings
    },
    LeaderBoard: {
        screen: LeaderBoard
    },
    Subscription: {
        screen: Subscription
    },
    Workout: {
        screen: Workout
    },
    Home: {
        screen: Home
    },
    Test: {
        screen: Test
    },
    Test1: {
        screen: Test1
    }
}, {
    initialRouteName: 'Welcome',
    headerMode: 'none'
})

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
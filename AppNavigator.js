import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Login from './app/screens/Login'
import MobileNumberAuth from './app/screens/MobileNumberAuth'
import Registration from './app/screens/Registration';
import Settings from './app/screens/Settings';
import SingleLeaderBoard from './app/screens/SingleLeaderBoard';
import LeaderBoard from './app/screens/LeaderBoard';
import Subscription from './app/screens/Subscription';
import Workout from './app/screens/Workout';
import Home from './app/screens/Home';
import BMICalculation from './app/screens/BMICalculation';
import Rest from './app/screens/Rest';
import YourPlanner from './app/screens/YourPlanner'
import SeniorCitizenPlan from './app/screens/SeniorCitizenPlan';
import FinalStep from './app/screens/FinalStep';
import ChoosePlan from './app/screens/ChoosePlan';
import DuringWorkoutOne from './app/screens/WorkoutSteps';
import WorkoutRest from './app/screens/WorkoutRest';
import AddWorkout from './app/screens/AddWorkout';
import PostWorkout from './app/screens/PostWorkout';
import Welcome from './app/screens/Welcome';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { View, ActivityIndicator } from 'react-native';
import Profile from './app/screens/Profile';
import FoodPlanSelect from './app/screens/FoodPlanSelect';
import FoodPlan from './app/screens/FoodPlan';
import Feedback from './app/screens/Feedback';
import AlternateExercises from './app/screens/AlternateExercise';

class DrawerComponent extends React.PureComponent {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AlternateExercises />
            </View>
        );
    }
}

const SideNavigator = createDrawerNavigator({
    DuringWorkoutOne: {
        screen: DuringWorkoutOne
    }
}, {
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
    Login: {
        screen: Login,
    },
    MobileNumberAuth: {
        screen: MobileNumberAuth
    },
    Registration: {
        screen: Registration
    },
    YourPlanner: {
        screen: YourPlanner
    },
    FinalStep: {
        screen: FinalStep
    },
    ChoosePlan: {
        screen: ChoosePlan
    },
    Home: {
        screen: Home
    },
    SeniorCitizenPlan: {
        screen: SeniorCitizenPlan
    },
    Workout: {
        screen: Workout
    },
    DuringWorkoutOne: {
        screen: SideNavigator
    },
    WorkoutRest: {
        screen: WorkoutRest
    },
    AlternateExercises: {
        screen: AlternateExercises
    },
    PostWorkout: {
        screen: PostWorkout
    },
    AddWorkout: {
        screen: AddWorkout
    },
    Settings: {
        screen: Settings
    },
    SingleLeaderBoard: {
        screen: SingleLeaderBoard
    },
    LeaderBoard: {
        screen: LeaderBoard
    },
    Subscription: {
        screen: Subscription
    },
    BMICalculation: {
        screen: BMICalculation
    },
    Rest: {
        screen: Rest
    },
    Profile: {
        screen: Profile
    },
    FoodPlan: {
        screen: FoodPlan
    },
    FoodPlanSelect: {
        screen: FoodPlanSelect
    },
    Feedback: {
        screen: Feedback
    }
}, {
    initialRouteName: 'Welcome',
    headerMode: 'none'
})

const AppContainer = createAppContainer(StackNavigator);

// class AppNavigator extends React.PureComponent {

//     render() {
//         return (
//             <Provider store={store}>
//                 <PersistGate
//                     loading={
//                         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                             <ActivityIndicator
//                                 size="large"
//                                 color="blue"
//                             />
//                         </View>
//                     }
//                     persistor={persistor}>
//                     <AppContainer />
//                 </PersistGate>
//             </Provider>
//         )
//     }
// }


export default AppContainer;
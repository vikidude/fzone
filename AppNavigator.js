import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Login from './app/screens/Login'
import Screen1 from './app/screens/Screen1'
import {PersonalScreen,HealthScreen} from './app/screens/Registration';
import Settings from './app/screens/Settings';
import LeaderBoard from './app/screens/LeaderBoard';
import Subscription from './app/screens/Subscription';
import Workout from './app/screens/Workout';


const StackNavigator = createStackNavigator({
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
    }
}, {
    initialRouteName: 'Login',
    headerMode: "none"
})

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
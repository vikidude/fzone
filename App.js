import React, { Component } from 'react';
import AppNavigator from './AppNavigator';
import { StatusBar, View, ActivityIndicator, Dimensions } from 'react-native';
import { Planner, FinalStep, ChoosePlan, SeniorCitizenPlan } from './app/screens/PlanSteps';
import { DuringWorkoutOne, DuringWorkoutTwo, SideMenu, AddWorkout, PostWorkout } from './app/screens/Test2';
import { Colors } from './app/consts/colors';

XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
  GLOBAL.originalXMLHttpRequest :
  GLOBAL.XMLHttpRequest;

// fetch logger
global._fetch = fetch;
global.fetch = function (uri, options, ...args) {
  return global._fetch(uri, options, ...args).then((response) => {
    console.log('Fetch', { request: { uri, options, ...args }, response });
    return response;
  });
};

console.disableYellowBox = true
export default class App extends Component {
  render() {
    return (
      <View style={{ flexGrow: 1 }}>
        <StatusBar backgroundColor={Colors.dark_blue} animated={true} barStyle='light-content' />
        <AppNavigator />
      </View>
    )
  }
}
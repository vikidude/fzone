import React, { Component } from 'react';
import AppNavigator from './AppNavigator';
import { StatusBar, View, ActivityIndicator, Dimensions, Image, Text, LogBox } from 'react-native';
import { Colors } from './app/consts/colors';
import NetInfo from "@react-native-community/netinfo";
const { height, width } = Dimensions.get('screen');
import { no_internet } from './app/consts/images';
import { font } from './app/consts/fontFamily';
import { store, persistor } from './app/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

LogBox.ignoreAllLogs(true)
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      online: false,
    }
  }
  // componentDidMount() {
  //   NetInfo.fetch().then(state => {
  //     if (state.isConnected) {
  //       this.setState({ online: true });
  //     } else {
  //       this.setState({ online: false });
  //     }
  //   });
  //   NetInfo.addEventListener(this.handleConnectivityChange);
  // }

  // componentWillUnmount() {
  //   NetInfo.removeEventListener(this.handleConnectivityChange);
  // }

  handleConnectivityChange = state => {
    if (state.isConnected) {
      this.setState({ online: true });
    } else {
      this.setState({ online: false });
    }
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator
                size="large"
                color="blue"
              />
            </View>
          }
          persistor={persistor}>
          <View style={{ flexGrow: 1 }}>
            <StatusBar backgroundColor={Colors.dark_blue} animated={true} barStyle='light-content' />
            <AppNavigator />
          </View>
        </PersistGate>
      </Provider>
    )
  }
}
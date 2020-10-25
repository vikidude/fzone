'use strict';

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';

export default class Welcome extends React.Component {

  onEnd = () => {
    console.log('Video finished')
    this.props.navigation.navigate('Login')
  };

  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={() => { }}
        >
          <Video
            source={require('../assets/welcome_animation.mp4')}
            style={styles.fullScreen}
            resizeMode={'contain'}
            onEnd={this.onEnd}
            repeat={false}
          />
        </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});
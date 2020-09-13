// import React from 'react';
// import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
// import { tfz_white_logo } from '../consts/images';
// const { width, height } = Dimensions.get('screen');
// import Video from 'react-native-video';

// export const Welcome = (props) => {
//     // React.useEffect(()=>{
//     //     setTimeout(() => {
//     //         props.navigation.navigate('TFZ')
//     //     }, 500);
//     // },[])
//     const vedio = require('../assets/welcome_animation.mp4');
//     return (
//         <Video source={vedio}   // Can be a URL or a local file.
//             // ref={(ref) => {
//             //     this.player = ref
//             // }}                                      // Store reference
//             // onBuffer={this.onBuffer}                // Callback when remote video is buffering
//             // onError={this.videoError}               // Callback when video cannot be loaded
//             style={styles.backgroundVideo}
//             onEnd={() => console.log('Vedio finished')} />
//     );
// }

// var styles = StyleSheet.create({
//     backgroundVideo: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0,
//     },
// });
// export const TFZ = (props) => {
//     React.useEffect(() => {
//         setTimeout(() => {
//             props.navigation.navigate('Login')
//         }, 500);
//     }, [])
//     return (
//         <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }]}>
//             <Image source={tfz_white_logo} style={{ width: width * 0.68, height: width * 0.25 }} />
//         </View>
//     );
// }

'use strict';

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import Video from 'react-native-video';

export default class Welcome extends Component {

  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    paused: true,
  };

  onEnd = () => {
    console.log('Vedio finished')
    this.props.navigation.navigate('Login')
    // this.setState({ paused: true })
    // this.video.seek(0)
  };

  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={() => this.setState({ paused: !this.state.paused })}
        >
          <Video
            source={require('../assets/welcome_animation.mp4')}
            style={styles.fullScreen}
            // rate={this.state.rate}
            // volume={this.state.volume}
            // muted={this.state.muted}
            resizeMode={this.state.resizeMode}
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
  },
  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
});
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Dimensions
} from 'react-native';

// import MapView from 'react-native-maps';


export default class AwesomeProject extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <MapView
          style={styles.map}
          customMapStyle={require('./mapstyle.json')}
          initialRegion={{
            latitude: 52,
            longitude: 7,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
        >

        </MapView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

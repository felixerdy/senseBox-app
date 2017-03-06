/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Dimensions,
    TextInput
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import MapView from 'react-native-maps';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewRef: 0,
            boxes: []
        }
        this.goToDetailView = this.goToDetailView.bind(this)
    }

    componentDidMount() {
      return fetch('https://api.opensensemap.org/boxes')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          boxes: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
    }

    goToDetailView(box) {
      Actions.detailView({
        box: box
      })
    }

    render() {
      if(this.state.boxes !== undefined) {
        return (
            <View style={styles.container}>
                <MapView style={styles.map} customMapStyle={require('./mapstyle.json')} initialRegion={{
                    latitude: 52,
                    longitude: 7.6,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5
                }}>
                  {this.state.boxes.map(box => (
                    <MapView.Marker
                      key={box._id}
                      coordinate={{
                        latitude: box.loc[0].geometry.coordinates[1],
                        longitude: box.loc[0].geometry.coordinates[0]
                      }}
                      title={box.name}
                      box={box}
                      onCalloutPress={() => this.goToDetailView(box)}
                    />
                  ))}
                </MapView>
            </View>
        );
      } else {
        return (
          <View style={styles.container}>
              <MapView style={styles.map} customMapStyle={require('./mapstyle.json')} initialRegion={{
                  latitude: 52,
                  longitude: 7,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1
              }}>
              </MapView>

            <TextInput style={styles.searchInput} placeholder="Suchen" onChangeText={(text) => this.setState({text})}/>

          </View>
        )
      }
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    searchInput: {
        position: 'absolute',
        width: Dimensions.get('window').width * 0.9,
        top: 10,
        left: Dimensions.get('window').width * 0.05,
        zIndex: 99,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        padding: 10
    }
});

AppRegistry.registerComponent('App', () => App);

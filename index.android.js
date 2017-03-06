/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';


import {
    AppRegistry
} from 'react-native';

import App from './App.android.js'

import DetailView from './Detail.android.js'

export default class AwesomeProject extends Component {

    render() {
      return(
        <Router>
          <Scene key="root">
            <Scene key="app" component={App} title="App" initial={true} />
            <Scene key="detailView" component={DetailView} />
          </Scene>
        </Router>
      )
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

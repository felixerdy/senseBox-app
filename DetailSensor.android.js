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
    TextInput,
} from 'react-native';

import { SmoothLine } from 'react-native-pathjs-charts'

export default class DetailView extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {
      fetch(`https://api.opensensemap.org/boxes/${this.props.boxId}/data/${this.props.sensor._id}`)
      .then((response) => response.json())
      .then((responseJson) => {

        var data = []

        responseJson.map((e, i) => {
            data.push({x: i, y: parseFloat(e.value)});
        })

        this.setState({
          chartData: data
        })

      })
    }

    componentDidMount() {

    }

    render() {
      return (
          <View style={styles.appView}>
              <Text>{this.props.sensor.title}: {this.props.sensor.lastMeasurement.value}
                  {this.props.sensor.unit}</Text>
                  <SmoothLine data={this.state.chartData} options={options} xKey='x' yKey='y' />
          </View>
      );
    }
}

const styles = StyleSheet.create({
    appView: {

    }
});

let options = {
      width: 280,
      height: 280,
      color: '#2980B9',
      margin: {
        top: 20,
        left: 45,
        bottom: 25,
        right: 20
      },
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

AppRegistry.registerComponent('DetailView', () => DetailView);

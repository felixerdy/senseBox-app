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
    Image,
    ScrollView
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import ChartView from 'react-native-highcharts';

import DetailSensor from './DetailSensor.android.js'

export default class DetailView extends Component {

    constructor(props) {
        super(props);
        Actions.refresh({title: this.props.box.name})

        this.state = {}
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        if (this.props.box !== undefined) {
            return (
                <ScrollView style={styles.appView}>
                    {this.props.box.image !== undefined && <Image style={{
                        width: Dimensions.get('window').width,
                        height: 200
                    }} source={{
                        uri: `https://opensensemap.org/userimages/${this.props.box.image}`
                    }}/>
}
                    {this.props.box.sensors.map((sensor) => (
                        <DetailSensor key={sensor._id} boxId={this.props.box._id} sensor={sensor} />
                    ))}
                </ScrollView>
            );
        } else {
            return (
                <View style={styles.appView}>
                    <Text>Loading...</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    appView: {
        marginTop: 50
    }
});

AppRegistry.registerComponent('DetailView', () => DetailView);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import Nav from './App/App'
// import Home from './App/Views/Home'

export default class BusQR_RN extends Component {
    render() {
        return (
            <Nav />
        );
    }
}


AppRegistry.registerComponent('BusQR_RN', () => BusQR_RN);

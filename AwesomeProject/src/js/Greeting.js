import React, { Component,PropTypes } from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View, Image} from 'react-native';
//props表示属性
export default class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}
import React, { Component } from 'react';
import { AppRegistry, View} from 'react-native';

export default class FixedDimensionsBasics  extends Component {
    render(){
        return(
            <View>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 20, height: 20, backgroundColor: 'skyblue'}} />
                <View style={{width: 10, height: 10, backgroundColor: 'steelblue'}} />
            </View>
        )
    }
}
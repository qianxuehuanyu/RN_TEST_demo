//引入 1 ！
import React, {Component,PropTypes } from 'react';
//引入 2 ！
import { View, Text, TouchableHighlight } from 'react-native';
//导航器内部流程

import BlinkApp from './BlinkApp'
import ClinkApp from './ClinkApp'

export default class TestDouble extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
        index:PropTypes.string.isRequired
    }

    render() {
        return (
            <View>
                <Text>Current Scene: { this.props.title }!!!{this.props.index}</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>点我进入下一场景</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>点我返回上一场景</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
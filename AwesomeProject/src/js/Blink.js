import React, { Component } from 'react';
import { AppRegistry, Text, View} from 'react-native';

export default class Blink extends Component {
    constructor(props) {
        super(props);
        //声明、定义状态
        this.state = { showText: true };

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            //状态变化
            this.setState({ showText: !this.state.showText });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}
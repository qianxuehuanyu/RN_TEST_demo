import React, {Component ,PropTypes } from 'react';
//引入 1 ！
import { View, Text,TouchableHighlight } from 'react-native';
//引入 2 ！
////组件内容独立

//////////////只能有一个class！！！！！


//简洁调试（1）
//export default class Test extends Component {
//    static defaultProps = {
//        title: 'MyScene'
//    };
//
//    render() {
//        return (
//            <View>
//                <Text>Hi! My name is {this.props.title}.</Text>
//            </View>
//        )
//    }
//}


//简洁调试（2）
export default class Sdfawedfasd extends Component {
    static defaultProps = {
        title: 'MyScene'
    };

    render() {
        return (
            <View>
                <Text>9839128391270283712 {this.props.title}.</Text>
            </View>
        )
    }
}


import React, { Component } from 'react';
import { AppRegistry, Image} from 'react-native';
//图片添加
export default class Bananas extends Component {
    render() {
        let pic = {
            uri: 'http://static.firefoxchina.cn/img/201702/4_58a554795bf0f0.jpg'
        };
        return (
            <Image source={pic} style={{width: 1000, height: 110}} />
        );
    }
}
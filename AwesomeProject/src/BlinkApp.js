/**
 * Created by admin on 2017/2/22.
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View, Image} from 'react-native';
//        API_主体,    导航器,     样式表      文字,  视图, 图片,
//显示+消失效果
import Blink from './js/Blink'
///image图片
import Bananas from './js/Bananas'

////自定义组件属性props
import Greeting from './js/Greeting'

import YoDawgApp from './js/YoDawgApp'
import FixedDimensionsBasics from './js/FixedDimensionsBasics'
import FlexDimensionsBasics from  './js/FlexDimensionsBasics'

///导航器内部：text文字变化 组合对比 色块大小
export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Greeting name='111111111111111111111111'/>
                <Blink text='Yes blinking is so great' style={styles.red}/>
                <Greeting name='111111111111111111111111' style={styles.bigblue} />
                <Text style={[styles.bigblue,styles.red]}>gggggggg</Text>
                <Text style={[styles.red,styles.bigblue]}>gggghhhh</Text>
                <Bananas />
                <YoDawgApp />
                <FixedDimensionsBasics />

                <FlexDimensionsBasics />
            </View>
        );
    }
}

//stylesheet css样式
const styles=StyleSheet.create({
    bigblue:{
        color:'blue',
        fontWeight:'bold',
        fontSize:30,
    },
    red:{
        color:'red',
    },
});
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//

import React, { Component } from 'react';


//        API_主体,    导航器,     样式表      文字,  视图, 图片,


////导航器测试

import TestDouble from './src/test_double';
//简单基础的导航
//import { AppRegistry, Navigator, StyleSheet, Text, View, Image} from 'react-native';
//
//class SimpleNavigationApp extends Component {
//  render() {
//    return (
//        <Navigator
//            initialRoute={{ title: 'My Initial Scene', index: 0 }}
//            renderScene={(route, navigator) =>
//          <TestDouble
//            title={route.title}
//
//            // Function to call when a new scene should be displayed
//            onForward={ () => {
//              const nextIndex = route.index + 1;
//              navigator.push({
//                title: 'Scene ' + nextIndex,
//                index: nextIndex,
//              });
//            }}
//
//            // Function to call to go back to the previous scene
//            onBack={() => {
//              if (route.index > 0) {
//                navigator.pop();
//              }
//            }}
//          />
//        }
//        />
//    )
//  }
//}



///////////////
///////////////
//NavigationExperimental

import { NavigationExperimental, PixelRatio, ScrollView, StyleSheet, Text, TouchableHighlight } from 'react-native';
//全定义
const {
    CardStack: NavigationCardStack,
    StateUtils: NavigationStateUtils,
    } = NavigationExperimental;
//主体
class BleedingEdgeApplication extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            // 定义初始的导航状态
            navigationState: {
                index: 0, // 现在是第一页（索引从0开始）
                routes: [{key: 'My Initial Scene'}], // 初始仅设定一个路由
            },
        };

        // 我们稍后再补充此函数的实现细节
        this._onNavigationChange = this._onNavigationChange.bind(this);
    }

    _onNavigationChange(type) {
        // 我们稍后再补充此函数的实现细节
    }

    render() {
        return (
            <Text>这是一段占位的文字。稍后我们会在这里渲染导航。</Text>
        );
    }
}



AppRegistry.registerComponent('AwesomeProject', () => SimpleNavigationApp);

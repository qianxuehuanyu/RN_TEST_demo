/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//

import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View, Image} from 'react-native';
//        API_主体,    导航器,     样式表      文字,  视图, 图片,


////导航器测试

import TestDouble from './src/test_double';

class SimpleNavigationApp extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{ title: 'My Initial Scene', index: 0 }}
            renderScene={(route, navigator) =>
          <TestDouble
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
        />
    )
  }
}




AppRegistry.registerComponent('AwesomeProject', () => SimpleNavigationApp);

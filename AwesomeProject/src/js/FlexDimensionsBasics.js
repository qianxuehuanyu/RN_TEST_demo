
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
    render() {
        return (
    // 试试去掉父View中的`flex: 1`。
    // 则父View不再具有尺寸，因此子组件也无法再撑开。
    // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
// test1
    //<View style={{height:100}}>
    //    <View style={{flex: 1, backgroundColor: 'powderblue'}} />
    //    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
    //    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
    //</View>
// test2   flexDirection: row/column 水平排列/垂直排列
    //<View style={{height:150, flexDirection: 'row'}}>
    //  <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    //  <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
    //  <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    //</View>
// test3 沿主轴的排列方式Justify Content与flexDirection的组合
// 排列方式有flex-start（头部）、center（居中）、flex-end（底部）、space-around（平均）以及space-between（紧挨）
    //<View style={{
    //    height:200,
    //    flexDirection: 'column',
    //    justifyContent: 'flex-end',
    //   }}>
    //    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    //    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
    //    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    //</View>
// test4 Align Items次轴：相对主轴Justify Content垂直
// 排列方式：flex-start(头部)、center（居中）、flex-end（底部）以及stretch（平铺）。
        <View style={{
            width:100,
            height:90,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            }}>
            <View style={{width:10,height: 50, backgroundColor: 'powderblue'}} />
            <View style={{ width:10,height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width:10, height: 50, backgroundColor: 'steelblue'}} />
        </View>



//使用次轴stretch时，对应的宽或者高需要进行清除，否则会遵循定义的高度无法拉伸
//嵌套调用 父元素没有高度的话 子元素flex会没有高度！！！！

);
    }};

/**
 * Created by Defore on 2017/8/14.
 */
import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation'
import {Platform} from 'react-native';

import baseStyle from './BaseStyles'
import Home from './Views/Home'
import Wallet from './Views/Wallet'
import Recharge from './Views/Recharge'
import Login from './Views/Login'
import Certi from './Views/Certification'
import PersonInfo from './Views/PersonInfo'
import MsgDetail from './Views/MsgDetails'
import TransDetail from './Views/TransDetails'
import QRGenerator from './Views/PaycodeGenerator'

const nav = StackNavigator({
    Home: {
        screen: Home, // 屏幕的组件链接
        navigationOptions: {
            header: null,
        },
    },
    Wallet: {screen: Wallet}, //我的钱包
    Recharge: {screen: Recharge}, // 充值
    Login: {screen: Login}, // 登录
    Certi: {screen: Certi}, // 实名认证
    PersonInfo: {screen: PersonInfo}, // 个人信息
    MsgDetail:{screen: MsgDetail},
    TransDetail:{screen:TransDetail},
    QRGenerator:{screen:QRGenerator},
}, {
    initialRouteName: 'Login', // 默认显示界面
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen',
    navigationOptions: {
        headerTitleStyle: [baseStyle.regularFont, {
            fontSize: 18, color: '#232323', alignSelf: 'center',
            marginLeft: Platform.OS === 'ios' ? 0 : -25,
        }],//标题颜色/样式
        headerTintColor: '#777777',//返回按键的颜色
        headerStyle: {backgroundColor: 'white',},// 导航条背景色/长宽等
        headerBackTitle: '',
        allowFontScaling:false,
    },
    onTransitionStart: () => {
        console.log('导航栏切换开始');
    },  // 回调
    onTransitionEnd: () => {
        console.log('导航栏切换结束');
    },  // 回调
});

export default nav;
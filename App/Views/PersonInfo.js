/**
 * Created by Defore on 2017/8/25.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    PixelRatio,
    Image,
} from 'react-native';

import InfoBar from '../MyComponents/InfoListContainer';
import InfoList from '../MyComponents/InfoFlatList';
// images
const nameIco = require('../srcImg/personInfo/sign_icon.png')//32*28
const phoneIco = require('../srcImg/personInfo/phone_icon.png')//24*38
const certiIco = require('../srcImg/personInfo/certifica_icon.png')//28*34
const settingIco = require('../srcImg/personInfo/setting_ico.png')//32*32

const {width, height} = Dimensions.get('window');

export default class PersonInfo extends Component {
    static navigationOptions = {
        headerTitle:'个人信息',
    };

    _topSrcData = [
        {img: nameIco, imgWidth: 16, imgHeight: 14, title: '姓名', info: '我', touchAble: false, index: 0},
        {img: phoneIco, imgWidth: 12, imgHeight: 18, title: '手机号', info: '15587873334', touchAble: false, index: 1},
        {img: certiIco, imgWidth: 12, imgHeight: 18, title: '实名认证', info: '已认证', touchAble: false, index: 2},
    ];

    _srcData = [
        {img: settingIco, imgWidth: 15, imgHeight: 15.1, title: '设置', info: '>', touchAble: true, index: 0},
    ];

    render() {
        return (
            <View style={styles.container}>
                <InfoList dataArray={this._topSrcData} listHeight={168} listWidth={width-40} marginTop={19}/>
                <InfoList dataArray={this._srcData} listHeight={54} listWidth={width-40} marginTop={24}/>
            </View>
        )
    }
}

//---------------------------------------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', alignItems: 'center',
        backgroundColor: '#F6F8FB',
    },
    /* --------- 上半部 ---------*/
    topViewArea: {
        backgroundColor: '#76ABF1',
        height: 175 / 667 * height, width: width,
        justifyContent: 'flex-start', alignItems: 'center',
    },

    topViewTitleArea: {
        flexDirection: 'row',//从左往右
        justifyContent: 'space-between', alignItems: 'center',
        height: 25 / 667 * height, width: width - 40, marginTop: 32,
    },
    /* --------- 圆圈内的信息 ---------*/
    OvalContainer: {
        borderRadius: 200, backgroundColor: '#ffffff', marginTop: -56,
        width: 227 / 375 * width, height: 227 / 375 * width,
        shadowRadius: 10, shadowColor: '#D9E9FF', shadowOpacity: 1,
        elevation: 10,
    },
});
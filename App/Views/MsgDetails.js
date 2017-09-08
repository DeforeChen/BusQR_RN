/**
 * Created by Defore on 2017/9/4.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
} from 'react-native';

import Props from 'prop-types';
const {width, height} = Dimensions.get('window');

export default class MsgDetails extends Component {
    static navigationOptions = {
        headerTitle:'消息详情',
    };

    _renderItem(item) {
        return (
            <View style={styles.cellContainer}>
                <Text style={styles.dateText} allowFontScaling={false}>
                    {'日期' + item.date}
                </Text>
                <View style={styles.messageView}>
                    <Text style={styles.payResultText} allowFontScaling={false}>
                        {item.payway === 0 ? '支付成功' : '支付失败'}
                    </Text>
                    <Text style={styles.payDetails} allowFontScaling={false}>
                        {item.payway === 0 ? '您成功充值' + item.amount + '元' : ''}
                    </Text>
                </View>
            </View>
        )
    }

    _data = [
        {index: 0, date: '2016年8月29日', amount: 10, payway: 0,},
        {index: 1, date: '2016年9月29日', amount: 11, payway: 1,},
        {index: 2, date: '2016年3月2日', amount: 3, payway: 2},
    ];

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this._data}
                          renderItem={({item}) => this._renderItem(item)}
                          keyExtractor={(item) => item.index}
                          extraData={this._data}
                          scrollEnabled={false}
                />
            </View>
        )
    }
}

// -------------------------------------------------
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#F6F8FB',
    },
    cellContainer: {
        justifyContent: 'flex-end', alignItems: 'center',
        backgroundColor: '#F6F8FB', width: width, height: 130,
    },
    dateText: {
        fontFamily: '.PingFangSC-Regular', fontSize: 11, color: '#A6A6A6',
        marginBottom: 10,
    },
    messageView: {
        alignItems: 'flex-start', backgroundColor: 'white', borderRadius: 4,
        width: width - 20, height: 90,
    },
    payResultText: {
        fontFamily: '.PingFangSC-Regular', fontSize: 16, color: 'black',
        position: 'absolute', top: 10, left: 10,
    },
    payDetails: {
        fontFamily: '.PingFangSC-Regular', fontSize: 14, color: '#999999',
        position: 'absolute', top: 36, left: 10,
    },
});
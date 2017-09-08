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

const putinIco = require('../srcImg/TransDetails/detail_putin.png');//78*78
const outIco = require('../srcImg/TransDetails/detail_out.png');//78*78

export default class TransDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {index: 0, tradeAmount: 14, tradeDate: '09-04 23:10', tradeType: 1, payMode: 1},
                {index: 1, tradeAmount: 3, tradeDate: '03-03 21:04', tradeType: 4, payMode: 1},
                {index: 2, tradeAmount: 8, tradeDate: '08-08 12:30', tradeType: 2, payMode: 1},
            ]
        };
    }

    static navigationOptions = {
        headerTitle: '交易明细',
    };

    // 根据支付方式和交易信息，组装交易结果信息
    showMyPayInfo(tradeType, payway) {
        let paymentWay = '';
        if (tradeType === 4) {
            if (payway === 1 || payway === 4 || payway === 5 || payway === 6) {
                paymentWay = "提现到银联账户失败返还";
            } else if (payway === 2) {
                paymentWay = "提现到微信账户失败返还";
            } else if (payway === 3) {
                paymentWay = "提现到支付宝账户失败返还";
            }
        } else {
            if (tradeType === 1) { // 充值
                if (payway === 1 || payway === 4 || payway === 5 || payway === 6) {
                    paymentWay = "通过银联充值";
                } else if (payway === 2) {
                    paymentWay = "通过微信充值";
                } else if (payway === 3) {
                    paymentWay = "通过支付宝充值";
                }
            } else if (tradeType === 3) { // 提现
                if (payway === 1 || payway === 4 || payway === 5 || payway === 6) {
                    paymentWay = "提现到银联账户";
                } else if (payway === 2) {
                    paymentWay = "提现到微信账户";
                } else if (payway === 3) {
                    paymentWay = "提现到支付宝账户";
                }
            } else if (tradeType === 2) // 消费
                paymentWay = "付款码支付";
        }
        return paymentWay;
    }

    _renderItem(item) {
        let whetherIn = item.tradeType === 1 || item.tradeType === 4;

        return (
            <View style={styles.cellContainer}>
                <View style={styles.imgContainer}>
                    <Image style={{width: 40, height: 40,}} source={whetherIn ? putinIco : outIco}/>
                </View>
                <View style={{width: width - 108, height: 76,}}>
                    <Text style={styles.tradeAmountText}
                          allowFontScaling={false}>{(whetherIn ? '+' : '-') + item.tradeAmount}</Text>
                    <Text style={styles.paywayText}
                          allowFontScaling={false}>{this.showMyPayInfo(item.tradeType, item.payMode)}</Text>
                    <Text style={styles.timeText} allowFontScaling={false}>{item.tradeDate.substr(5)}</Text>
                    <Text style={styles.dateText} allowFontScaling={false}>{item.tradeDate.substr(0, 5)}</Text>
                </View>
            </View>
        )
    }

    _seperator() {
        return (
            <View style={styles.seperateLine}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.data}
                          renderItem={({item}) => this._renderItem(item)}
                          keyExtractor={(item) => item.index}
                          extraData={this.state.data}
                          ItemSeparatorComponent={this._seperator.bind(this)}
                          scrollEnabled={false}
                />
            </View>
        )
    }
}

// -------------------- 样式 -----------------------------
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white',
    },
    seperateLine: {
        width: width - 108, height: 2, backgroundColor: '#DFDFDF', alignSelf: 'flex-end',
    },
    cellContainer: {
        width: width, height: 76,
        flexDirection: 'row',
    },
    imgContainer: {
        justifyContent: 'center', alignItems: 'center', width: 108, height: 76,
    },
    tradeAmountText: {
        fontSize: 16, fontFamily: '.PingFangSC-Medium', color: '#343434',
        position: 'absolute', left: 0, top: 19,
    },
    paywayText: {
        fontSize: 12, fontFamily: '.PingFangSC-Regular', color: '#7C7C7C',
        position: 'absolute', left: 0, bottom: 19.3,
    },
    timeText: {
        fontSize: 14, fontFamily: '.PingFangSC-Regular', color: '#9A9A9A',
        position: 'absolute', right: 28, top: 19,
    },
    dateText: {
        fontSize: 14, fontFamily: '.PingFangSC-Regular', color: '#9A9A9A',
        position: 'absolute', right: 25, bottom: 19.3,
    },

});
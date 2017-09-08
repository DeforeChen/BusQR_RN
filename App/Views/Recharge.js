/**
 * Created by Defore on 2017/8/16.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions,
    Platform,
    FlatList,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity,
    Image,
} from 'react-native';
import Options from '../MyComponents/PaymentOptions'

const {width, height} = Dimensions.get('window');
const amount = require('../srcImg/Recharge/charge_bg.png');//750*382

export default class Wallet extends Component {
    static navigationOptions = {
        headerTitle: '充值', // 页面标题
        headerTintColor: '#777777',//返回按键的颜色
    };

    render() {
        return (
            <View style={styles.container}>
                {/*输入金额框*/}
                <AmountView />
                {/*请选择支付方式*/}
                <Text style={styles.PaywayText} allowFontScaling={false}>选择支付方式</Text>
                {/*支付方式列表*/}
                <Options topDistance={18}/>
            </View>
        )
    }
}

class AmountView extends Component {
    render() {
        return (
            <ImageBackground style={styles.AmountViewArea} source={amount}>
                <Text style={styles.AmountTipText} allowFontScaling={false}>请输入充值金额</Text>
                <Text style={styles.MoneyIconText} allowFontScaling={false}>¥</Text>
                <TextInput style={styles.AmountInput} allowFontScaling={false}
                           keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                           underlineColorAndroid={'transparent'}
                           placeholder={'0.0'} placeholderTextColor={'#B6BDC7'}/>
            </ImageBackground>
        )
    }
}


//---------------------------------------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', alignItems: 'flex-start',
        backgroundColor: '#FDFFFD',
    },
    /* --------- 充值金额输入框---------*/
    AmountViewArea: {
        height: 170 / 667 * height, width: width, //backgroundColor: 'yellow',
        justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10,
    },
    AmountTipText: {
        fontFamily: 'PingFangSC-Regular', fontSize: 16, color: '#B6BDC7',
        marginTop: 20, marginLeft: 50,
    },
    MoneyIconText: {
        fontFamily: 'PingFangSC-Regular', fontSize: 28, color: '#76ABF1',
        marginTop: 11, marginLeft: 53,
    },
    AmountInput: {
        fontFamily: 'PingFangSC-Regular', fontSize: 58, color: '#76ABF1',
        height: 81 / 667 * height, width: width - 150 / 375 * width, //backgroundColor: 'red',
        marginTop: -40, marginLeft: 99 / 375 * width,
    },

    /* --------- 充值金额输入框---------*/
    PaywayText: {
        fontFamily: 'PingFangSC-Regular', fontSize: 14, color: '#A3ACB8',
        marginTop: 65 / 667 * height, marginLeft: 19,
    },
});
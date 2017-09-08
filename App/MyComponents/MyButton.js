/**
 * Created by Defore on 2017/8/24.
 */
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    Platform,
} from 'react-native';
import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class MyButton extends PureComponent {
    static propTypes = {
        myOnPressed: PropTypes.func.isRequired,
        buttonStyleIndex: PropTypes.number.isRequired,
        buttonTitle: PropTypes.string.isRequired,
        marginTop: PropTypes.number.isRequired,
    };

    judgeButtonStyle() {
        switch (this.props.buttonStyleIndex) {
            case 1: // 绿色
                return [styles.GreenBtn, {marginTop: this.props.marginTop}];
                break;
            case 2: // 蓝色
                return [styles.BlueBtn, {marginTop: this.props.marginTop}];
                break;
            case 3: // 白色
                return [styles.WhiteBtn, {marginTop: this.props.marginTop}];
                break;
            case 4: // 白底绿字
                return [styles.White_GreenBtn, {marginTop: this.props.marginTop}];
                break;
        }
    }

    judgeButtonTitle() {
        switch (this.props.buttonStyleIndex) {
            case 1: // 绿色
                return styles.GreenBtnTitle;
                break;
            case 2: // 蓝色
                return styles.BlueBtnTitle;
                break;
            case 3: // 白色
                return styles.WhiteBtnTitle;
                break;
            case 4: // 白底绿字
                return styles.White_GreenBtnTitle;
                break;
        }
    }

    render() {
        return (
            <TouchableOpacity style={this.judgeButtonStyle()} onPress={this.props.myOnPressed}>
                <Text style={this.judgeButtonTitle()} allowFontScaling={false}>{this.props.buttonTitle}</Text>
            </TouchableOpacity>
        )
    }
}


const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    /* --------- 绿色按键 ---------*/
    GreenBtn: {
        justifyContent: 'center', alignItems: 'center', borderRadius: 4,
        width: width - 40, height: 50, backgroundColor: '#A8CE47',
        shadowOpacity: 0.24, shadowRadius: 10, shadowColor: '#86DA4A',
    },
    GreenBtnTitle: {
        fontFamily: 'PingFangSC-Regular', fontSize: 16, color: 'white',
    },
    /* --------- 蓝色按键 ---------*/
    BlueBtn: {
        justifyContent: 'center', alignItems: 'center', borderRadius: 100,
        width: width - 40, height: 48, backgroundColor: '#76ABF1',
    },
    BlueBtnTitle: {
        fontFamily: 'PingFangSC-Regular', fontSize: 18, color: 'white',
    },
    /* --------- 白色按键 ---------*/
    WhiteBtn: {
        justifyContent: 'center', alignItems: 'center',
        width: width - 40, height: 48, backgroundColor: 'white',
        borderWidth: 1, borderColor: '#76ABF1', borderRadius: 100,
    },
    WhiteBtnTitle: {
        fontFamily: 'PingFangSC-Regular', fontSize: 18, color: '#76ABF1',
    },
    /* --------- 白底绿字 二维码支付结果确认按键 ---------*/
    White_GreenBtn: {
        justifyContent: 'center', alignItems: 'center',
        width: width - 40, height: 48, backgroundColor: 'white',
        borderRadius: 4,
    },
    White_GreenBtnTitle: {
        fontFamily: 'PingFangSC-Regular', fontSize: 16, color: '#87AE23',
    },
});
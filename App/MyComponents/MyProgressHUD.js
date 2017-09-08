/**
 * Created by Defore on 2017/9/7.
 */

import React, {Component} from 'react';
import {
    Alert,
} from 'react-native';

import Hud from 'react-native-lyhud'

export default class MyProgressHUD extends Component {
    constructor(props) {
        super(props);
        this.state = {hudType: 'none', textOnly: false};
    }

    baseShow(msg, duration) {
        this.hud.show(msg);
        if (duration !== 0)
            this.hud.close(duration);
    }

    // 进度提示，当duration为0表示一直等待
    showLoadingMsgWithDuration(msg, duration) {
        this.setState({hudType: 'none', textOnly: false});
        this.baseShow(msg, duration);
    }

    // 弹窗提示
    showAlert(msg) {
        Alert.alert(msg);
    }

    // 错误提示
    showErrorMsgWithDuration(msg, duration) {
        this.setState({hudType: 'error', textOnly: false});
        this.baseShow(msg, duration);
    }

    //  不带图标的提示
    showTipMsgWithDuration(msg) {
        this.setState({textOnly: true});
        this.baseShow(msg, 0);
    }

    render() {
        return (
            <Hud style={{backgroundColor: '#f8f9f8',}}
                 textStyle={{color: 'black', textAlign: 'center', fontSize: 14, borderRadius: 10}}
                 backgroundTouchable={false}
                 hudType={this.state.hudType}
                 textOnly={this.state.textOnly}
                 ref={r => {
                     this.hud = r
                 }}
            />
        );
    }
}
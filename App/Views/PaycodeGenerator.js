/**
 * Created by Defore on 2017/9/5.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Button,
} from 'react-native';
import Props from 'prop-types';
import CustomNav from '../MyComponents/CustomNavBar'
import RefreshBtn from '../MyComponents/MyButton'
import QRCode from '../MyComponents/qrcodeGenerator'
import MyHUD from '../util/MyProgressHUD'

const {width, height} = Dimensions.get('window');

export default class PaycodeGenerator extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container} pointerEvents={'auto'}>
                <CustomNav nav={this.props.navigation} title={'生成付款码'} showBackText={true}
                           showRightText={false} rightTitle={''} rightNavName={''}/>
                <QRView showLoading={(info,duration)=>{this.myHUD.showLoadingMsgWithDuration(info,duration)}}
                        showAlert={(msg)=>{this.myHUD.showAlert(msg)}}
                />
                <RefreshBtn marginTop={20} buttonStyleIndex={4} buttonTitle={'刷新付款码'} myOnPressed={() => {
                }}/>

                <MyHUD ref={m => {this.myHUD = m}} />
            </View>
        );
    }
}

//{/*<Text style={styles.tipText}>请将付款码对准摄像头区域</Text>*/}
class QRView extends Component {
    render() {
        return (
            <View style={styles.qrContainer}>
                <Button style={{width: 20, height: 20,}} title={'qq'} onPress={()=>{this.props.showAlert('警告')}}/>
                <QRCode target={'=WHCHAZEWS'}
                        typeNum={8} size={220} correctLev={'H'}
                />
                <TouchableOpacity style={styles.rechargeBtn}
                                  onPress={() => {
                                      this.props.showLoading('成功了吗成功了吗成功了吗成功了吗',1500);
                                  }}>
                    <Text style={styles.btnTitle} allowFontScaling={false}>
                        {'前往我的钱包去充值'}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

// -------------------- 样式 -----------------------------
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#A8CE47', alignItems: 'center',
    },
    qrContainer: {
        justifyContent: 'center', alignItems: 'center', marginTop: 80, borderRadius: 4,
        width: width - 40, height: width - 40, backgroundColor: 'white',
    },
    tipText: {
        fontFamily: 'PingFangSC-Regular', fontSize: 14, color: '#646464',
        marginTop: 26 / 667 * height,
    },
    rechargeBtn: {
        width: width - 40, height: (width - 40 - 230) / 2,
        justifyContent: 'center', alignItems: 'center', marginBottom: 0,
    },
    btnTitle: {
        fontFamily: 'PingFangSC-Regular', fontSize: 13, color: '#7B82B3',
        backgroundColor: 'rgba(0,0,0,0)',
    },
});
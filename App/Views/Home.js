/**
 * Created by Defore on 2017/8/14.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    PixelRatio,
    Platform,
    Image,
} from 'react-native';

import BaseStyles from '../BaseStyles'

const {width, height} = Dimensions.get('window');
const btnHeight = 40 / 667 * height;

const userIco = require('../srcImg/首页/user_ico.png');
const busIco = require('../srcImg/首页/bus.png');
const msgIco = require('../srcImg/首页/message_ico.png');

const qrIco = require('../srcImg/首页/qr_ico.png');//52*52
const rechargIco = require('../srcImg/首页/recharge_ico.png');//54*58
const detailIco = require('../srcImg/首页/detail_ico.png');//64*58

const walletIco = require('../srcImg/首页/wallet_bg.png');//86*122
const detailBgIco = require('../srcImg/首页/detail_bg.png');//50*50

const busBgIco = require('../srcImg/首页/index_bg.png');//466*246

export default class Home extends Component {
    render() {

        return (
            <View style={styles.container}>
                <TopViewTitleArea nav={this.props.navigation}/>
                <TopViewFunction nav={this.props.navigation}/>
                <WalletView nav={this.props.navigation}/>
                <TransDetails nav={this.props.navigation}/>
                <Image style={styles.busImg} source={busBgIco}/>
            </View>
        );
    }
}

/*顶部栏 Title*/
class TopViewTitleArea extends Component {
    render() {
        let busImgWidth = 57;
        return (
            <View style={styles.topViewTitleArea}>
                {/*个人信息按键*/}
                <TouchableOpacity style={{
                    width: busImgWidth, height: busImgWidth, //backgroundColor:'red',
                    justifyContent: 'flex-end', marginLeft: 20
                }}
                                  onPress={() => {
                                      this.props.nav.navigate('PersonInfo')
                                  }}
                >
                    <Image
                        style={{width: 26, height: 26,}}
                        source={userIco}
                    />
                </TouchableOpacity>
                {/*标题*/}
                <View style={styles.titleView}>
                    <Image
                        style={{width: 24, height: 25,}}
                        source={busIco}
                    />
                    <Text style={[BaseStyles.regularFont, styles.textStyle]} allowFontScaling={false}>码上公交</Text>
                </View>
                {/*消息列表按键*/}
                <TouchableOpacity style={{
                    width: busImgWidth, height: busImgWidth, alignItems: 'flex-end',
                    justifyContent: 'flex-end', marginRight: 20
                }}
                                  onPress={() => {
                                      this.props.nav.navigate('MsgDetail')
                                  }}>
                    <Image
                        style={{width: 24, height: 25,}}
                        source={msgIco}/>
                </TouchableOpacity>
            </View>
        )
    }
}

/* 顶部栏 - 功能区*/
class TopViewFunction extends Component {
    static propTypes: {
        nav: React.PropTypes.func.isRequired,
    };

    render() {
        return (
            <View style={styles.functionArea}>
                {/*生成二维码 按键*/}
                <TouchableOpacity style={styles.functionBtn}
                                  onPress={() => {
                                      this.props.nav.navigate('QRGenerator');
                                  }}>
                    <Image style={{width: 26, height: 26,}} source={qrIco}/>
                    <Text style={[BaseStyles.regularFont, {fontSize: 12, color: '#232323'}]}
                          allowFontScaling={false}>
                        生成付款码
                    </Text>
                </TouchableOpacity>
                {/*充值 按键*/}
                <TouchableOpacity style={styles.functionBtn}
                                  onPress={() => {
                                      this.props.nav.navigate('Recharge')
                                  }}>
                    <Image style={{width: 27, height: 29,}} source={rechargIco}/>
                    <Text style={[BaseStyles.regularFont, {fontSize: 12, color: '#232323'}]} allowFontScaling={false}>
                        充值
                    </Text>
                </TouchableOpacity>
                {/*交易明细 按键*/}
                <TouchableOpacity style={styles.functionBtn}
                                  onPress={() => {
                                      this.props.nav.navigate('TransDetail')
                                  }}>
                    <Image style={{width: 32, height: 29,}} source={detailIco}/>
                    <Text style={[BaseStyles.regularFont, {fontSize: 12, color: '#232323'}]}
                          allowFontScaling={false}>
                        交易明细
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

/* 钱包余额 - 功能区*/
class WalletView extends Component {
    static propTypes: {
        walletBalance: React.PropTypes.string.isRequired,
        nav: React.PropTypes.func.isRequired,
    };

    static defaultProps = {
        walletBalance: '0.0'
    };

    render() {
        let walletImgW = 43 / 375 * width;
        let walletImgH = 61 / 667 * height;

        return (
            <TouchableOpacity style={styles.walletView}
                              onPress={() => {
                                  this.props.nav.navigate('Wallet')
                              }}>
                <View style={styles.walletViewContent}>
                    {/*左侧 显示 钱包*/}
                    <View style={styles.wallertTip}>
                        <Image style={{width: walletImgW, height: walletImgH, marginTop: 14,}} source={walletIco}/>
                        <Text style={[BaseStyles.mediumFont, {
                            fontSize: 18,
                            color: '#5379AB',
                            marginTop: 14,
                            marginLeft: 10,
                        }]}
                              allowFontScaling={false}>
                            钱包余额
                        </Text>
                    </View>
                    {/*右侧 显示 金额*/}
                    <Text style={[BaseStyles.regularFont, {fontSize: 24, color: '#ffffff', marginRight: 10,}]}
                          allowFontScaling={false}>
                        ¥{'  ' + this.props.walletBalance}
                    </Text>
                </View>
                {/*白色分割线*/}
                <View style={{width: width - 40, height: 0.5, backgroundColor: '#B8D7FF',}}/>
                <View style={{height: btnHeight, justifyContent: 'center',}}>
                    <Text style={[BaseStyles.regularFont, {fontSize: 14, color: '#E0EEFF',}]} allowFontScaling={false}>
                        进入我的钱包
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

/* 交易明细 - 功能区*/
class TransDetails extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.transDetailsView}
                              onPress={() => {
                                  this.props.nav.navigate('TransDetail')
                              }}>
                {/*顶部的交易明细提示及图标*/}
                <View style={styles.transDetailTip}>
                    <Image style={{width: 25, height: 25}} source={detailBgIco}/>
                    <Text
                        style={[BaseStyles.mediumFont, {fontSize: 18, color: '#799530', marginLeft: 11}]}
                        allowFontScaling={false}>
                        交易明细
                    </Text>
                </View>
                {/*交易明细信息*/}
                <View style={styles.transDetailInfo}>
                    <Text style={[BaseStyles.regularFont, {fontSize: 16, color: '#ffffff',}]}
                          allowFontScaling={false}>
                        通过支付宝充值
                    </Text>
                    <Text style={[BaseStyles.regularFont, {fontSize: 12, color: '#ffffff', marginTop: 6,}]}
                          allowFontScaling={false}>
                        2017-05-15 15:42
                    </Text>
                </View>
                {/*白色分割线*/}
                <View style={{width: width - 40, height: 0.5, backgroundColor: '#D2F47D',}}/>
                <View style={{height: btnHeight, justifyContent: 'center',}}>
                    <Text style={[BaseStyles.regularFont, {fontSize: 14, color: '#D0F66D',}]} allowFontScaling={false}>
                        查看更多
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

//---------------------------------------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    /* --------- 顶部栏 ---------*/
    topViewTitleArea: {
        backgroundColor: '#FFD400',
        flexDirection: 'row',//从左往右
        justifyContent: 'space-between', alignItems: 'flex-end',
        height: Platform.OS === 'ios' ? 57 / 667 * height : 57 / 667 * height - 20, width: width,
    },
    // 标题
    titleView: {
        width: 94, height: 25,
        flexDirection: 'row',
        justifyContent: 'space-between', alignItems: 'center',
    },
    textStyle: {
        color: '#232323',
        fontSize: 18,
    },
    // 顶部功能区
    functionArea: {
        backgroundColor: '#FFD400',
        flexDirection: 'row',
        justifyContent: 'space-around', alignItems: 'flex-end',
        height: 98 / 667 * height, width: width,
    },
    functionBtn: {
        justifyContent: 'space-between', alignItems: 'center',
        height: 26 + 6 + 17, width: 80,
        marginBottom: 18,
    },

    /* ------------ 钱包余额显示 --------------*/
    walletView: {
        backgroundColor: '#76ABF1',
        height: 129 / 667 * height, width: width - 20,
        alignItems: 'center',
        marginTop: 16,
        borderRadius: 4,
        shadowColor: '#76ABF1', shadowOpacity: 0.28, shadowRadius: 10,
    },
    walletViewContent: {
        height: 87 / 667 * height, width: width - 20,
        flexDirection: 'row',
        justifyContent: 'space-between', alignItems: 'center',
    },
    wallertTip: {
        height: 87 / 667 * height, width: 130,
        flexDirection: 'row',
        justifyContent: 'flex-start', alignItems: 'flex-start',
    },

    /* ------------ 交易明细显示 --------------*/
    transDetailsView: {
        backgroundColor: '#A8CE47',
        height: 172 / 667 * height, width: width - 20,
        alignItems: 'center',
        marginTop: 16,
        borderRadius: 4,
        shadowColor: '#86DA4A', shadowOpacity: 0.24, shadowRadius: 10,
    },
    transDetailTip: {
        height: 56 / 667 * height, width: width - 32 * 2,
        flexDirection: 'row',
        justifyContent: 'flex-start', alignItems: 'center',
    },
    transDetailInfo: {
        height: 74 / 667 * height, width: width - 63 * 2,
    },

    // 底部背景图
    busImg: {
        height: 123 / 667 * height, width: 233 / 375 * width,
        marginTop: 32 * height / 667,
    },
});
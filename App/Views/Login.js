/**
 * Created by Defore on 2017/8/16.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Platform,
    Image,
} from 'react-native';

import baseStyle from '../BaseStyles'
import MyButton from '../MyComponents/MyButton'
import MyHud from '../MyComponents/MyProgressHUD'
import RegEx from '../util/RegEx'

import '../Network/MyURL'
import SysReqUtil from '../Network/SysHttpRequest'
import LoginModel from '../Network/LoginModel'

const {width, height} = Dimensions.get('window');

const loginBgIco = require('../srcImg/Login/login_bg.png');//750*350
const phoneIco = require('../srcImg/Login/num_default.png');//28*44
const phoneSelIco = require('../srcImg/Login/num_selected.png');//48*44

const veriCodeIco = require('../srcImg/Login/code_default.png');//44*44
const veriCodeSelIco = require('../srcImg/Login/code_selected.png');//44*44

const busBgIco = require('../srcImg/首页/index_bg.png');//466*246

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNum: '',
            veriCode: '',
        };
    }

    static navigationOptions = {
        header: null,
    };

    // 登录或注册
    registerOrLogin() {
        let phoneNum = this.state.phoneNum;
        let code = this.state.veriCode;
        SysReqUtil.request(URL.LOGIN_URL, LoginModel.loginReqModel(phoneNum, code),
            () => {
                this.hud.showLoadingMsgWithDuration('登录中,请稍候...', 0);
            },
            (retData) => { // 成功回调
                this.hud.showTipMsgWithDuration(retData.header.retDesc);
            },
            (errMsg) => {
                this.hud.showTipMsgWithDuration(errMsg);
            }
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={{width: width, height: 169 / 667 * height, backgroundColor: 'white'}}
                       source={loginBgIco}/>
                <PhoneNoInput onEndPhoneInput={(phone) => {
                    this.setState({phoneNum: phone});
                }}/>
                <View style={{width: width - 42, height: 1, backgroundColor: '#E6E6E6',}}/>
                <VeriCodeInput onEndVeriCodeInput={(code) => {
                    this.setState({veriCode: code})
                }}/>
                <MyButton buttonTitle={'注册/登录'}
                          marginTop={32}
                          buttonStyleIndex={1}
                          myOnPressed={() => {
                              if (RegEx.isPhoneNumber(this.state.phoneNum) === true && this.state.phoneNum.length === 11) {
                                  if (RegEx.isInteger(this.state.veriCode) === true && this.state.veriCode.length === 6) {
                                      console.log('验证码输入正确');
                                      // 大有可为
                                      this.registerOrLogin();

                                  } else {
                                      this.hud.showTipMsgWithDuration('请输入正确的验证码');
                                  }
                              } else {
                                  this.hud.showTipMsgWithDuration('请输入正确的手机号!');
                              }
                          }}
                />

                <MyHud ref={r => {
                    this.hud = r
                }}/>
            </View>
        );
    }
}


/*  登录 - 输入手机号 */
class PhoneNoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneImg: phoneIco,
            phoneNumber: '',
        };
    }

    // 若输入为空，就恢复成默认
    checkWhetherEmptyInput() {
        if (this.state.phoneNumber.length === 0)
            this.setState({phoneImg: phoneIco});
    }

    render() {
        return (
            <View style={styles.inputView}>
                <View style={styles.icoContainterView}>
                    <Image style={{width: 13.5, height: 22}} source={this.state.phoneImg}/>
                </View>
                <TextInput style={[baseStyle.regularFont, styles.phoneNoInput]}
                           underlineColorAndroid={'transparent'} maxLength={11}
                           placeholder={'请输入手机号'} placeholderTextColor={'#D5D5D5'}
                           keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                           returnKeyType={'done'}
                           onFocus={() => {
                               this.setState({phoneImg: phoneSelIco})
                           }}
                           onEndEditing={() => {
                               this.checkWhetherEmptyInput();
                           }}
                           onChangeText={(input) => {
                               this.setState({phoneNumber: input});
                               if (input.length === 11) {//表示完成输入
                                   this.props.onEndPhoneInput(input);
                                   console.log('完成输入');
                               }
                           }}
                />
            </View>
        )
    }
}

/*  登录 - 输入验证码 */
class VeriCodeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            veriCodeImg: veriCodeIco,
            veriCode: '',
            whetherSending: false,
            counter: 5,
        };
    }

    // 若输入为空，就恢复成默认
    checkWhetherEmptyInput() {
        if (this.state.veriCode.length === 0)
            this.setState({veriCodeImg: veriCodeIco});
    }

    // 定时器
    onPressSendVeriCode() {
        if (!this.state.whetherSending) {
            this.timer = setInterval(() => {
                if (this.state.counter === 0) {
                    this.setState({whetherSending: false});
                    this.setState({counter: 60});
                    this.timer && clearInterval(this.timer);// 移除计数器
                } else
                    this.setState({counter: this.state.counter - 1});
            }, 1000);

            this.setState({whetherSending: true});
        }
    }

    render() {
        return (
            <View style={styles.inputView}>
                <View style={styles.icoContainterView}>
                    <Image style={{width: 22, height: 22}} source={this.state.veriCodeImg}/>
                </View>
                <TextInput style={[baseStyle.regularFont, styles.veriCodeInput]}
                           underlineColorAndroid={'transparent'} maxLength={6}
                           placeholder={'请输入验证码'} placeholderTextColor={'#D5D5D5'}
                           keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                           returnKeyType={'done'}
                           onFocus={() => {
                               this.setState({veriCodeImg: veriCodeSelIco})
                           }}
                           onEndEditing={() => {
                               this.checkWhetherEmptyInput()
                           }}
                           onChangeText={(input) => {
                               this.setState({veriCode: input});
                               if (input.length === 6) {//表示完成输入
                                   this.props.onEndVeriCodeInput(input);
                                   console.log('完成验证码输入');
                               }
                           }}
                />
                <View style={{width: 1, height: 34 / 667 * height, backgroundColor: '#D9D9D9',}}/>
                <TouchableOpacity style={styles.sendCodeArea}
                                  onPress={this.onPressSendVeriCode.bind(this)}>
                    <Text style={[{color: this.state.whetherSending ? '#D5D5D5' : '#76ABF1',}, styles.sendCodeText,]}
                          allowFontScaling={false}>
                        {this.state.whetherSending ? '再次发送(' + this.state.counter + 's)' : '发送验证码'}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


//---------------------------------------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', alignItems: 'center',
        backgroundColor: '#F7F7F7',
    },
    /* --------- 手机号输入 ---------*/
    icoContainterView: {
        width: 63, height: 61,
        justifyContent: 'center', alignItems: 'center',
    },

    inputView: {
        flexDirection: 'row', backgroundColor: 'white',
        justifyContent: 'flex-start', alignItems: 'center',
        height: 61, width: width,
    },
    phoneNoInput: {
        fontSize: 16, color: '#76ABF1',
        width: width - 63 - 20, height: 61,
    },
    /* --------- 验证码输入 ---------*/
    veriCodeInput: {
        fontSize: 16, color: '#76ABF1',
        width: 182 / 375 * width, height: 61,//backgroundColor:'red',
    },
    /* --------- 验证码发送按键 ---------*/
    sendCodeArea: {
        justifyContent: 'center', alignItems: 'center', marginLeft: 8,
        width: 100 / 375 * width, height: 61,
    },
    sendCodeText: {
        fontSize: 14, width: 100, height: 61, textAlign: 'center', textAlignVertical: 'center',
    },
});
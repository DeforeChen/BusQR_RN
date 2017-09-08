/**
 * Created by Defore on 2017/8/24.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Alert,
    TextInput,
    Platform,
    Image,
    ImageBackground,
} from 'react-native';
import Props from 'prop-types';

import baseStyle from '../BaseStyles';
import MyButton from '../MyComponents/MyButton';
import CustomNavBar from '../MyComponents/CustomNavBar';

const certiBgIco = require('../srcImg/Certi/login_bg.png');//750*350
const avadar = require('../srcImg/Certi/id_confirm.png');//188*160

const {width, height} = Dimensions.get('window');

export default class Certify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            realName: '',
            idNum: '',
        };
    }

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.topViewArea} source={certiBgIco}>
                    <CustomNavBar nav={this.props.navigation} showBackText={false} title={'身份认证'} showRightText={false}
                                  rightTitle={''} rightNavName={''}/>
                    <Image style={{width: 110, height: 94, marginTop: 55 / 667 * height}} source={avadar}/>
                    <Text style={[baseStyle.regularFont, styles.tipText]} allowFontScaling={false}>
                        您需要通过实名认证才可使用其他功能
                    </Text>
                </ImageBackground>
                <InputArea onEndInput={(text) => {
                    this.setState({realName: text})
                }}
                           placeholder={'请输入您的真实姓名'}
                           maxLen={6}
                />
                <View style={{width: width - 42, height: 1, backgroundColor: '#E6E6E6',}}/>
                <InputArea onEndInput={(text) => {
                    this.setState({idNum: text})
                }}
                           placeholder={'请输入您的身份证号码'}
                           maxLen={18}
                />


                <MyButton buttonStyleIndex={1} buttonTitle={'认证'}
                          marginTop={113 / 667 * height}
                          myOnPressed={() => {
                              console.log('按下认证按键')
                          }}
                />

            </View>
        )
    }
}

/*-----------信息输入框----------------*/
class InputArea extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    static propTypes = {
        onEndInput: Props.func.isRequired,
        placeholder: Props.string.isRequired,
        maxLen: Props.number.isRequired,
    };

    // 若输入为空，就恢复成默认
    checkWhetherEmptyInput() {
        this.props.onEndInput(this.state.text);
    }

    render() {
        return (
            <View style={styles.inputView}>
                <TextInput style={[baseStyle.regularFont, styles.textInput]}
                           placeholder={this.props.placeholder}
                           placeholderTextColor={'#D5D5D5'}
                           underlineColorAndroid={'transparent'}
                           maxLength={this.props.maxLen}
                           onEndEditing={() => {
                               this.checkWhetherEmptyInput()
                           }}
                           onChangeText={(text) => {
                               this.setState({text: text})
                           }}
                />
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
    /* --------- 上半部 ---------*/
    topViewArea: {
        backgroundColor: 'white',
        height: 278 / 667 * height, width: width,//
        justifyContent: 'flex-start', alignItems: 'center',
    },
    /* --------- 提示信息 ---------*/
    tipText: {
        fontSize: 12, color: 'white', backgroundColor: 'rgba(0,0,0,0)',
        width: width, height: 18, marginTop: 8, textAlign: 'center',
    },
    /* --------- 输入区域 ---------*/
    inputView: {
        backgroundColor: 'white',
        justifyContent: 'flex-start', alignItems: 'center',
        height: 61, width: width,
    },

    textInput: {
        fontSize: 14, color: '#76ABF1', textAlign: 'center',
        width: width, height: 61,
    },
});
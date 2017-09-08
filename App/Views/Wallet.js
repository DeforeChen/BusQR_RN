/**
 * Created by Defore on 2017/8/15.
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

import Props from 'prop-types'
import MyButton from '../MyComponents/MyButton';
import CustomNavBar from '../MyComponents/CustomNavBar';

const {width, height} = Dimensions.get('window');
const halfOval = require('../srcImg/MyWallet/wallet_bg_top.png');//750*80

export default class Wallet extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        let walletOvalH = 40 / 667 * height;
        return (
            <View style={styles.container}>
                <View style={styles.topViewArea}>
                    <CustomNavBar nav={this.props.navigation} title={'我的钱包'} showBackText={false}
                                  showRightText={true} rightTitle={'明细'} rightNavName={'test'}/>
                </View>
                <Image style={{width: width, height: walletOvalH,}}
                       source={halfOval}/>
                <OvalInfo />
                <MyButton buttonStyleIndex={2} buttonTitle={'充值'}
                          marginTop={67 / 667 * height}/>
                <MyButton buttonStyleIndex={3} buttonTitle={'提现'}
                          marginTop={19 / 667 * height}/>
            </View>
        )
    }
}

class OvalInfo extends Component {
    render() {
        return (
            <View style={styles.OvalContainer}>

            </View>
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
    /* --------- 上半部 ---------*/
    topViewArea: {
        backgroundColor: '#76ABF1',
        height: 175 / 667 * height, width: width,
        justifyContent: 'flex-start', alignItems: 'center',
    },
    /* --------- 圆圈内的信息 ---------*/
    OvalContainer: {
        borderRadius: 200, backgroundColor: '#ffffff', marginTop: -56,
        width: 227 / 375 * width, height: 227 / 375 * width,
        shadowRadius: 10, shadowColor: '#D9E9FF', shadowOpacity: 1,
        elevation: 10,
    },
});
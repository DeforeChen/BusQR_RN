/**
 * Created by Defore on 2017/8/29.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

//图片
const unionpayIco = require('../srcImg/Recharge/unionpay_ico.png');//60*38
const alipayIco = require('../srcImg/Recharge/alipay.png');//75*72
const wechatpayIco = require('../srcImg/Recharge/wechatpay.png');//78*72
const markedIco = require('../srcImg/Recharge/selected.png');//44*44
const unmarkedIco = require('../srcImg/Recharge/sign_default.png');//44*44

const data = [{image: unionpayIco, width: 30, height: 20, title: '银联支付', index: 0},
    {image: wechatpayIco, width: 26, height: 24, title: '微信支付', index: 1},
    {image: alipayIco, width: 25, height: 24, title: '支付宝支付', index: 2},
];
export default class PaymentOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedIndex: -1};
    }

    _data = [{image: unionpayIco, width: 30, height: 20, title: '银联支付', index: 0},
        {image: wechatpayIco, width: 26, height: 24, title: '微信支付', index: 1},
        {image: alipayIco, width: 25, height: 24, title: '支付宝支付', index: 2},
    ];


    _renderItem(item) {
        let whetherSel = (this.state.selectedIndex === item.index);
        return (
            <TouchableOpacity style={[styles.optionContainer, {backgroundColor: whetherSel ? '#EAF3FF' : '#FDFFFD'}]}
                              activeOpacity={1}
                              onPress={() => {
                                  if (whetherSel === false)
                                      this.setState({selectedIndex: item.index})
                              }}>
                <View style={styles.imageContainer}>
                    <Image style={{width: item.width, height: item.height}} source={item.image}/>
                </View>
                <Text style={styles.text} allowFontScaling={false}>{item.title}</Text>
                <Image style={{width: 20, height: 20, marginRight: 10}} source={whetherSel ? markedIco : unmarkedIco}/>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{height: 126, width: width - 40, alignSelf: 'center', marginTop:this.props.topDistance}}>
                <FlatList data= {this._data}//{this.fetchData()}
                          renderItem={({item}) => this._renderItem(item)}
                          keyExtractor={(item) => item.index}
                          scrollEnabled={false}
                          extraData={this.state}
                />
            </View>
        );
    }
}

// --------------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', alignItems: 'flex-start',
        backgroundColor: '#FDFFFD',
    },
    optionContainer: {
        height: 42, width: width - 40, backgroundColor: 'white', borderRadius:4,
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    },
    imageContainer: {
        justifyContent: 'center', alignItems: 'center', width: 60, height: 42,
    },
    text: {
        position: 'absolute', left: 60,
        fontSize: 15, fontFamily: 'PingFangSC-Regular', color: '#858D97',
    }
});
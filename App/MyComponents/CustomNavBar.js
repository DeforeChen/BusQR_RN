/**
 * Created by Defore on 2017/8/25.
 */
import React, {Component,PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native';
import Props from 'prop-types'

const backIco = require('../srcImg/MyWallet/back_white.png');//18*32
const {width} = Dimensions.get('window');

export default class CustomNavBar extends PureComponent {
    static propTypes = {
        nav: Props.object.isRequired,
        title: Props.string.isRequired,
        showBackText: Props.bool.isRequired,
        showRightText: Props.bool.isRequired,
        rightTitle: Props.string.isRequired,
        rightNavName: Props.string.isRequired,
    };

    render() {
        return (
            <View style={styles.topViewTitleArea}>
                <TouchableOpacity style={styles.leftBtn}
                                  onPress={() => {
                                      this.props.nav.goBack();
                                  }}>
                    <Image style={{width: 8.8, height: 15.6}} source={backIco}/>
                    <Text style={{fontSize: 16, fontFamily: 'PingFangSC-Regular', color: 'white', marginLeft: 9.2}}
                          allowFontScaling={false}>
                        {this.props.showBackText ? '返回' : ''}
                        {/*{typeof this.props.nav}*/}
                    </Text>
                </TouchableOpacity>
                <Text style={{fontSize: 18, fontFamily: 'PingFangSC-Regular', color: 'white',}}
                      allowFontScaling={false}>
                    {this.props.title}
                </Text>
                <TouchableOpacity style={styles.RightBtn}
                                  disabled={!this.props.showRightText}
                                  onPress={() => {
                                      this.props.nav.navigate(this.props.rightNavName)
                                  }}>
                    <Text style={{fontSize: 16, fontFamily: 'PingFangSC-Regular', color: '#ffffff',}}
                          allowFontScaling={false}>
                        {this.props.rightTitle}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

//---------------------------------------------
const styles = StyleSheet.create({
    topViewTitleArea: {
        flexDirection: 'row',//从左往右
        justifyContent: 'space-between', alignItems: 'center',
        height: 25, width: width - 40, marginTop: 32, backgroundColor:'rgba(0,0,0,0)',
    },

    leftBtn: {
        width: 60, height: 25, flexDirection: 'row',
        justifyContent: 'flex-start', alignItems: 'center',
    },
    RightBtn: {
        width: 60, height: 25, flexDirection: 'row-reverse',
        justifyContent: 'flex-start', alignItems: 'center',
    },
});
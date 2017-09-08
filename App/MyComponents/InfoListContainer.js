/**
 * Created by Defore on 2017/8/25.
 */
import React, {Component,PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    Image,
    TouchableOpacity,
} from 'react-native';

import Props from 'prop-types';
const {width} = Dimensions.get('window');

export default class InfoBar extends PureComponent {
    static propTypes = {
        image: Props.number.isRequired,
        imgWidth: Props.number.isRequired,
        imgHeight: Props.number.isRequired,
        title: Props.string.isRequired,
        info: Props.string.isRequired,
        touchAble: Props.bool.isRequired,
        marginTop: Props.number.isRequired,
        showUnderLine: Props.bool.isRequired, // 是否有下划线
        barType: Props.number.isRequired, // 0表示顶部bar，有上圆角，1表示无圆角，2表示下部有圆角 ,3表示上下都有圆角
    };

    static defaultProps = {
        touchAble: false,
    };

    fetchCornerRadius() {
        if (this.props.barType === 0) { // 顶部
            return {marginTop: this.props.marginTop, borderTopLeftRadius: 4, borderTopRightRadius: 4}
        } else if (this.props.barType === 1) { // 底部
            return {marginTop: this.props.marginTop,}
        } else if (this.props.barType === 2) { //
            return {marginTop: this.props.marginTop, borderBottomLeftRadius: 4, borderBottomRightRadius: 4,}
        } else if (this.props.barType === 3) { //
            return {marginTop: this.props.marginTop, borderRadius:4}
        }
    }

    render() {
        return (
            <View style={[styles.container, this.fetchCornerRadius()]}>
                <TouchableOpacity style={styles.barArea}
                                  disabled={!this.props.touchAble}>
                    <View style={styles.imageContainer}>
                        <Image style={{width: this.props.imgWidth, height: this.props.imgHeight}}
                               source={this.props.image}/>
                    </View>
                    <Text style={styles.titileStyle} allowFontScaling={false}>{this.props.title}</Text>
                    <Text style={styles.infoStyle} allowFontScaling={false}>{this.props.info}</Text>
                </TouchableOpacity>
                <View style={{
                    width: width - 60, height: 0.5,
                    backgroundColor: this.props.showUnderLine ? '#E2E4EC' : 'white'
                }}/>
            </View>

        )
    }
}

//---------------------------------------------
const styles = StyleSheet.create({
    container: {
        width: width - 40, height: 55, backgroundColor: 'white',
        justifyContent: 'flex-start', alignItems: 'center',
    },

    barArea: {
        flexDirection: 'row',
        justifyContent: 'space-between', alignItems: 'center',
        width: width - 40, height: 54,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    imageContainer: {
        justifyContent: 'center', alignItems: 'center',
        width: 39, height: 54,
    },
    titileStyle: {
        position: 'absolute', left: 39,
        fontFamily: 'PingFangSC-Regular', color: '#4F4F4F', fontSize: 14,
        width: 56,
    },
    infoStyle: {
        marginRight: 27,
        fontFamily: 'PingFangSC-Regular', color: '#B0B0B0', fontSize: 14,
    },
});
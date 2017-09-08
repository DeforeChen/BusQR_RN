/**
 * Created by Defore on 2017/9/6.
 */

import {
    View,
    Image,
} from 'react-native';
import React, {Component} from 'react';
import Props from 'prop-types';
import qrcode from './qrcodeUtil';

export default class QRcode extends Component {
    static propTypes = {
        size: Props.number.isRequired,
        typeNum: Props.number.isRequired,
        correctLev: Props.string.isRequired,
        target: Props.string.isRequired,
    };

    getQRcodeImage() {
        const {target} = this.props;
        if (!target) {
            return (
                <View></View>
            )
        }
        let generator = qrcode(this.props.typeNum, this.props.correctLev, true);
        let size = this.props.size;
        generator.addData(target);
        generator.make();
        let base = generator.getBase64Image();

        return (
            <View>
                <Image source={{uri: base}} style={{height: size, width: size}}/>
            </View>
        )
    }

    render() {
        return (
            <View>
                {this.getQRcodeImage.bind(this)()}
            </View>
        )
    }
}
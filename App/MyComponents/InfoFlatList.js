/**
 * Created by Defore on 2017/8/29.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
} from 'react-native';
import Props from 'prop-types';
const {width} = Dimensions.get('window');
export default class InfoFlatList extends Component {
    static propTypes = {
        dataArray: Props.array.isRequired,
        listWidth: Props.number.isRequired,
        listHeight: Props.number.isRequired,
        marginTop: Props.number.isRequired,
    };

    static defaultProps = {
        srcData: [
            {img: '', imgWidth: 20, imgHeight: 20, title: 'test', info: '', touchAble: false, index: 0}
        ]
    };

    _renderItem(item) {
        return (
            <TouchableOpacity style={styles.cell}
                              disabled={!item.touchAble}>
                <View style={styles.imageContainer}>
                    <Image style={{width: item.imgWidth, height: item.imgHeight}}
                           source={item.img}/>
                </View>
                <Text style={styles.titileStyle} allowFontScaling={false}>{item.title}</Text>
                <Text style={styles.infoStyle} allowFontScaling={false}>{item.info}</Text>
            </TouchableOpacity>
        )
    }

    _seperator() {
        return (
            <View style={{width: width - 60, height: 2, backgroundColor: '#E2E4EC', alignSelf: 'center'}}/>
        )
    }

    render() {
        return (
            <View style={[styles.container, {
                width: this.props.listWidth,
                height: this.props.listHeight,
                marginTop: this.props.marginTop,
            }]}>
                <FlatList data={this.props.dataArray}
                          renderItem={({item}) => this._renderItem(item)}
                          keyExtractor={(item) => item.index}
                          ItemSeparatorComponent={this._seperator.bind(this)}
                          scrollEnabled={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', borderRadius: 4,
        justifyContent: 'flex-start', alignItems: 'center',
    },
    cell: {
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
    },
    infoStyle: {
        marginRight: 27,
        fontFamily: 'PingFangSC-Regular', color: '#B0B0B0', fontSize: 14,
    },
});
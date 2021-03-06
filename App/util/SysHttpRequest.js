/**
 * Created by Defore on 2017/9/11.
 */

import React, {Component} from 'react';


export default class SysHttpRequest extends Component {
    /*
     * url 网络链接地址
     * bodyParams 请求的JSON数据
     * loadCallBack 请求发送中回调,可以加一些loading效果
     * callBackSuccess 成功回调
     * callBackError 失败回调
     */
    static request(url, bodyParams, loadCallBack, callBackSuccess, callBackError) {
        loadCallBack();
        console.log('上送数据body = ' + JSON.stringify(bodyParams));

        fetch(url, {
            method: 'POST',  //如果为GET方式，则不要添加body，否则会出错    GET/POST
            body: JSON.stringify(bodyParams),
        })
            .then((response) => response.json())//将数据转成json,也可以转成 response.text、response.html
            .then((responseJson) => {//获取转化后的数据responseJson、responseText、responseHtml
                //成功回调
                if (responseJson.header.retCode === '0') {
                    console.log('调用成功返回的信息 = ' + JSON.stringify(responseJson.body));
                    callBackSuccess(responseJson.body); //JSON.stringify()避免出现烦人的[object object]
                } else {
                    console.log('调用失败返回的信息 = ' + JSON.stringify(responseJson.header.retDesc));
                    callBackError(responseJson.header.retDesc);
                }

            })
            .catch((error) => {
                console.log('数据请求失败得到错误信息 = '+error.message);
                callBackError(error.message);
            });
    }
}
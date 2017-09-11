/**
 * Created by Defore on 2017/8/24.
 */

import './RequestHeader'

const loginReqModel = (phoneNum, veriCode, deviceID) => {
    const realHeader = GLOBAL.REQUEST_HEADER;
    realHeader.deviceId = deviceID;
    console.log('带设备ID的报文头' + JSON.stringify(realHeader));

    return {
        header: realHeader,
        body: {
            telno: phoneNum,
            verifyCode: veriCode,
            type: '1',
            password: '',
        },
    }
};


export default {
    loginReqModel,
};
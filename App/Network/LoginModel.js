/**
 * Created by Defore on 2017/8/24.
 */

import './RequestHeader'

const loginReqModel = (phoneNum,veriCode)=>{
    return {
        header:GLOBAL.REQUEST_HEADER,
        body:{
            telno:phoneNum,
            verifyCode:veriCode,
            type:'1',
            password:'',
        },
    }
};


export default {
    loginReqModel,
};
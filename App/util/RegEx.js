/**
 * Created by Defore on 2017/9/7.
 */

import React, {Component} from 'react';

// 是否电话号码
const isPhoneNumber = (phoneNumber) => {
    const reg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
    return reg.test(phoneNumber);
};
// 是否中文
const isChinese = (char) => {
    const reg_A = /^[\u4e00-\u9fa5]*$/;
    const reg_B = /^[\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b]$/;
    return reg_A.test(char) || reg_B.test(char);
};

// 是否非特殊字符
const isCommenChar = (char) => {
    const reg = /^[a-zA-Z0-9_ -/:;()$&@".,?!'{}#%^*+=\\|~<>€£¥•]+$/;
    return reg.test(char);
};
// 是否身份证号
const isCertID = (char) => {
    const reg = /^(\d{14}|\d{17})(\d|[xX])$/;
    return reg.test(char);
};
// 是否金额
const isAmount = (char) => {
    const reg = /^[0-9]+(.[0-9]{1,2})?$/;
    return reg.test(char);
};
// 是否全是数字
const isInteger = (char) => {
    const reg = /^[0-9]*$/;
    return reg.test(char);
};


// 是否含有数字和小数点
const isFloat = (char) => {
    const reg = /^\d+(.\d+)?$/;
    return reg.test(char);
};

export default {
    isPhoneNumber,
    isCommenChar,
    isInteger,
    isFloat,
    isCertID,
    isAmount,
};
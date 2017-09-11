/**
 * Created by Defore on 2017/8/24.
 */

const host = 'http://218.66.36.59:7996/BikeAppService/';

global.URL = {
    LOGIN_URL: host + 'app/user/login', //登录
    LOGOUT_URL: host + 'app/user/logout', //登出
    GET_BAR: host + 'app/sms/send', //获取验证码
    TOP_UP: host + 'app/account/recharge',//充值
    TOPUP_DEPOSIT: host + 'app/account/sign',//充值押金
    FETCH_DEPOSIT: host + 'app/account/fetch',//提现
    REAL_NAME: host + 'app/account/certificate',//实名认证
    QUERY_TRANSDETAIL: host + 'app/query/tradeDetail',//交易明细查询
    USER_INFO: host + 'app/account/info',//-账户信息查询
};
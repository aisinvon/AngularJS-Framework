/**
 * Created by FWX on 2014/9/19.
 */
define(function () {
    'use strict';

    // 配置
    var config = {
        // 开发环境：开发DEV，线上PROD
        environment: 'DEV',
        // 跨域获取API接口数据的代理: DEV环境取第一个值，PROD环境取第二个值
        apiProxy: ['http://', 'http://'],
        apiList: {}
    };

    // 具体接口
    var api = {
        brandList: {
            // 类型
            type: 'get',
            // 接口：DEV环境取第一个值，PROD环境取第二个值
            url: [
                'api/open/car-type-basic/get-serial-base-info.htm?serialId=1010',
                'api/open/car-type-basic/get-serial-base-info.htm?serialId=1010'
            ]
        }
    };

    // 根据不同开发环境切换接口
    if(config.environment === 'DEV'){
        config.apiProxy = config.apiProxy[0];
    }else{
        config.apiProxy = config.apiProxy[1];
    }

    // 根据不同开发环境调整config
    for(var p in api){
        if(api.hasOwnProperty(p)){
            // 调整api路径
            if(config.environment === 'DEV'){
                api[p].url = config.apiProxy + api[p].url[0];
            }else{
                api[p].url = config.apiProxy + api[p].url[1];
            }
            // 把对象api赋值给config.apiList对象
            config.apiList[p] = api[p];
        }
    }

    return config;
});
/**
 * Created by Defore on 2017/4/7.
 */
import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';
class StorageUtils {
    constructor() {
        console.log('-------构造函数执行-------');
        this.storage = new Storage({
            // 最大容量，默认值1000条数据循环存储
            size: 10000,

            // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
            // 如果不指定则数据只会保存在内存中，重启后即丢失
            storageBackend: AsyncStorage,

            // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
            defaultExpires: null,

            // 读写时在内存中缓存数据。默认启用。
            enableCache: true,
            // 如果storage中没有相应数据，或数据已过期，
            // 则会调用相应的sync方法，无缝返回最新数据。
            // sync方法的具体说明会在后文提到
            // 你可以在构造函数这里就写好sync的方法
            // 或是写到另一个文件里，这里require引入
            // 或是在任何时候，直接对storage.sync进行赋值修改
            // sync: require('./sync')
        });
    }

    //保存
    save(key, rawData) {
        this.storage.save({
            key: key,  // 注意:请不要在key中使用_下划线符号!
            data: rawData,
            // 如果不指定过期时间，则会使用defaultExpires参数
            // 如果设为null，则永不过期
            expires: null
        });
    }

    // 读取
    load(key, callback) {
        // console.log('load'+key);
        this.storage.load({
            key: key,
            // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
            autoSync: false,
        }).then(ret => {
            // 如果找到数据，则在then方法中返回
            // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
            // 你只能在then这个方法内继续处理ret数据
            // 而不能在then以外处理
            // 也没有办法“变成”同步返回
            // 你也可以使用“看似”同步的async/await语法
            callback('1', ret);
        }).catch(err => {
            //如果没有找到数据且没有sync方法，
            //或者有其他异常，则在catch中返回
            // console.warn(err.message);
            // switch (err.name) {
            //     case 'NotFoundError':
            //         // TODO;
            //         break;
            //     case 'ExpiredError':
            //         // TODO
            //         break;
            // }
            callback('-1', err);
        })
    }

    // 获取某个key下的所有数据
    getAllDataForKey(key, callback) {
        this.storage.getAllDataForKey(key).then(datas => {
            // console.log(users);
            callback(datas);
        });
    }

    // 使用和load方法一样的参数读取批量数据，但是参数是以数组的方式提供。
// 会在需要时分别调用相应的sync方法，最后统一返回一个有序数组。
//     [
//         { key: 'loginState' },
// { key: 'checkPoint', syncInBackground: false },
// { key: 'balance' },
// { key: 'user', id: '1009' }
// ]
    //按顺序返回
    getBatchData(keys, callback) {
        let keysTemp = [];
        keys.forEach(key => {
            keysTemp.push({key: key});
        });
        this.storage.getBatchData(keysTemp)
            .then(results => {
                callback('1', results);
            })
            .catch(err => {
                //如果没有找到数据且没有sync方法，
                //或者有其他异常，则在catch中返回
                // console.warn(err.message);
                // switch (err.name) {
                //     case 'NotFoundError':
                //         // TODO;
                //         break;
                //     case 'ExpiredError':
                //         // TODO
                //         break;
                // }
                callback('-1', err);
            })
    }

    // 清除某个key下的所有数据
    clearMapForKey(key) {
        this.storage.clearMapForKey(key);
    }

    // 清空map，移除所有"key-id"数据（但会保留只有key的数据）
    clearMap() {
        this.storage.clearMap();
    }
}
export default new StorageUtils();
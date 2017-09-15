import DeviceInfo from 'react-native-device-info'

class DeviceInfoUtil {
    constructor() {
    }

    fetchDeviceID() {
        let deviceID = DeviceInfo.getUniqueID();
        console.log(deviceID);
        return deviceID;
    }
}

export default new DeviceInfoUtil();

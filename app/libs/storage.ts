import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {

    store: async (key:string, value:any) => {
        try {
            await AsyncStorage.setItem(key, value)
            return true;
        } catch (err) {
            console.log("storage store err", err)
            return false;
        }
    },

    get: async (key:string) => {
        try {
            return await AsyncStorage.getItem(key)
        } catch (err:any) {
            console.log("storage get err", err)
            throw Error(err)
        }
    },

    multiGet: async (keys:any[]) => {
        try {
            return await AsyncStorage.multiGet(keys)
        } catch (err:any) {
            console.log("storage multiGet err", err)
            throw Error(err)
        }
    },

    getAllKeys: async () => {
        try {
            return await AsyncStorage.getAllKeys()
        } catch (err:any) {
            console.log("storage getAllKeys err", err)
            throw Error(err)
        }
    },

    remove: async (key:string) => {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (err) {
            console.log("storage remove err", err);
            return false;
        }
    }
}

export default Storage;
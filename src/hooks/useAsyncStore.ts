import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAsyncStore = () => {
  async function setData(key: string, value: object) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (err) {}
  }

  async function getData(key: string): Promise<object | undefined> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (err) {}
  }

  async function removeData(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {}
  }

  return {
    setData,
    getData,
    removeData,
  };
};

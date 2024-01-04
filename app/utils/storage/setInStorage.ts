import AsyncStorage from '@react-native-async-storage/async-storage';

const saveString = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

async function setInStorage<T>(key: string, value: T) {
  saveString(key, JSON.stringify(value));
}

export default setInStorage;

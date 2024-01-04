import AsyncStorage from '@react-native-async-storage/async-storage';

async function getFromStorage<T>(key: string): Promise<T | null> {
  const itemString = await AsyncStorage.getItem(key);
  if (itemString) {
    return JSON.parse(itemString);
  }
  return null;
}

export default getFromStorage;

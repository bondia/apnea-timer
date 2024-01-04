import { ColorSchemeName } from 'react-native';
import { ThemeSettingsOptions } from '../../themes/types';
import getFromStorage from '../../utils/storage/getFromStorage';
import setInStorage from '../../utils/storage/setInStorage';

const STORAGE_KEY = 'theme';

export const getStoredTheme = async () => {
  const theme = await getFromStorage<ColorSchemeName>(STORAGE_KEY);
  return theme;
};

export const storeTheme = async (newTheme: ColorSchemeName) => {
  if (newTheme === null || ThemeSettingsOptions.dark === newTheme || ThemeSettingsOptions.light === newTheme) {
    setInStorage<ColorSchemeName>(STORAGE_KEY, newTheme);
    return newTheme;
  }
  return null;
};

import React, {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ColorSchemeName } from 'react-native';
import AppThemeProvider from '../../../components/AppThemeProvider/AppThemeProvider';
import { ThemeSettingsOptions } from '../../../themes/types';
import getFromStorage from '../../../utils/storage/getFromStorage';
import setInStorage from '../../../utils/storage/setInStorage';

type ThemeSettingsContextValue = {
  theme: ColorSchemeName | null;
  updateTheme: (newTheme: ColorSchemeName | null) => Promise<void>;
};

const defaultValue: ThemeSettingsContextValue = { theme: null, updateTheme: async () => undefined };
const SettingThemeContext = createContext<ThemeSettingsContextValue>(defaultValue);

const getStoredTheme = async () => {
  const theme = await getFromStorage<ColorSchemeName>('theme');
  return theme;
};

const storeTheme = async (newTheme: ColorSchemeName) => {
  if (newTheme === null || ThemeSettingsOptions.dark === newTheme || ThemeSettingsOptions.light === newTheme) {
    setInStorage<ColorSchemeName>('theme', newTheme);
    return newTheme;
  }
  return null;
};

type ThemeSettingsContextProps = PropsWithChildren;

const ThemeSettingsContext: FC<ThemeSettingsContextProps> = ({ children }) => {
  const [theme, setThemeState] = useState<ColorSchemeName>();
  const isDarkTheme = ThemeSettingsOptions.dark === theme;

  const loadTheme = useCallback(async () => {
    const storedTheme = await getStoredTheme();
    setThemeState(storedTheme);
  }, []);

  const updateTheme = useCallback(async (newTheme: ColorSchemeName) => {
    const storedTheme = await storeTheme(newTheme);
    setThemeState(storedTheme);
  }, []);

  const themeContextValue = useMemo(
    () => ({
      theme,
      updateTheme,
    }),
    [theme, updateTheme],
  );

  useEffect(() => {
    loadTheme();
  }, [loadTheme]);

  return (
    <SettingThemeContext.Provider value={themeContextValue}>
      <AppThemeProvider isDarkTheme={isDarkTheme}>{children}</AppThemeProvider>
    </SettingThemeContext.Provider>
  );
};

export default ThemeSettingsContext;

export const useSettingThemeContext = () => useContext(SettingThemeContext);

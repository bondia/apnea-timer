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
import { ColorSchemeName, useColorScheme } from 'react-native';
import AppThemeProvider from '../../../components/AppThemeProvider/AppThemeProvider';
import { ThemeSettingsOptions } from '../../../themes/types';
import { getStoredTheme, storeTheme } from '../themeStorage';

type UserThemeContextValue = {
  theme: ColorSchemeName | null;
  updateTheme: (newTheme: ColorSchemeName | null) => Promise<void>;
};

const defaultValue: UserThemeContextValue = { theme: null, updateTheme: async () => undefined };
const ThemeContext = createContext<UserThemeContextValue>(defaultValue);

const UserThemeContext: FC<PropsWithChildren> = ({ children }) => {
  const colorSchemeTheme = useColorScheme();

  const [theme, setThemeState] = useState<ColorSchemeName>();

  const effectiveTheme = theme || colorSchemeTheme;
  const isDarkTheme = ThemeSettingsOptions.dark === effectiveTheme;

  const loadTheme = useCallback(async () => {
    const storedTheme = await getStoredTheme();
    setThemeState(storedTheme);
  }, []);

  const updateTheme = useCallback(async (newTheme: ColorSchemeName) => {
    const storedTheme = await storeTheme(newTheme);
    setThemeState(storedTheme);
  }, []);

  const value = useMemo(
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
    <ThemeContext.Provider value={value}>
      <AppThemeProvider isDarkTheme={isDarkTheme}>{children}</AppThemeProvider>
    </ThemeContext.Provider>
  );
};

export default UserThemeContext;

export const useUserThemeContext = () => useContext(ThemeContext);

import React, { FC, PropsWithChildren, createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { ThemeSettingsOptions } from '../../themes/types';
import AppThemeProvider from '../AppThemeProvider/AppThemeProvider';
import { getStoredTheme, storeTheme } from './themeStorage';

type UserThemeContextValue = {
  theme: ColorSchemeName | null;
  updateTheme: (newTheme: ColorSchemeName | null) => Promise<void>;
};

const defaultValue: UserThemeContextValue = { theme: null, updateTheme: async () => undefined };
export const UserThemeContext = createContext<UserThemeContextValue>(defaultValue);

const UserThemeProvider: FC<PropsWithChildren> = ({ children }) => {
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
    <UserThemeContext.Provider value={value}>
      <AppThemeProvider isDarkTheme={isDarkTheme}>{children}</AppThemeProvider>
    </UserThemeContext.Provider>
  );
};

export default UserThemeProvider;

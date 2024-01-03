import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components/native';
import darkTheme from './darkTheme';
import defaultTheme from './defaultTheme';

export type AppThemeProviderProps = PropsWithChildren<{ isDark?: boolean }>;

const AppThemeProvider: FC<AppThemeProviderProps> = ({ children, isDark = false }) => (
  <ThemeProvider theme={isDark ? darkTheme : defaultTheme}>{children}</ThemeProvider>
);

export default AppThemeProvider;

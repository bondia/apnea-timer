import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components/native';
import darkTheme from '../../themes/darkTheme';
import defaultTheme from '../../themes/defaultTheme';

export type AppThemeProviderProps = PropsWithChildren<{ isDarkTheme?: boolean }>;

const AppThemeProvider: FC<AppThemeProviderProps> = ({ children, isDarkTheme = false }) => (
  <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>{children}</ThemeProvider>
);

export default AppThemeProvider;

import React, { FC, PropsWithChildren } from 'react';
import AppThemeProvider from '../AppThemeProvider/AppThemeProvider';
import { Stack } from '../Flow';

const ThemeSplitView: FC<PropsWithChildren> = ({ children }) => (
  <Stack grow={1} horizontal>
    <AppThemeProvider>{children}</AppThemeProvider>
    <AppThemeProvider isDarkTheme>{children}</AppThemeProvider>
  </Stack>
);

export default ThemeSplitView;

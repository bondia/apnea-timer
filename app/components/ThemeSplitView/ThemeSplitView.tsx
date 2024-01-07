import React, { FC, PropsWithChildren } from 'react';
import AppThemeProvider from '../../providers/AppThemeProvider/AppThemeProvider';
import { Spacer, Stack } from '../Flow';
import Typography, { TypographyType } from '../Typography/Typography';

const ThemeSplitView: FC<PropsWithChildren> = ({ children }) => (
  <Stack grow={1}>
    <AppThemeProvider>
      <Typography type={TypographyType.H5}>Light</Typography>
      <Stack grow={1}>{children}</Stack>
    </AppThemeProvider>

    <Spacer spacing={6} />

    <AppThemeProvider isDarkTheme>
      <Typography type={TypographyType.H5}>Dark</Typography>
      <Stack grow={1}>{children}</Stack>
    </AppThemeProvider>
  </Stack>
);

export default ThemeSplitView;

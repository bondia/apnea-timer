import React, { FC, PropsWithChildren } from 'react';
import { Stack } from '../components/Flow';
import AppThemeProvider from './AppThemeProvider';

const SplitView: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack grow={1} horizontal>
      <AppThemeProvider>{children}</AppThemeProvider>
      <AppThemeProvider isDark>{children}</AppThemeProvider>
    </Stack>
  );
};

export default SplitView;

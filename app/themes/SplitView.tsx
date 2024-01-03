import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Stack } from '../components/Flow';
import darkTheme from './darkTheme';
import defaultTheme from './defaultTheme';

const SplitView: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack grow={1} horizontal>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </Stack>
  );
};

export default SplitView;

import React, { FC, PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import AppThemeProvider from '../AppThemeProvider/AppThemeProvider';
import SceneLayout, { SceneLayoutProps } from './SceneLayout';

type ThemedSceneLayoutProps = PropsWithChildren<SceneLayoutProps>;

const ThemedSceneLayout: FC<ThemedSceneLayoutProps> = ({ children }) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (
    <AppThemeProvider isDarkTheme={isDarkTheme}>
      <SceneLayout>{children}</SceneLayout>
    </AppThemeProvider>
  );
};

export default ThemedSceneLayout;

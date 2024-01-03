import React, { FC, PropsWithChildren } from 'react';
import AppThemeProvider, { AppThemeProviderProps } from '../../themes/AppThemeProvider';
import SceneLayout, { SceneLayoutProps } from './SceneLayout';

type ThemedSceneLayoutProps = PropsWithChildren<SceneLayoutProps & AppThemeProviderProps>;

const ThemedSceneLayout: FC<ThemedSceneLayoutProps> = ({ children, isDark }) => (
  <AppThemeProvider isDark={isDark}>
    <SceneLayout>{children}</SceneLayout>
  </AppThemeProvider>
);

export default ThemedSceneLayout;

import React, { FC, PropsWithChildren } from 'react';
import UserThemeProvider from '../../providers/UserThemeProvider/UserThemeProvider';
import SceneLayout, { SceneLayoutProps } from './SceneLayout';

type ThemedSceneLayoutProps = PropsWithChildren<SceneLayoutProps>;

const ThemedSceneLayout: FC<ThemedSceneLayoutProps> = ({ children, darkBackground }) => (
  <UserThemeProvider>
    <SceneLayout darkBackground={darkBackground}>{children}</SceneLayout>
  </UserThemeProvider>
);

export default ThemedSceneLayout;

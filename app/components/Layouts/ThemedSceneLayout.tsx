import React, { FC, PropsWithChildren } from 'react';
import UserThemeProvider from '../../providers/UserThemeProvider/UserThemeProvider';
import SceneLayout from './SceneLayout';

const ThemedSceneLayout: FC<PropsWithChildren> = ({ children }) => (
  <UserThemeProvider>
    <SceneLayout>{children}</SceneLayout>
  </UserThemeProvider>
);

export default ThemedSceneLayout;

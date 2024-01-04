import React, { FC, PropsWithChildren } from 'react';
import UserThemeContext from '../../modules/settings/context/UserThemeContext';
import SceneLayout, { SceneLayoutProps } from './SceneLayout';

type ThemedSceneLayoutProps = PropsWithChildren<SceneLayoutProps>;

const ThemedSceneLayout: FC<ThemedSceneLayoutProps> = ({ children, darkBackground }) => (
  <UserThemeContext>
    <SceneLayout darkBackground={darkBackground}>{children}</SceneLayout>
  </UserThemeContext>
);

export default ThemedSceneLayout;

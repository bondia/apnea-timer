import React, { FC, PropsWithChildren } from 'react';
import ThemeSettingsContext from '../../modules/settings/context/ThemeSettingsContext';
import SceneLayout, { SceneLayoutProps } from './SceneLayout';

type ThemedSceneLayoutProps = PropsWithChildren<SceneLayoutProps>;

const ThemedSceneLayout: FC<ThemedSceneLayoutProps> = ({ children, darkBackground }) => (
  <ThemeSettingsContext>
    <SceneLayout darkBackground={darkBackground}>{children}</SceneLayout>
  </ThemeSettingsContext>
);

export default ThemedSceneLayout;

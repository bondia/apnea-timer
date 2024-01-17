import React, { FC } from 'react';
import ThemedSceneLayout from '../Layouts/ThemedSceneLayout';
import MainMenu from '../MainMenu/MainMenu';

const SelectorScene: FC = () => (
  <ThemedSceneLayout>
    <MainMenu />
  </ThemedSceneLayout>
);

export default SelectorScene;

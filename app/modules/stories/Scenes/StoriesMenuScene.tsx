import React, { FC } from 'react';
import ThemedSceneLayout from '../../../components/Layouts/ThemedSceneLayout';
import StoriesMenu from '../components/StoriesMenu';

const StoriesMenuScene: FC = () => (
  <ThemedSceneLayout>
    <StoriesMenu />
  </ThemedSceneLayout>
);

export default StoriesMenuScene;

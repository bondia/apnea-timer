import React, { FC } from 'react';
import StoriesMenu from '../../../modules/stories/components/StoriesMenu';
import ThemedSceneLayout from '../../Layouts/ThemedSceneLayout';

const StoriesMenuScene: FC = () => (
  <ThemedSceneLayout>
    <StoriesMenu />
  </ThemedSceneLayout>
);

export default StoriesMenuScene;

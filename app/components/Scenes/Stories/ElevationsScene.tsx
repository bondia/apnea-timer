import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import ElevationsStory from '../../../modules/stories/components/Elevations/ElevationsStory';
import SceneLayout from '../../Layouts/SceneLayout';

const ElevationsScene: FC = () => (
  <SceneLayout>
    <ScrollView>
      <ElevationsStory />
    </ScrollView>
  </SceneLayout>
);

export default ElevationsScene;

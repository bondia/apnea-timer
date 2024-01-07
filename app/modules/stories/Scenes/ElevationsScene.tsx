import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import SceneLayout from '../../../components/Layouts/SceneLayout';
import ElevationsStory from '../components/Elevations/ElevationsStory';

const ElevationsScene: FC = () => (
  <SceneLayout>
    <ScrollView>
      <ElevationsStory />
    </ScrollView>
  </SceneLayout>
);

export default ElevationsScene;

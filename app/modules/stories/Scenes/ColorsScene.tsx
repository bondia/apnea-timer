import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import SceneLayout from '../../../components/Layouts/SceneLayout';
import ColorsStory from '../components/ColorsStory/ColorsStory';

const ColorsScene: FC = () => (
  <SceneLayout>
    <ScrollView>
      <ColorsStory />
    </ScrollView>
  </SceneLayout>
);

export default ColorsScene;

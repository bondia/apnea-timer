import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import ColorsStory from '../../../modules/stories/components/ColorsStory/ColorsStory';
import SceneLayout from '../../Layouts/SceneLayout';

const ColorsScene: FC = () => (
  <SceneLayout>
    <ScrollView>
      <ColorsStory />
    </ScrollView>
  </SceneLayout>
);

export default ColorsScene;

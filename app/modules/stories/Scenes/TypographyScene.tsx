import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { Spacer } from '../../../components/Flow';
import SceneLayout from '../../../components/Layouts/SceneLayout';
import TypographyStory from '../components/TypographyStory';

const TypographyScene: FC = () => (
  <SceneLayout>
    <ScrollView>
      <Spacer spacing={4} />
      <TypographyStory />
    </ScrollView>
  </SceneLayout>
);

export default TypographyScene;

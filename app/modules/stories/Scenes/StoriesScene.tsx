import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { Spacer } from '../../../components/Flow';
import SceneLayout from '../../../components/Layouts/SceneLayout';
import ThemeSplitView from '../../../components/ThemeSplitView/ThemeSplitView';
import Typography, { TypographyType } from '../../../components/Typography/Typography';
import SpacerStory from '../components/SpacerStory';
import StackStory from '../components/StackStory';
import SurfacesStory from '../components/SurfacesStory';

const StoriesScene: FC = () => (
  <SceneLayout>
    <ScrollView>
      <Spacer bottom={10}>
        <Typography type={TypographyType.H3}>SURFACES</Typography>
        <ThemeSplitView>
          <SurfacesStory />
        </ThemeSplitView>
      </Spacer>

      <Spacer bottom={10}>
        <StackStory />
      </Spacer>

      <Spacer bottom={10}>
        <SpacerStory />
      </Spacer>
    </ScrollView>
  </SceneLayout>
);

export default StoriesScene;

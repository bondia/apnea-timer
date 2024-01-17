import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import SpacerStory from '../../../modules/stories/components/SpacerStory';
import StackStory from '../../../modules/stories/components/StackStory';
import SurfacesStory from '../../../modules/stories/components/SurfacesStory';
import { Spacer } from '../../Flow';
import SceneLayout from '../../Layouts/SceneLayout';
import ThemeSplitView from '../../ThemeSplitView/ThemeSplitView';
import Typography, { TypographyType } from '../../Typography/Typography';

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

import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { Spacer } from '../../components/Flow';
import SceneLayout from '../../components/Layouts/SceneLayout';
import Typography, { TypographyType } from '../../components/Typography/Typography';
import SplitView from '../../themes/SplitView';
import SpacerStory from './components/SpacerStory';
import StackStory from './components/StackStory';
import SurfacesStory from './components/SurfacesStory';
import TypographyStory from './components/TypographyStory';

const StoreisScene: FC = () => {
  return (
    <SceneLayout>
      <ScrollView>
        <Spacer top={4} bottom={10}>
          <TypographyStory />
        </Spacer>

        <Spacer bottom={10}>
          <StackStory />
        </Spacer>

        <Spacer bottom={10}>
          <SpacerStory />
        </Spacer>

        <Spacer bottom={10}>
          <Typography type={TypographyType.H3}>SURFACES</Typography>
          <SplitView>
            <SurfacesStory />
          </SplitView>
        </Spacer>
      </ScrollView>
    </SceneLayout>
  );
};

export default StoreisScene;

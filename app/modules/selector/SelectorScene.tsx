import React, { FC } from 'react';
import { AppScreenType, RoutesEnum } from '../../Routes';
import ThemedSceneLayout from '../../components/Layouts/ThemedSceneLayout';
import SelectorPane from './SelectorPane';

const SelectorScene: FC<AppScreenType<RoutesEnum.MENU>> = () => (
  <ThemedSceneLayout>
    <SelectorPane />
  </ThemedSceneLayout>
);

export default SelectorScene;

import React, { FC } from 'react';
import ThemedSceneLayout from '../../components/Layouts/ThemedSceneLayout';
import SelectorPane from './SelectorPane';

const SelectorScene: FC = () => (
  <ThemedSceneLayout>
    <SelectorPane />
  </ThemedSceneLayout>
);

export default SelectorScene;

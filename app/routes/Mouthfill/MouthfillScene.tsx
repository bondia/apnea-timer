import React, { FC } from 'react';
import SceneWrapper from '../../components/SceneWrapper/SceneWrapper';
import MouthfillForm from './components/MouthfillForm';

const MouthfillScene: FC = () => {
  return (
    <SceneWrapper>
      <MouthfillForm />
    </SceneWrapper>
  );
};

export default MouthfillScene;

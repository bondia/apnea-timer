import React, { FC } from 'react';
import SceneWrapper from '../../common/components/SceneWrapper';
import EnduranceForm from './components/EnduranceForm/EnduranceForm';

const EditorEnduranceScene: FC = () => {
  return (
    <SceneWrapper>
      <EnduranceForm />
    </SceneWrapper>
  );
};

export default EditorEnduranceScene;

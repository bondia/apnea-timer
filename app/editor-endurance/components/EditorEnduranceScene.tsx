import React, { FC } from 'react';
import SceneWrapper from '../../common/components/SceneWrapper';
import EditorEndurancePane from './EditorEndurancePane';

const EditorEnduranceScene: FC = () => {
  return (
    <SceneWrapper>
      <EditorEndurancePane />
    </SceneWrapper>
  );
};

export default EditorEnduranceScene;

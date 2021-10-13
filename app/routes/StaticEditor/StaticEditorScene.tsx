import React, { FC } from 'react';
import SceneWrapper from '../../common/components/SceneWrapper';
import StaticForm from './components/StaticForm/StaticForm';

const StaticEditorScene: FC = () => {
  return (
    <SceneWrapper>
      <StaticForm />
    </SceneWrapper>
  );
};

export default StaticEditorScene;

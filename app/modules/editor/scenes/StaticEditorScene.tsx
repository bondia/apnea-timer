import React, { FC } from 'react';
import SceneLayout from '../../../components/Layouts/SceneLayout';
import AppThemeProvider from '../../../themes/AppThemeProvider';
import StaticForm from '../components/StaticForm/StaticForm';

const StaticEditorScene: FC = () => (
  <SceneLayout>
    <AppThemeProvider>
      <StaticForm />
    </AppThemeProvider>
  </SceneLayout>
);

export default StaticEditorScene;

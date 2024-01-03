import React, { FC } from 'react';
import ThemedSceneLayout from '../../components/Layouts/ThemedSceneLayout';
import AppThemeProvider from '../../themes/AppThemeProvider';
import MouthfillForm from './components/MouthfillForm';

const MouthfillScene: FC = () => (
  <ThemedSceneLayout>
    <AppThemeProvider>
      <MouthfillForm />
    </AppThemeProvider>
  </ThemedSceneLayout>
);

export default MouthfillScene;

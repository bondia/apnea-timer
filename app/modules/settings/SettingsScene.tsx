import React, { FC } from 'react';
import useAppTheme from '../../components/AppThemeProvider/useAppTheme';
import { Spacer, Stack } from '../../components/Flow';
import ThemedSceneLayout from '../../components/Layouts/ThemedSceneLayout';
import Typography, { TypographyType } from '../../components/Typography/Typography';
import ThemeForm from './components/ThemeForm';

const SettingsScene: FC = () => {
  const { colors } = useAppTheme();
  return (
    <ThemedSceneLayout>
      <Stack spaceX={3} spaceTop={3}>
        <Typography type={TypographyType.H2} color={colors.primary900}>
          Settings
        </Typography>

        <Spacer spacing={3} />

        <ThemeForm />
      </Stack>
    </ThemedSceneLayout>
  );
};

export default SettingsScene;

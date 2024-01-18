import React, { FC } from 'react';
import useAppTheme from '../../hooks/useAppTheme';
import { Spacer, Stack } from '../Flow';
import ThemedSceneLayout from '../Layouts/ThemedSceneLayout';
import SettingsThemeForm from '../SettingsThemeForm/SettingsThemeForm';
import Typography, { TypographyType } from '../Typography/Typography';

const SettingsScene: FC = () => {
  const { colors } = useAppTheme();
  return (
    <ThemedSceneLayout>
      <Stack spaceX={3} spaceTop={3}>
        <Typography type={TypographyType.H2} color={colors.primary900}>
          Settings
        </Typography>

        <Spacer spacing={3} />

        <SettingsThemeForm />
      </Stack>
    </ThemedSceneLayout>
  );
};

export default SettingsScene;

import React, { FC, PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAppTheme from '../../providers/AppThemeProvider/useAppTheme';
import { Stack, Surface } from '../Flow';

export type SceneLayoutProps = PropsWithChildren<{
  darkBackground?: boolean;
}>;

const SceneLayout: FC<SceneLayoutProps> = ({
  children,
  darkBackground = false,
}) => {
  const { elevations } = useAppTheme();
  const backgroundColor = darkBackground
    ? elevations.ELEVATION_00
    : elevations.ELEVATION_00;
  return (
    <Surface grow={1} elevation={backgroundColor}>
      <SafeAreaView>
        <Stack grow={1} fullWidth>
          {children}
        </Stack>
      </SafeAreaView>
    </Surface>
  );
};

export default SceneLayout;

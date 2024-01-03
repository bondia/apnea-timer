import { StatusBar } from 'expo-status-bar';
import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import useAppTheme from '../AppThemeProvider/useAppTheme';
import { Stack } from '../Flow';

type SafeAreaViewProps = {
  backgroundColor?: string;
};

const SafeAreaView = styled.SafeAreaView<SafeAreaViewProps>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export type SceneLayoutProps = PropsWithChildren<{
  darkBackground?: boolean;
}>;

const SceneLayout: FC<SceneLayoutProps> = ({ children, darkBackground = false }) => {
  const { elevations, colors } = useAppTheme();
  const backgroundColor = darkBackground ? elevations.ELEVATION_00 : colors.background;
  return (
    <SafeAreaView backgroundColor={backgroundColor}>
      <Stack grow={1} fullWidth>
        {children}
      </Stack>
      <StatusBar />
    </SafeAreaView>
  );
};

export default SceneLayout;

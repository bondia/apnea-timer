import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Stack } from '../Flow';

type SafeAreaViewProps = {
  backgroundColor?: string;
};

const SafeAreaView = styled.SafeAreaView<SafeAreaViewProps>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

type SceneLayoutProps = {
  children?: React.ReactNode;
  backgroundColor?: string;
};

const SceneLayout: FC<SceneLayoutProps> = ({ children, backgroundColor }) => (
  <SafeAreaView backgroundColor={backgroundColor}>
    <Stack grow={1} fullWidth>
      {children}
    </Stack>
    <StatusBar />
  </SafeAreaView>
);

export default SceneLayout;

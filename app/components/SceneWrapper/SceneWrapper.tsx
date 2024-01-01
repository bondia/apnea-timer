import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Stack } from '../Layout';

type SafeAreaViewProps = {
  backgroundColor?: string;
};

const SafeAreaView = styled.SafeAreaView<SafeAreaViewProps>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

type Props = {
  children?: React.ReactNode;
  backgroundColor?: string;
};

const SceneWrapper: FC<Props> = ({ children, backgroundColor }) => (
  <SafeAreaView backgroundColor={backgroundColor}>
    <Stack grow={1} fullWidth>
      {children}
    </Stack>
    <StatusBar />
  </SafeAreaView>
);

export default SceneWrapper;

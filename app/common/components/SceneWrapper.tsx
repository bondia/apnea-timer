import { StatusBar } from 'expo-status-bar';
import React, { FC, ReactNode } from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  width: 100%;
`;
interface SceneWrapperProps {
  children: ReactNode;
}

const SceneWrapper: FC<SceneWrapperProps> = props => {
  const { children } = props;
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
      <Container>{children}</Container>
      <StatusBar />
    </SafeAreaView>
  );
};

export default SceneWrapper;

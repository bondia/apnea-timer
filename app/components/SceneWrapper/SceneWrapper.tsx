import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { Stack } from '../Layout';

type Props = {
  children?: React.ReactNode;
};

const SceneWrapper: FC<Props> = ({ children }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Stack fullWidth>{children}</Stack>
    <StatusBar />
  </SafeAreaView>
);

export default SceneWrapper;

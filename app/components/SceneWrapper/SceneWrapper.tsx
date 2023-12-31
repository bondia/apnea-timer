import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { Stack } from '../Layout';

type Props = {
  children?: React.ReactNode;
  backgroundColor?: string;
};

const SceneWrapper: FC<Props> = ({ children, backgroundColor }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor }}>
    <Stack fullWidth>{children}</Stack>
    <StatusBar />
  </SafeAreaView>
);

export default SceneWrapper;

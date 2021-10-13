import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import SceneWrapper from '../../common/components/SceneWrapper';
import { RootStackParamList, Routes } from '../../main/types/Routes';
import Menu from './components/Menu/Menu';

const MainScene: FC<NativeStackScreenProps<RootStackParamList, Routes.MENU>> = () => {
  return (
    <SceneWrapper>
      <Menu />
    </SceneWrapper>
  );
};

export default MainScene;

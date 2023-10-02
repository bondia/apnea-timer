import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import SceneWrapper from '../../components/SceneWrapper/SceneWrapper';
import { RootStackParamList, Routes } from '../Routes';
import CronoPane from './components/CronoPane/CronoPane';

const CronoScene: FC<NativeStackScreenProps<RootStackParamList, Routes.CRONO_SCENE>> = props => {
  const {
    route: {
      params: { initialData },
    },
  } = props;
  return (
    <SceneWrapper>
      <CronoPane initialData={initialData} />
    </SceneWrapper>
  );
};

export default CronoScene;

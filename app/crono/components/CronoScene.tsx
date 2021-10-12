import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import SceneWrapper from '../../common/components/SceneWrapper';
import { RootStackParamList, Routes } from '../../main/types/Routes';
import CronoPane from './CronoPane';

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

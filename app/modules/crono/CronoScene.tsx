import React, { FC } from 'react';
import { AppScreenType, RoutesEnum } from '../../Routes';
import ThemedSceneLayout from '../../components/Layouts/ThemedSceneLayout';
import { EditorStateType } from '../editor/editorTypes';
import CronoPane from './components/CronoPane/CronoPane';

export type CronoSceneParamList = { initialData: EditorStateType };

type CronoSceneProps = AppScreenType<RoutesEnum.CRONO_SCENE>;

const CronoScene: FC<CronoSceneProps> = ({
  route: {
    params: { initialData },
  },
}) => (
  <ThemedSceneLayout>
    <CronoPane initialData={initialData} />
  </ThemedSceneLayout>
);

export default CronoScene;

import React, { FC } from 'react';
import { AppScreenType, RoutesEnum } from '../../Routes';
import CronoPane from '../../modules/crono/CronoPane';
import { EditorStateType } from '../../modules/editor/editorTypes';
import ThemedSceneLayout from '../Layouts/ThemedSceneLayout';

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

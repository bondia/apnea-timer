import React, { FC } from 'react';
import SceneWrapper from '../../components/SceneWrapper/SceneWrapper';
import { AppScreenType, RoutesEnum } from '../../routes/Routes';
import CronoPane from './components/CronoPane/CronoPane';
import { EditorStateType } from '../editor/editorTypes';

export type CronoSceneParamList = { initialData: EditorStateType };

type CronoSceneProps = AppScreenType<RoutesEnum.CRONO_SCENE>;

const CronoScene: FC<CronoSceneProps> = ({
  route: {
    params: { initialData },
  },
}) => (
  <SceneWrapper>
    <CronoPane initialData={initialData} />
  </SceneWrapper>
);

export default CronoScene;

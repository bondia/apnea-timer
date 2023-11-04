import React, { FC } from 'react';
import SceneWrapper from '../../components/SceneWrapper/SceneWrapper';
import { AppScreenType, RoutesEnum } from '../Routes';
import CronoPane from './components/CronoPane/CronoPane';
import { EditorStateType } from '../../modules/editor/redux/editorTypes';

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

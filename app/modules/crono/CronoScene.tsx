import React, { FC } from 'react';
import { AppScreenType, RoutesEnum } from '../../Routes';
import SceneWrapper from '../../components/SceneWrapper/SceneWrapper';
import { SURFACE_COLORS } from '../../darkTheme';
import { EditorStateType } from '../editor/editorTypes';
import CronoPane from './components/CronoPane/CronoPane';

export type CronoSceneParamList = { initialData: EditorStateType };

type CronoSceneProps = AppScreenType<RoutesEnum.CRONO_SCENE>;

const CronoScene: FC<CronoSceneProps> = ({
  route: {
    params: { initialData },
  },
}) => (
  <SceneWrapper backgroundColor={SURFACE_COLORS.ELEVATION_00}>
    <CronoPane initialData={initialData} />
  </SceneWrapper>
);

export default CronoScene;

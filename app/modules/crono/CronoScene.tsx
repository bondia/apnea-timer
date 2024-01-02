import React, { FC } from 'react';
import { AppScreenType, RoutesEnum } from '../../Routes';
import SceneLayout from '../../components/Layouts/SceneLayout';
import useAppTheme from '../../themes/useAppTheme';
import { EditorStateType } from '../editor/editorTypes';
import CronoPane from './components/CronoPane/CronoPane';

export type CronoSceneParamList = { initialData: EditorStateType };

type CronoSceneProps = AppScreenType<RoutesEnum.CRONO_SCENE>;

const CronoScene: FC<CronoSceneProps> = ({
  route: {
    params: { initialData },
  },
}) => {
  const { elevations } = useAppTheme();
  return (
    <SceneLayout backgroundColor={elevations.ELEVATION_00}>
      <CronoPane initialData={initialData} />
    </SceneLayout>
  );
};

export default CronoScene;

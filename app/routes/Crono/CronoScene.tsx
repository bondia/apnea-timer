import React, { FC } from 'react';
import SceneWrapper from '../../components/SceneWrapper/SceneWrapper';
import { AppScreenType, RoutesEnum } from '../Routes';
import CronoPane from './components/CronoPane/CronoPane';

const CronoScene: FC<AppScreenType<RoutesEnum.CRONO_SCENE>> = props => {
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

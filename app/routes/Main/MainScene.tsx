import React, { FC } from 'react';
import SceneWrapper from '../../components/SceneWrapper/SceneWrapper';
import { AppScreenType, RoutesEnum } from '../Routes';
import Menu from './components/Menu/Menu';

const MainScene: FC<AppScreenType<RoutesEnum.MENU>> = () => (
  <SceneWrapper>
    <Menu />
  </SceneWrapper>
);

export default MainScene;

import React, { FC } from 'react';
import SceneWrapper from '../../components/SceneWrapper/SceneWrapper';
import { AppScreenType, Routes } from '../Routes';
import Menu from './components/Menu/Menu';

const MainScene: FC<AppScreenType<Routes.MENU>> = () => (
  <SceneWrapper>
    <Menu />
  </SceneWrapper>
);

export default MainScene;

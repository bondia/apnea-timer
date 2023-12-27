import React, { FC } from 'react';
import SceneWrapper from '../../components/SceneWrapper/SceneWrapper';
import { AppScreenType, RoutesEnum } from '../../Routes';
import { Menu, MenuItem } from '../../components/Menu';
import { COLOR_DARK, COLOR_DARKER, COLOR_LIGHT, COLOR_NORMAL } from '../../commonStyles';
import useAppNavitation from '../../useAppNavigation';

const SelectorScene: FC<AppScreenType<RoutesEnum.MENU>> = () => {
  const navigation = useAppNavitation();

  const createRoute = () => navigation.push(RoutesEnum.CREATE_TABLE_SCENE);
  const mouthfillRoute = () => navigation.push(RoutesEnum.MF_DEPTH);
  const endurance = () => navigation.push(RoutesEnum.ENDURANCE_TABLE_SCENE);
  const stories = () => navigation.push(RoutesEnum.STORIES);

  return (
    <SceneWrapper>
      <Menu>
        <MenuItem title="CO2/O2" color={COLOR_LIGHT} onPress={createRoute} />
        <MenuItem title="Endurance" color={COLOR_NORMAL} onPress={endurance} />
        <MenuItem title="MF" color={COLOR_DARK} onPress={mouthfillRoute} />
        <MenuItem title="Stories" color={COLOR_DARKER} onPress={stories} />
      </Menu>
    </SceneWrapper>
  );
};

export default SelectorScene;

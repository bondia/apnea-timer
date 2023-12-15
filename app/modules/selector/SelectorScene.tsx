import React, { FC, useCallback } from 'react';
import SceneWrapper from '../../components/SceneWrapper/SceneWrapper';
import { AppScreenType, RoutesEnum } from '../../Routes';
import { Menu, MenuItem } from '../../components/Menu';
import { COLOR_DARK, COLOR_LIGHT, COLOR_NORMAL } from '../../commonStyles';
import useAppNavitation from '../../useAppNavigation';

const SelectorScene: FC<AppScreenType<RoutesEnum.MENU>> = () => {
  const navigation = useAppNavitation();

  const createRoute = useCallback(() => navigation.push(RoutesEnum.CREATE_TABLE_SCENE), [navigation]);
  const mouthfillRoute = useCallback(() => navigation.push(RoutesEnum.MF_DEPTH), [navigation]);
  const endurance = useCallback(() => navigation.push(RoutesEnum.ENDURANCE_TABLE_SCENE), [navigation]);
  return (
    <SceneWrapper>
      <Menu>
        <MenuItem title="CO2/O2" color={COLOR_LIGHT} onPress={createRoute} />
        <MenuItem title="MF" color={COLOR_NORMAL} onPress={mouthfillRoute} />
        <MenuItem title="Endurance" color={COLOR_DARK} onPress={endurance} />
      </Menu>
    </SceneWrapper>
  );
};

export default SelectorScene;

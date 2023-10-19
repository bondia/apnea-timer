import React, { FC, useCallback } from 'react';
import { COLOR_DARK, COLOR_LIGHT, COLOR_NORMAL } from '../../../../commonStyles';
import { RoutesEnum } from '../../../Routes';
import { MenuWrapper } from './Menu.styled';
import MenuItem from './MenuItem';
import useAppNavitation from '../../../useAppNavigation';

const Menu: FC = () => {
  const navigation = useAppNavitation();

  const createRoute = useCallback(() => navigation.push(RoutesEnum.CREATE_TABLE_SCENE), [navigation]);
  const mouthfillRoute = useCallback(() => navigation.push(RoutesEnum.MF_DEPTH), [navigation]);
  const endurance = useCallback(() => navigation.push(RoutesEnum.ENDURANCE_TABLE_SCENE), [navigation]);

  return (
    <MenuWrapper>
      <MenuItem title="CO2/O2" color={COLOR_LIGHT} onPress={createRoute} />
      <MenuItem title="MF" color={COLOR_NORMAL} onPress={mouthfillRoute} />
      <MenuItem title="Endurance" color={COLOR_DARK} onPress={endurance} />
    </MenuWrapper>
  );
};

export default Menu;

import { ParamListBase, useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useCallback } from 'react';
import { COLOR_DARK, COLOR_LIGHT, COLOR_NORMAL } from '../../../../commonStyles';
import { Routes } from '../../../Routes';
import { MenuWrapper } from './Menu.styled';
import MenuItem from './MenuItem';

const Menu: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const createRoute = useCallback(() => navigation.push(Routes.CREATE_TABLE_SCENE), [navigation]);
  const mouthfillRoute = useCallback(() => navigation.push(Routes.MF_DEPTH), [navigation]);
  const endurance = useCallback(() => navigation.push(Routes.ENDURANCE_TABLE_SCENE), [navigation]);
  // const schedule = useCallback(() => navigation.push(Routes.SCHEDULE_SCENE), [navigation]);

  return (
    <MenuWrapper>
      <MenuItem title="CO2/O2" color={COLOR_LIGHT} onPress={createRoute} />
      <MenuItem title="MF" color={COLOR_NORMAL} onPress={mouthfillRoute} />
      <MenuItem title="Endurance" color={COLOR_DARK} onPress={endurance} />
      {/* <MenuItem title="Schedule" onPress={schedule} color={COLOR_DARK} /> */}
      {/* TODO: MY TABLES */}
      {/* TODO: HISTORY */}
    </MenuWrapper>
  );
};

export default Menu;

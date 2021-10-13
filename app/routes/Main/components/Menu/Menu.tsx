import { ParamListBase, useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useCallback } from 'react';
import { COLOR_LIGHT } from '../../../../common/styles/commonStyles';
import { Routes } from '../../../Routes';
import { MenuWrapper } from './Menu.styled';
import MenuItem from './MenuItem';

const Menu: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const create = useCallback(() => navigation.push(Routes.CREATE_TABLE_SCENE), [navigation]);
  // const endurance = useCallback(() => navigation.push(Routes.ENDURANCE_TABLE_SCENE), [navigation]);
  // const schedule = useCallback(() => navigation.push(Routes.SCHEDULE_SCENE), [navigation]);

  return (
    <MenuWrapper>
      <MenuItem title="CO2/O2" color={COLOR_LIGHT} onPress={create} />
      {/* <MenuItem title="Endurance" onPress={endurance} color={COLOR_NORMAL} /> */}
      {/* <MenuItem title="Schedule" onPress={schedule} color={COLOR_DARK} /> */}
      {/* TODO: MY TABLES */}
      {/* TODO: HISTORY */}
    </MenuWrapper>
  );
};

export default Menu;

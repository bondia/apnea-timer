// http://www.colourlovers.com/palette/459707/brightly_to_nightly
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import {
  COLOR_DARK,
  COLOR_LIGHT,
  COLOR_NORMAL
} from '../../../common/styles/commonStyles';
import { Routes } from '../../types/Routes';
import { MenuWrapper } from './Menu.styled';
import MenuItem from './MenuItem';

const Menu: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <MenuWrapper>
      <MenuItem
        title="CO2/O2"
        onPress={() => navigation.push(Routes.CREATE_TABLE_SCENE)}
        color={COLOR_LIGHT}
      />

      <MenuItem
        title="Endurance"
        onPress={() => navigation.push(Routes.ENDURANCE_TABLE_SCENE)}
        color={COLOR_NORMAL}
      />

      <MenuItem
        title="Schedule"
        onPress={() => navigation.push(Routes.SCHEDULE_SCENE)}
        color={COLOR_DARK}
      />

      {/*
      <MenuItem
        title="My Tables"
        type={routesEnum.MY_TABLES_SCENE}
        onPress={(type: string) => handleNavigate(type)}
        style={{ backgroundColor: COLOR_NORMAL }}
      />

      <MenuItem
        title="History"
        type={routesEnum.HISTORY_SCENE}
        onPress={(type: string) => handleNavigate(type)}
        style={{ backgroundColor: COLOR_LIGHT }}
      />
      */}
    </MenuWrapper>
  );
};

export default Menu;

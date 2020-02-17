import React from 'react';
import { Actions } from 'react-native-router-flux';

import * as routesEnum from '../../enums/routes';
import { COLOR_LIGHT, COLOR_NORMAL, COLOR_DARK } from '../../../common/styles/commonStyles';
import { MenuWrapper } from './Menu.styled';
import MenuItem from './MenuItem';

// http://www.colourlovers.com/palette/459707/brightly_to_nightly
export default function Menu() {
    return (
        <MenuWrapper>
            <MenuItem
                title="CO2/O2"
                type={routesEnum.CREATE_TABLE_SCENE}
                onPress={(type: string) => handleNavigate(type)}
                color={COLOR_LIGHT}
            />

            <MenuItem
                title="Endurance"
                type={routesEnum.ENDURANCE_TABLE_SCENE}
                onPress={(type: string) => handleNavigate(type)}
                color={COLOR_NORMAL}
            />

            <MenuItem
                title="Schedule"
                type={routesEnum.SCHEDULE_SCENE}
                onPress={(type: string) => handleNavigate(type)}
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
}

function handleNavigate(type: string): void {
    if (Actions[type]) {
        Actions[type]();
    }
}

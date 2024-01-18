import React, { FC } from 'react';
import { RoutesEnum } from '../../Routes';
import useAppTheme from '../../hooks/useAppTheme';
import useAppNavitation from '../../useAppNavigation';
import { ScrollableStack } from '../Flow';
import MenuItem from '../MenuItem/MenuItem';

const MainMenu: FC = () => {
  const navigation = useAppNavitation();
  const { colors, elevations } = useAppTheme();

  const createRoute = () => navigation.push(RoutesEnum.CREATE_TABLE_SCENE);
  const mouthfillRoute = () => navigation.push(RoutesEnum.MF_DEPTH);
  const endurance = () => navigation.push(RoutesEnum.ENDURANCE_TABLE_SCENE);
  const settings = () => navigation.push(RoutesEnum.SETTINGS);
  const stories = () => navigation.push(RoutesEnum.STORIES_MENU);

  return (
    <ScrollableStack grow={1}>
      <MenuItem
        title="CO2/O2"
        color={colors.inverted050}
        background={elevations.ELEVATION_01}
        onPress={createRoute}
      />
      <MenuItem
        title="Endurance"
        color={colors.inverted050}
        background={elevations.ELEVATION_02}
        onPress={endurance}
      />
      <MenuItem
        title="MF"
        color={colors.inverted050}
        background={elevations.ELEVATION_03}
        onPress={mouthfillRoute}
      />
      <MenuItem
        title="Settings"
        color={colors.inverted050}
        background={elevations.ELEVATION_04}
        onPress={settings}
      />
      <MenuItem
        title="Playground"
        color={colors.inverted050}
        background={elevations.ELEVATION_05}
        onPress={stories}
      />
    </ScrollableStack>
  );
};

export default MainMenu;

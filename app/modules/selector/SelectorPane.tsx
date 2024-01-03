import React, { FC } from 'react';
import { RoutesEnum } from '../../Routes';
import useAppTheme from '../../components/AppThemeProvider/useAppTheme';
import { ScrollableStack } from '../../components/Flow';
import MenuItem from '../../components/MenuItem/MenuItem';
import useAppNavitation from '../../useAppNavigation';

const SelectorPane: FC = () => {
  const navigation = useAppNavitation();
  const { oldColors } = useAppTheme();

  const createRoute = () => navigation.push(RoutesEnum.CREATE_TABLE_SCENE);
  const mouthfillRoute = () => navigation.push(RoutesEnum.MF_DEPTH);
  const endurance = () => navigation.push(RoutesEnum.ENDURANCE_TABLE_SCENE);
  const settings = () => navigation.push(RoutesEnum.SETTINGS);
  const stories = () => navigation.push(RoutesEnum.STORIES);

  return (
    <ScrollableStack>
      <MenuItem title="CO2/O2" color={oldColors.COLOR_LIGHT} onPress={createRoute} />
      <MenuItem title="Endurance" color={oldColors.COLOR_NORMAL} onPress={endurance} />
      <MenuItem title="MF" color={oldColors.COLOR_DARK} onPress={mouthfillRoute} />
      <MenuItem title="Settings" color={oldColors.COLOR_DARKER} onPress={settings} />
      <MenuItem title="Playground" color={oldColors.COLOR_DARKEST} onPress={stories} />
    </ScrollableStack>
  );
};

export default SelectorPane;

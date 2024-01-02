import React, { FC } from 'react';
import { AppScreenType, RoutesEnum } from '../../Routes';
import { ScrollableStack } from '../../components/Flow';
import SceneLayout from '../../components/Layouts/SceneLayout';
import MenuItem from '../../components/MenuItem/MenuItem';
import useAppTheme from '../../themes/useAppTheme';
import useAppNavitation from '../../useAppNavigation';

const SelectorScene: FC<AppScreenType<RoutesEnum.MENU>> = () => {
  const navigation = useAppNavitation();
  const { oldColors } = useAppTheme();

  const createRoute = () => navigation.push(RoutesEnum.CREATE_TABLE_SCENE);
  const mouthfillRoute = () => navigation.push(RoutesEnum.MF_DEPTH);
  const endurance = () => navigation.push(RoutesEnum.ENDURANCE_TABLE_SCENE);
  const stories = () => navigation.push(RoutesEnum.STORIES);

  return (
    <SceneLayout>
      <ScrollableStack>
        <MenuItem title="CO2/O2" color={oldColors.COLOR_LIGHT} onPress={createRoute} />
        <MenuItem title="Endurance" color={oldColors.COLOR_NORMAL} onPress={endurance} />
        <MenuItem title="MF" color={oldColors.COLOR_DARK} onPress={mouthfillRoute} />
        <MenuItem title="Playground" color={oldColors.COLOR_DARKER} onPress={stories} />
      </ScrollableStack>
    </SceneLayout>
  );
};

export default SelectorScene;

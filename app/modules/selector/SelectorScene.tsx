import React, { FC } from 'react';
import { AppScreenType, RoutesEnum } from '../../Routes';
import { COLOR_DARK, COLOR_DARKER, COLOR_LIGHT, COLOR_NORMAL } from '../../commonStyles';
import { ScrollableStack } from '../../components/Flow';
import SceneLayout from '../../components/Layouts/SceneLayout';
import MenuItem from '../../components/MenuItem/MenuItem';
import useAppNavitation from '../../useAppNavigation';

const SelectorScene: FC<AppScreenType<RoutesEnum.MENU>> = () => {
  const navigation = useAppNavitation();

  const createRoute = () => navigation.push(RoutesEnum.CREATE_TABLE_SCENE);
  const mouthfillRoute = () => navigation.push(RoutesEnum.MF_DEPTH);
  const endurance = () => navigation.push(RoutesEnum.ENDURANCE_TABLE_SCENE);
  const stories = () => navigation.push(RoutesEnum.STORIES);

  return (
    <SceneLayout>
      <ScrollableStack>
        <MenuItem title="CO2/O2" color={COLOR_LIGHT} onPress={createRoute} />
        <MenuItem title="Endurance" color={COLOR_NORMAL} onPress={endurance} />
        <MenuItem title="MF" color={COLOR_DARK} onPress={mouthfillRoute} />
        <MenuItem title="Playground" color={COLOR_DARKER} onPress={stories} />
      </ScrollableStack>
    </SceneLayout>
  );
};

export default SelectorScene;

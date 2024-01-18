import React, { FC } from 'react';
import { RoutesEnum } from '../../../Routes';
import { ScrollableStack } from '../../../components/Flow';
import MenuItem from '../../../components/MenuItem/MenuItem';
import useAppTheme from '../../../hooks/useAppTheme';
import useAppNavitation from '../../../useAppNavigation';

const StoriesMenu: FC = () => {
  const navigation = useAppNavitation();
  const { colors, elevations } = useAppTheme();

  const typographyRoute = () => navigation.push(RoutesEnum.STORIES_TYPOGRAPHY);
  const colorsRoute = () => navigation.push(RoutesEnum.STORIES_COLORS);
  const elevationsRoute = () => navigation.push(RoutesEnum.STORIES_ELEVATIONS);
  const miscRoute = () => navigation.push(RoutesEnum.STORIES_UNORDERED);

  return (
    <ScrollableStack grow={1}>
      <MenuItem
        title="Typography"
        color={colors.inverted050}
        background={elevations.ELEVATION_01}
        onPress={typographyRoute}
      />
      <MenuItem
        title="Colors"
        color={colors.inverted050}
        background={elevations.ELEVATION_02}
        onPress={colorsRoute}
      />
      <MenuItem
        title="Elevations"
        color={colors.inverted050}
        background={elevations.ELEVATION_03}
        onPress={elevationsRoute}
      />
      <MenuItem
        title="Unordered"
        color={colors.inverted050}
        background={elevations.ELEVATION_04}
        onPress={miscRoute}
      />
    </ScrollableStack>
  );
};

export default StoriesMenu;

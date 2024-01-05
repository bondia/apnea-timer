import React, { FC } from 'react';
import { RoutesEnum } from '../../../Routes';
import { ScrollableStack } from '../../../components/Flow';
import MenuItem from '../../../components/MenuItem/MenuItem';
import useAppTheme from '../../../providers/AppThemeProvider/useAppTheme';
import useAppNavitation from '../../../useAppNavigation';

const StoriesMenu: FC = () => {
  const navigation = useAppNavitation();
  const { colors, elevations } = useAppTheme();

  const themeColorsRoute = () => navigation.push(RoutesEnum.STORIES_COLORS);
  const typographyRoute = () => navigation.push(RoutesEnum.STORIES_TYPOGRAPHY);
  const unorderedRoute = () => navigation.push(RoutesEnum.STORIES_UNORDERED);

  return (
    <ScrollableStack grow={1}>
      <MenuItem
        title="Colors"
        color={colors.inverted900}
        background={elevations.ELEVATION_01}
        onPress={themeColorsRoute}
      />
      <MenuItem
        title="Typography"
        color={colors.inverted900}
        background={elevations.ELEVATION_02}
        onPress={typographyRoute}
      />
      <MenuItem
        title="Unordered"
        color={colors.inverted900}
        background={elevations.ELEVATION_03}
        onPress={unorderedRoute}
      />
    </ScrollableStack>
  );
};

export default StoriesMenu;

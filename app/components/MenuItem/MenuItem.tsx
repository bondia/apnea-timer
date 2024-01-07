import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';
import useAppTheme from '../../providers/AppThemeProvider/useAppTheme';
import { Stack, Surface } from '../Flow';
import Typography, { TypographyType } from '../Typography/Typography';

type MenuItemProps = {
  title: string;
  onPress: () => void;
  background?: string;
  color?: string;
};

const MenuItem: FC<MenuItemProps> = ({ title, onPress, background, color }) => {
  const { colors, elevations } = useAppTheme();
  return (
    <Surface elevation={background || elevations.ELEVATION_01}>
      <TouchableHighlight onPress={onPress}>
        <Stack grow={1} spaceY={10} centered>
          <Typography
            type={TypographyType.H3}
            color={color || colors.inverted900}
            centered
          >
            {title}
          </Typography>
        </Stack>
      </TouchableHighlight>
    </Surface>
  );
};

export default MenuItem;

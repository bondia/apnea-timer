import React, { FC } from 'react';
import { FONT_COLOR_LIGHT } from '../../commonStyles';
import Typography, { TypographyType } from '../Typography/Typography';
import * as SC from './Menu.styled';

type MenuItemProps = {
  title: string;
  onPress: () => void;
  color: string;
};

const MenuItem: FC<MenuItemProps> = ({ title, onPress, color }) => (
  <SC.ActionArea onPress={onPress} color={color}>
    <Typography type={TypographyType.H3} color={FONT_COLOR_LIGHT} centered>
      {title}
    </Typography>
  </SC.ActionArea>
);

export default MenuItem;

import React, { FC } from 'react';
import styled from 'styled-components/native';
import { FONT_COLOR_LIGHT } from '../../commonStyles';
import { Stack } from '../Flow';
import Typography, { TypographyType } from '../Typography/Typography';

type ActionAreaProps = {
  color: string;
};

const ActionArea = styled.TouchableHighlight<ActionAreaProps>`
  background-color: ${(props: ActionAreaProps) => props.color};
  min-height: 175px;
`;

type MenuItemProps = {
  title: string;
  onPress: () => void;
  color: string;
};

const MenuItem: FC<MenuItemProps> = ({ title, onPress, color }) => (
  <ActionArea onPress={onPress} color={color}>
    <Stack grow={1} centered>
      <Typography type={TypographyType.H3} color={FONT_COLOR_LIGHT} centered>
        {title}
      </Typography>
    </Stack>
  </ActionArea>
);

export default MenuItem;

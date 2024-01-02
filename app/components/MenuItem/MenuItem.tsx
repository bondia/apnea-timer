import React, { FC } from 'react';
import styled from 'styled-components/native';
import useAppTheme from '../../themes/useAppTheme';
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

const MenuItem: FC<MenuItemProps> = ({ title, onPress, color }) => {
  const { colors } = useAppTheme();
  return (
    <ActionArea onPress={onPress} color={color}>
      <Stack grow={1} centered>
        <Typography type={TypographyType.H3} color={colors.inverted900} centered>
          {title}
        </Typography>
      </Stack>
    </ActionArea>
  );
};

export default MenuItem;

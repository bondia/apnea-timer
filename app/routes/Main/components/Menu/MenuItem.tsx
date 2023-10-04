import React, { FC } from 'react';
import TextComponent from '../../../../components/TextComponent/OldTextComponent';
import { ActionArea, styles } from './Menu.styled';

type MenuItemProps = {
  title: string;
  onPress: () => void;
  color: string;
};

const MenuItem: FC<MenuItemProps> = props => {
  const { title, onPress, color } = props;
  return (
    <ActionArea onPress={onPress} color={color}>
      <TextComponent style={styles.baseStyles}>{title}</TextComponent>
    </ActionArea>
  );
};

export default MenuItem;

import React, { FC } from 'react';
import TextComponent from '../TextComponent/TextComponent';
import { ActionArea, styles } from './Menu.styled';

type MenuItemProps = {
  title: string;
  onPress: () => void;
  color: string;
};

const MenuItem: FC<MenuItemProps> = ({ title, onPress, color }) => (
  <ActionArea onPress={onPress} color={color}>
    <TextComponent style={styles.baseStyles}>{title}</TextComponent>
  </ActionArea>
);

export default MenuItem;

import React, { FC, ReactNode } from 'react';
import * as SC from './List.styled';

type ItemProps = {
  active?: boolean;
  children: ReactNode;
};

const Item: FC<ItemProps> = ({ active = false, children }) => (
  <SC.ListItem>
    <SC.ListItemContent active={active}>{children}</SC.ListItemContent>
  </SC.ListItem>
);

export default Item;

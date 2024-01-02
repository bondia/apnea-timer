import React, { FC, PropsWithChildren } from 'react';
import * as SC from './List.styled';

type ItemProps = PropsWithChildren<{
  active?: boolean;
}>;

const Item: FC<ItemProps> = ({ active = false, children }) => (
  <SC.ListItem>
    <SC.ListItemContent active={active}>{children}</SC.ListItemContent>
  </SC.ListItem>
);

export default Item;

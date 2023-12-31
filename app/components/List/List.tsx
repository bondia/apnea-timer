import React, { FC, ReactNode } from 'react';
import { ScrollView } from 'react-native';
import * as SC from './List.styled';

type ListProps = {
  children: ReactNode;
};

const List: FC<ListProps> = ({ children }) => (
  <ScrollView>
    <SC.List>{children}</SC.List>
  </ScrollView>
);

export default List;

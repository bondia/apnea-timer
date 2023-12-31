import React, { FC, ReactNode } from 'react';
import { ScrollView } from 'react-native';
import { Stack } from '../Layout';

type ListProps = {
  children: ReactNode;
};

const List: FC<ListProps> = ({ children }) => (
  <ScrollView>
    <Stack horizontal wrap>
      {children}
    </Stack>
  </ScrollView>
);

export default List;

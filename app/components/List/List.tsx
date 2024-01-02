import React, { FC, PropsWithChildren } from 'react';
import { ScrollView } from 'react-native';
import { Stack } from '../Flow';

const List: FC<PropsWithChildren> = ({ children }) => (
  <ScrollView>
    <Stack horizontal wrap>
      {children}
    </Stack>
  </ScrollView>
);

export default List;

import React, { FC, PropsWithChildren } from 'react';
import { ScrollableStack, Stack } from '../Flow';

const List: FC<PropsWithChildren> = ({ children }) => (
  <ScrollableStack>
    <Stack rowGap={2} horizontal wrap>
      {children}
    </Stack>
  </ScrollableStack>
);

export default List;

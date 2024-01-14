import React, { FC, PropsWithChildren } from 'react';
import { ScrollableStack, Stack } from '../Flow';

const List: FC<PropsWithChildren> = ({ children }) => (
  <ScrollableStack>
    <Stack rowGap={2} columnGap={2} spaceBottom={4} horizontal wrap centered>
      {children}
    </Stack>
  </ScrollableStack>
);

export default List;

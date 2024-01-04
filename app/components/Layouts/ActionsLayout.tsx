import React, { FC, ReactNode } from 'react';
import { Stack } from '../Flow';

type ActionsLayoutProps = {
  content: ReactNode;
  actions?: ReactNode;
};

const ActionsLayout: FC<ActionsLayoutProps> = ({ content, actions }) => (
  <Stack grow={1} spaceX={3} spaceBetween>
    {content}
    {actions && (
      <Stack grow={0} shrink={0} spaceTop={2}>
        {actions}
      </Stack>
    )}
  </Stack>
);

export default ActionsLayout;
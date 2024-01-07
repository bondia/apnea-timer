import React, { FC, PropsWithChildren } from 'react';
import useAppTheme from '../../providers/AppThemeProvider/useAppTheme';
import { Spacer, Stack, Surface } from '../Flow';

type ItemProps = PropsWithChildren<{
  active?: boolean;
  width?: string;
}>;

const Item: FC<ItemProps> = ({ active = false, width = '100%', children }) => {
  const theme = useAppTheme();
  const elevation = active
    ? theme.elevations.ELEVATION_24
    : theme.elevations.ELEVATION_12;
  return (
    <Stack basis={width}>
      <Spacer>
        <Surface elevation={elevation} radius>
          {children}
        </Surface>
      </Spacer>
    </Stack>
  );
};

export default Item;

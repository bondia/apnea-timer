import React, { FC, PropsWithChildren } from 'react';
import { SurfaceColorsEnum } from '../../darkTheme';
import { Spacer, Stack } from '../Flow';
import Surface from '../Flow/Surface.styled';

type ItemProps = PropsWithChildren<{
  active?: boolean;
  width?: string;
}>;

const Item: FC<ItemProps> = ({ active = false, width = '100%', children }) => {
  const elevation = active ? SurfaceColorsEnum.ELEVATION_24 : SurfaceColorsEnum.ELEVATION_01;
  return (
    <Stack basis={width}>
      <Spacer xAxis={1}>
        <Surface elevation={elevation} radius>
          {children}
        </Surface>
      </Spacer>
    </Stack>
  );
};

export default Item;

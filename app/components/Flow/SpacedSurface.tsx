import React, { FC, PropsWithChildren } from 'react';
import Spacer, { MarginSpacerRuleProps } from './Spacer.styled';
import Surface, { SurfaceProps } from './Surface.styled';

type SpacedSurfaceProps = PropsWithChildren<
  SurfaceProps & MarginSpacerRuleProps
>;

const SpacedSurface: FC<SpacedSurfaceProps> = ({
  children,
  elevation,
  radius,
  xAxis,
  yAxis,
  top,
  right,
  bottom,
  left,
}) => (
  <Surface elevation={elevation} radius={radius}>
    <Spacer
      xAxis={xAxis}
      yAxis={yAxis}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    >
      {children}
    </Spacer>
  </Surface>
);

export default SpacedSurface;

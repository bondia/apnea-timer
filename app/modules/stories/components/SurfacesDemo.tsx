import React, { FC, PropsWithChildren } from 'react';
import { Stack, Surface } from '../../../components/Flow';
import useAppTheme from '../../../providers/AppThemeProvider/useAppTheme';

const SurfacesDemo: FC<PropsWithChildren> = ({ children }) => {
  const {
    elevations: { ELEVATION_00, ELEVATION_03, ELEVATION_06, ELEVATION_24 },
  } = useAppTheme();
  return (
    <Surface elevation={ELEVATION_00}>
      <Stack grow={1} horizontal>
        <Stack grow={1}>{children}</Stack>
        <Stack grow={1}>
          <Surface elevation={ELEVATION_03}>{children}</Surface>
        </Stack>
        <Stack grow={1}>
          <Surface elevation={ELEVATION_06}>{children}</Surface>
        </Stack>
        <Stack grow={1}>
          <Surface elevation={ELEVATION_24}>{children}</Surface>
        </Stack>
      </Stack>
    </Surface>
  );
};

export default SurfacesDemo;

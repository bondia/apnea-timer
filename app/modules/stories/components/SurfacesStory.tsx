import React, { FC } from 'react';
import { Stack, Surface } from '../../../components/Flow';
import SpacedSurface from '../../../components/Flow/SpacedSurface';
import Typography, {
  TypographyType,
} from '../../../components/Typography/Typography';
import useAppTheme from '../../../providers/AppThemeProvider/useAppTheme';

const SurfacesStory: FC = () => {
  const theme = useAppTheme();
  const primary = theme.colors.primary500;
  const seconadry = theme.colors.secondary500;
  const inverted = theme.colors.inverted700;
  return (
    <Surface elevation={theme.elevations.ELEVATION_00}>
      <Stack spaceX={3} spaceY={5} rowGap={5}>
        <SpacedSurface
          elevation={theme.elevations.ELEVATION_24}
          radius
          xAxis={5}
          yAxis={5}
        >
          <Typography type={TypographyType.BODY_1} color={primary}>
            Elevation 24
          </Typography>
        </SpacedSurface>
        <SpacedSurface
          elevation={theme.elevations.ELEVATION_16}
          radius
          xAxis={5}
          yAxis={5}
        >
          <Typography type={TypographyType.BODY_1} color={primary}>
            Elevation 16
          </Typography>
        </SpacedSurface>
        <SpacedSurface
          elevation={theme.elevations.ELEVATION_12}
          radius
          xAxis={5}
          yAxis={5}
        >
          <Typography type={TypographyType.BODY_1} color={primary}>
            Elevation 12
          </Typography>
        </SpacedSurface>
        <SpacedSurface
          elevation={theme.elevations.ELEVATION_06}
          radius
          xAxis={5}
          yAxis={5}
        >
          <Typography type={TypographyType.BODY_1} color={seconadry}>
            Elevation 06
          </Typography>
        </SpacedSurface>
        <SpacedSurface
          elevation={theme.elevations.ELEVATION_05}
          radius
          xAxis={5}
          yAxis={5}
        >
          <Typography type={TypographyType.BODY_1} color={seconadry}>
            Elevation 05
          </Typography>
        </SpacedSurface>
        <SpacedSurface
          elevation={theme.elevations.ELEVATION_04}
          radius
          xAxis={5}
          yAxis={5}
        >
          <Typography type={TypographyType.BODY_1} color={seconadry}>
            Elevation 04
          </Typography>
        </SpacedSurface>
        <SpacedSurface
          elevation={theme.elevations.ELEVATION_03}
          radius
          xAxis={5}
          yAxis={5}
        >
          <Typography type={TypographyType.BODY_1} color={inverted}>
            Elevation 03
          </Typography>
        </SpacedSurface>
        <SpacedSurface
          elevation={theme.elevations.ELEVATION_02}
          radius
          xAxis={5}
          yAxis={5}
        >
          <Typography type={TypographyType.BODY_1} color={inverted}>
            Elevation 02
          </Typography>
        </SpacedSurface>
        <SpacedSurface
          elevation={theme.elevations.ELEVATION_01}
          radius
          xAxis={5}
          yAxis={5}
        >
          <Typography type={TypographyType.BODY_1} color={inverted}>
            Elevation 01
          </Typography>
        </SpacedSurface>
        <SpacedSurface
          elevation={theme.elevations.ELEVATION_00}
          radius
          xAxis={5}
          yAxis={5}
        >
          <Typography type={TypographyType.BODY_1} color={inverted}>
            Elevation 00
          </Typography>
        </SpacedSurface>
      </Stack>
    </Surface>
  );
};

export default SurfacesStory;

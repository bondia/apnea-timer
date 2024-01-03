import React, { FC } from 'react';
import useAppTheme from '../../../components/AppThemeProvider/useAppTheme';
import { Spacer } from '../../../components/Flow';
import Surface from '../../../components/Flow/Surface.styled';
import Typography, { TypographyType } from '../../../components/Typography/Typography';

const SurfacesStory: FC = () => {
  const theme = useAppTheme();
  return (
    <Surface elevation={theme.elevations.ELEVATION_00}>
      <Spacer spacing={10} />
      <Spacer xAxis={5}>
        <Surface elevation={theme.elevations.ELEVATION_24} radius>
          <Spacer xAxis={5} yAxis={5}>
            <Typography type={TypographyType.BODY_1} color={theme.colors.primary900}>
              ELEVATION_24
            </Typography>
          </Spacer>
        </Surface>
        <Surface elevation={theme.elevations.ELEVATION_16} radius>
          <Spacer xAxis={5} yAxis={5}>
            <Typography type={TypographyType.BODY_1} color={theme.colors.primary900}>
              ELEVATION_16
            </Typography>
          </Spacer>
        </Surface>
        <Surface elevation={theme.elevations.ELEVATION_12} radius>
          <Spacer xAxis={5} yAxis={5}>
            <Typography type={TypographyType.BODY_1} color={theme.colors.primary900}>
              ELEVATION_12
            </Typography>
          </Spacer>
        </Surface>
        <Surface elevation={theme.elevations.ELEVATION_06} radius>
          <Spacer xAxis={5} yAxis={5}>
            <Typography type={TypographyType.BODY_1} color={theme.colors.primary900}>
              ELEVATION_06
            </Typography>
          </Spacer>
        </Surface>
        <Surface elevation={theme.elevations.ELEVATION_05} radius>
          <Spacer xAxis={5} yAxis={5}>
            <Typography type={TypographyType.BODY_1} color={theme.colors.primary900}>
              ELEVATION_05
            </Typography>
          </Spacer>
        </Surface>
        <Surface elevation={theme.elevations.ELEVATION_04} radius>
          <Spacer xAxis={5} yAxis={5}>
            <Typography type={TypographyType.BODY_1} color={theme.colors.primary900}>
              ELEVATION_04
            </Typography>
          </Spacer>
        </Surface>
        <Surface elevation={theme.elevations.ELEVATION_03} radius>
          <Spacer xAxis={5} yAxis={5}>
            <Typography type={TypographyType.BODY_1} color={theme.colors.primary900}>
              ELEVATION_03
            </Typography>
          </Spacer>
        </Surface>
        <Surface elevation={theme.elevations.ELEVATION_02} radius>
          <Spacer xAxis={5} yAxis={5}>
            <Typography type={TypographyType.BODY_1} color={theme.colors.secondary900}>
              ELEVATION_02
            </Typography>
          </Spacer>
        </Surface>
        <Surface elevation={theme.elevations.ELEVATION_01} radius>
          <Spacer xAxis={5} yAxis={5}>
            <Typography type={TypographyType.BODY_1} color={theme.colors.secondary900}>
              ELEVATION_01
            </Typography>
          </Spacer>
        </Surface>
        <Surface elevation={theme.elevations.ELEVATION_00} radius>
          <Spacer xAxis={5} yAxis={5}>
            <Typography type={TypographyType.BODY_1} color={theme.colors.secondary900}>
              ELEVATION_00
            </Typography>
          </Spacer>
        </Surface>
      </Spacer>
      <Spacer spacing={10} />
    </Surface>
  );
};

export default SurfacesStory;

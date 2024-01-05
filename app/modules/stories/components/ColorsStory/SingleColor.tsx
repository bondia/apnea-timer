import React, { FC } from 'react';
import { Spacer, Stack } from '../../../../components/Flow';
import SpacedSurface from '../../../../components/Flow/SpacedSurface';
import Typography from '../../../../components/Typography/Typography';
import useAppTheme from '../../../../providers/AppThemeProvider/useAppTheme';
import { AppTheme } from '../../../../themes/types';

type SingleColorProps = {
  name: string;
  intensity?: string;
};

const mapNameToColor = (theme: AppTheme, name: string, intensity?: string) =>
  theme.colors[`${name}${intensity || ''}`];

const SingleColor: FC<SingleColorProps> = ({ name, intensity }) => {
  const theme = useAppTheme();
  const color = mapNameToColor(theme, name, intensity);
  return (
    <Stack grow={1} spaceX={2} spaceY={3}>
      <Typography color={color} centered>
        {intensity || name}
      </Typography>
      <Spacer spacing={3} horizontal />
      <SpacedSurface elevation={color} xAxis={5} yAxis={3} radius />
    </Stack>
  );
};

export default SingleColor;

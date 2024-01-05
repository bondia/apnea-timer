import React, { FC } from 'react';
import { Spacer, Stack, Surface } from '../../../../components/Flow';
import Typography, {
  TypographyType,
} from '../../../../components/Typography/Typography';
import useAppTheme from '../../../../providers/AppThemeProvider/useAppTheme';

const ElevationsBlock: FC = () => {
  const { elevations } = useAppTheme();

  const base = elevations.ELEVATION_06;
  const content = elevations.ELEVATION_12;
  const widget = elevations.ELEVATION_16;
  const active = elevations.ELEVATION_24;

  return (
    <Surface elevation="#ffff">
      <Spacer spacing={10} />
      <Spacer spacing={10} />

      <Surface elevation={base} radius="25px">
        <Spacer>
          <Surface elevation={content} radius="25px">
            <Stack spaceX={5} spaceY={10} columnGap={5} horizontal spaceBetween>
              <Stack grow={1} shrink={0} basis="auto">
                <Surface elevation={widget} radius="25px">
                  <Spacer spacing={10} />
                  <Typography type={TypographyType.H6} centered>
                    Widget
                  </Typography>
                  <Spacer spacing={10} />
                </Surface>
              </Stack>

              <Stack grow={1} shrink={0} basis="auto">
                <Surface elevation={active} radius="25px">
                  <Spacer spacing={10} />
                  <Typography type={TypographyType.H6} centered>
                    Active
                  </Typography>
                  <Spacer spacing={10} />
                </Surface>
              </Stack>
            </Stack>

            <Typography type={TypographyType.H6} centered>
              Content
            </Typography>
            <Spacer spacing={10} />
          </Surface>
        </Spacer>
        <Spacer spacing={10} />
        <Spacer spacing={10} />
        <Typography type={TypographyType.H6} centered>
          Base Lavel
        </Typography>
        <Spacer spacing={10} />
        <Spacer spacing={10} />
        <Spacer spacing={10} />
        <Spacer spacing={10} />
      </Surface>
      <Spacer spacing={10} />
      <Spacer spacing={10} />
    </Surface>
  );
};

export default ElevationsBlock;

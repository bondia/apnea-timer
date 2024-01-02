import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { Spacer, Stack } from '../../components/Flow';
import Surface from '../../components/Flow/Surface.styled';
import SceneLayout from '../../components/Layouts/SceneLayout';
import Typography, { TypographyType } from '../../components/Typography/Typography';
import useAppTheme from '../../themes/useAppTheme';

const StoreisScene: FC = () => {
  const theme = useAppTheme();
  return (
    <SceneLayout>
      <ScrollView>
        <Spacer spacing={4} />
        <Typography type={TypographyType.H3}>TYPOGRAPHY</Typography>
        <Spacer top={2} left={4}>
          <Typography type={TypographyType.H1}>Header 1</Typography>
          <Typography type={TypographyType.H2}>Header 2</Typography>
          <Typography type={TypographyType.H3}>Header 3</Typography>
          <Typography type={TypographyType.H4}>Header 4</Typography>
          <Typography type={TypographyType.H5}>Header 5</Typography>
          <Typography type={TypographyType.H6}>Header 6</Typography>
          <Typography type={TypographyType.SUBTITLE_1}>Subtitle 1</Typography>
          <Typography type={TypographyType.SUBTITLE_2}>Subtitle 2</Typography>
          <Typography type={TypographyType.BODY_1}>Body 1</Typography>
          <Typography type={TypographyType.BODY_2}>Body 2</Typography>
          <Typography type={TypographyType.BUTTON}>Button</Typography>
          <Typography type={TypographyType.CAPTION}>Caption</Typography>
          <Typography type={TypographyType.OVERLINE}>Overline</Typography>
        </Spacer>

        <Spacer spacing={10} />

        <Typography type={TypographyType.H3}>STACK</Typography>
        <Stack spaceTop={2} spaceX={4} debug>
          <Typography type={TypographyType.BODY_1}>Text 1</Typography>
          <Typography type={TypographyType.BODY_1}>Text 2</Typography>
          <Typography type={TypographyType.BODY_1}>Text 3</Typography>
        </Stack>

        <Stack spaceTop={2} spaceX={4} horizontal debug>
          <Typography type={TypographyType.BODY_1}>Text 1</Typography>
          <Typography type={TypographyType.BODY_1}>Text 2</Typography>
          <Typography type={TypographyType.BODY_1}>Text 3</Typography>
        </Stack>

        <Stack spaceTop={2} spaceX={4} spaceAround horizontal debug>
          <Typography type={TypographyType.BODY_1}>Text 1</Typography>
          <Typography type={TypographyType.BODY_1}>Text 2</Typography>
          <Typography type={TypographyType.BODY_1}>Text 3</Typography>
        </Stack>

        <Stack spaceTop={2} spaceX={4} centered horizontal debug>
          <Typography type={TypographyType.BODY_1}>Text 1</Typography>
          <Typography type={TypographyType.BODY_1}>Text 2</Typography>
          <Typography type={TypographyType.BODY_1}>Text 3</Typography>
        </Stack>

        <Stack spaceTop={2} spaceX={4} columnGap={4} centered horizontal debug>
          <Typography type={TypographyType.BODY_1}>Text 1</Typography>
          <Typography type={TypographyType.BODY_1}>Text 2</Typography>
          <Typography type={TypographyType.BODY_1}>Text 3</Typography>
        </Stack>

        <Stack spaceTop={2} spaceX={4} wrap rowGap={10} centered horizontal debug>
          <Typography type={TypographyType.BODY_1}>Text 1</Typography>
          <Typography type={TypographyType.BODY_1}>Text 2</Typography>
          <Typography type={TypographyType.BODY_1}>Text 3</Typography>
          <Typography type={TypographyType.BODY_1}>Text 1</Typography>
          <Typography type={TypographyType.BODY_1}>Text 2</Typography>
          <Typography type={TypographyType.BODY_1}>Text 3</Typography>
          <Typography type={TypographyType.BODY_1}>Text 1</Typography>
          <Typography type={TypographyType.BODY_1}>Text 2</Typography>
          <Typography type={TypographyType.BODY_1}>Text 3</Typography>
        </Stack>

        <Spacer spacing={10} />

        <Typography type={TypographyType.H3}>SPACER</Typography>
        <Spacer top={2} left={4} right={4}>
          <Stack horizontal debug>
            <Spacer spacing={1} horizontal debug="red" />
            <Typography type={TypographyType.BODY_1}>Content 1</Typography>
            <Spacer spacing={4} horizontal debug="red" />
            <Typography type={TypographyType.BODY_1}>Content 2</Typography>
            <Spacer spacing={9} horizontal debug="red" />
            <Typography type={TypographyType.BODY_1}>Content 3</Typography>
            <Spacer spacing={10} horizontal debug="red" />
          </Stack>

          <Stack horizontal debug>
            <Spacer spacing={2} horizontal debug="red" />
            <Typography type={TypographyType.BODY_1}>Content 2</Typography>
            <Spacer spacing={3} horizontal debug="red" />
            <Typography type={TypographyType.BODY_1}>Content 3</Typography>
            <Spacer spacing={4} horizontal debug="red" />
            <Typography type={TypographyType.BODY_1}>Content 4</Typography>
            <Spacer spacing={10} horizontal debug="red" />
          </Stack>

          <Stack debug>
            <Spacer spacing={2} debug="red" />
            <Typography type={TypographyType.BODY_1}>Content 2</Typography>
            <Spacer spacing={3} debug="red" />
            <Typography type={TypographyType.BODY_1}>Content 3</Typography>
            <Spacer spacing={4} debug="red" />
            <Typography type={TypographyType.BODY_1}>Content 4</Typography>
            <Spacer spacing={10} debug="red" />
            <Typography type={TypographyType.BODY_1}>Content 10</Typography>
          </Stack>
        </Spacer>

        <Spacer spacing={10} />

        <Typography type={TypographyType.H3}>SURFACES</Typography>
        <Surface elevation={theme.elevations.ELEVATION_00}>
          <Spacer spacing={10} />
          <Spacer xAxis={10}>
            <Surface elevation={theme.elevations.ELEVATION_24} radius>
              <Spacer xAxis={10} yAxis={5}>
                <Typography type={TypographyType.BODY_1} color={theme.oldColors.COLOR_LIGHT}>
                  ELEVATION_24
                </Typography>
              </Spacer>
            </Surface>
            <Surface elevation={theme.elevations.ELEVATION_06} radius>
              <Spacer xAxis={10} yAxis={5}>
                <Typography type={TypographyType.BODY_1} color={theme.oldColors.COLOR_LIGHT}>
                  ELEVATION_06
                </Typography>
              </Spacer>
            </Surface>
            <Surface elevation={theme.elevations.ELEVATION_03} radius>
              <Spacer xAxis={10} yAxis={5}>
                <Typography type={TypographyType.BODY_1} color={theme.oldColors.COLOR_LIGHT}>
                  ELEVATION_03
                </Typography>
              </Spacer>
            </Surface>
            <Surface elevation={theme.elevations.ELEVATION_02} radius>
              <Spacer xAxis={10} yAxis={5}>
                <Typography type={TypographyType.BODY_1} color={theme.oldColors.COLOR_LIGHT}>
                  ELEVATION_02
                </Typography>
              </Spacer>
            </Surface>
            <Surface elevation={theme.elevations.ELEVATION_01} radius>
              <Spacer xAxis={10} yAxis={5}>
                <Typography type={TypographyType.BODY_1} color={theme.oldColors.COLOR_LIGHT}>
                  ELEVATION_01
                </Typography>
              </Spacer>
            </Surface>
            <Surface elevation={theme.elevations.ELEVATION_00} radius>
              <Spacer xAxis={10} yAxis={5}>
                <Typography type={TypographyType.BODY_1} color={theme.oldColors.COLOR_LIGHT}>
                  ELEVATION_00
                </Typography>
              </Spacer>
            </Surface>
          </Spacer>
          <Spacer spacing={10} />
        </Surface>

        <Spacer spacing={10} />
      </ScrollView>
    </SceneLayout>
  );
};

export default StoreisScene;

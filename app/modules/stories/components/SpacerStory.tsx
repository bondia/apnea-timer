import React, { FC } from 'react';
import { Spacer, Stack } from '../../../components/Flow';
import Typography, { TypographyType } from '../../../components/Typography/Typography';

const SpacerStory: FC = () => (
  <>
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
  </>
);

export default SpacerStory;

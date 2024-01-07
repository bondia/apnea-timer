import React, { FC } from 'react';
import { Stack } from '../../../components/Flow';
import Typography, { TypographyType } from '../../../components/Typography/Typography';

const StackStory: FC = () => (
  <>
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
  </>
);

export default StackStory;

import React, { FC } from 'react';
import SceneLayout from '../../Layouts/SceneLayout';
import Typography, { TypographyType } from '../../Typography/Typography';

const TypographyScene: FC = () => (
  <SceneLayout>
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
  </SceneLayout>
);

export default TypographyScene;

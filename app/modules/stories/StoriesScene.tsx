import React, { FC } from 'react';
import SceneWrapper from '../../components/SceneWrapper/SceneWrapper';
import Typography, { TypographyType } from '../../components/Typography/Typography';

const StoreisScene: FC = () => (
  <SceneWrapper>
    <Typography type={TypographyType.H1}>H1 - Hello world</Typography>
    <Typography type={TypographyType.H2}>H2 - Hello world</Typography>
    <Typography type={TypographyType.H3}>H3 - Hello world</Typography>
    <Typography type={TypographyType.H4}>H4 - Hello world</Typography>
    <Typography type={TypographyType.H5}>H5 - Hello world</Typography>
    <Typography type={TypographyType.H6}>H6 - Hello world</Typography>
    <Typography type={TypographyType.SUBTITLE_1}>SUBTITLE_1 - Hello world</Typography>
    <Typography type={TypographyType.SUBTITLE_2}>SUBTITLE_2 - Hello world</Typography>
    <Typography type={TypographyType.BODY_1}>BODY_1 - Hello world</Typography>
    <Typography type={TypographyType.BODY_2}>BODY_2 - Hello world</Typography>
    <Typography type={TypographyType.BUTTON}>BUTTON - Hello world</Typography>
    <Typography type={TypographyType.CAPTION}>CAPTION - Hello world</Typography>
    <Typography type={TypographyType.OVERLINE}>OVERLINE - Hello world</Typography>
  </SceneWrapper>
);

export default StoreisScene;

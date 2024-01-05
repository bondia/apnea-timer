import React, { FC } from 'react';
import { Stack } from '../../../../components/Flow';
import Typography, {
  TypographyType,
} from '../../../../components/Typography/Typography';
import SurfacesDemo from '../SurfacesDemo';
import SingleColor from './SingleColor';

type ColorBlockProps = {
  title: string;
  colorName: string;
};

const ColorBlock: FC<ColorBlockProps> = ({ title, colorName }) => {
  return (
    <>
      <Typography type={TypographyType.H4}>{title}</Typography>

      <Stack grow={1} spaceTop={4} spaceBottom={8}>
        <SurfacesDemo>
          <SingleColor name={colorName} intensity="900" />
        </SurfacesDemo>
        <SurfacesDemo>
          <SingleColor name={colorName} intensity="800" />
        </SurfacesDemo>
        <SurfacesDemo>
          <SingleColor name={colorName} intensity="700" />
        </SurfacesDemo>
        <SurfacesDemo>
          <SingleColor name={colorName} intensity="600" />
        </SurfacesDemo>
        <SurfacesDemo>
          <SingleColor name={colorName} intensity="500" />
        </SurfacesDemo>
        <SurfacesDemo>
          <SingleColor name={colorName} intensity="400" />
        </SurfacesDemo>
        <SurfacesDemo>
          <SingleColor name={colorName} intensity="300" />
        </SurfacesDemo>
        <SurfacesDemo>
          <SingleColor name={colorName} intensity="200" />
        </SurfacesDemo>
        <SurfacesDemo>
          <SingleColor name={colorName} intensity="100" />
        </SurfacesDemo>
        <SurfacesDemo>
          <SingleColor name={colorName} intensity="050" />
        </SurfacesDemo>
      </Stack>
    </>
  );
};

export default ColorBlock;

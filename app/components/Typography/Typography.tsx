import React, { FC, ReactNode } from 'react';
import * as SC from './Typography.syled';

export enum TypographyType {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  SUBTITLE_1 = 'Subtitle1',
  SUBTITLE_2 = 'Subtitle2',
  BODY_1 = 'Body1',
  BODY_2 = 'Body2',
  BUTTON = 'Button',
  CAPTION = 'Caption',
  OVERLINE = 'Overline',
}

type TypographyComponent = {
  children: ReactNode;
} & SC.TypographyStylesType;

type TypographyProps = {
  type?: TypographyType;
} & TypographyComponent;

const Typography: FC<TypographyProps> = ({ children, type = TypographyType.BODY_1, color, centered }) => {
  const Component: FC<TypographyComponent> = SC[type] || SC[TypographyType.BODY_1];
  if (!Component) {
    return null;
  }
  return (
    <Component color={color} centered={centered}>
      {children}
    </Component>
  );
};

export default Typography;

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

type TypographyProps = {
  children: ReactNode;
  type?: TypographyType;
};

const Typography: FC<TypographyProps> = ({ children, type = TypographyType.BODY_1 }) => {
  const Component = SC[type] || SC[TypographyType.BODY_1];
  return Component ? <Component>{children}</Component> : null;
};

export default Typography;

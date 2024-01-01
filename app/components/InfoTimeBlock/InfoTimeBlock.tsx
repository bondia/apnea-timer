import React, { FC } from 'react';
import { COLOR_LIGHT } from '../../commonStyles';
import secondsToTimeString from '../../utils/time/secondsToTimeString';
import Typography, { TypographyType } from '../Typography/Typography';

type InfoTimeBlockProps = {
  label?: string;
  labelType?: TypographyType;
  labelColor?: string;
  timestamp?: number;
  contentType?: TypographyType;
  contentColor?: string;
};

const InfoTimeBlock: FC<InfoTimeBlockProps> = ({
  label,
  labelType = TypographyType.BODY_1,
  labelColor = COLOR_LIGHT,
  timestamp,
  contentType = TypographyType.H4,
  contentColor = COLOR_LIGHT,
}) => (
  <>
    {label && (
      <Typography type={labelType} color={labelColor} centered>
        {label}
      </Typography>
    )}
    <Typography type={contentType} color={contentColor} centered>
      {timestamp !== undefined ? secondsToTimeString(timestamp) : undefined}
    </Typography>
  </>
);

export default InfoTimeBlock;

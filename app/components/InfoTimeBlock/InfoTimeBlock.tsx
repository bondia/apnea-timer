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

const InfoTimeBlock: FC<InfoTimeBlockProps> = props => {
  const {
    label,
    labelType = TypographyType.BODY_1,
    labelColor,
    timestamp,
    contentType = TypographyType.H4,
    contentColor = COLOR_LIGHT,
  } = props;
  return (
    <>
      {label && (
        <Typography type={labelType} color={labelColor} centered>
          {label}
        </Typography>
      )}
      <Typography type={contentType} color={contentColor} centered>
        {timestamp ? secondsToTimeString(timestamp) : undefined}
      </Typography>
    </>
  );
};

export default InfoTimeBlock;

import React, { FC } from 'react';
import { COLOR_LIGHT } from '../../commonStyles';
import secondsToTimeString from '../../utils/time/secondsToTimeString';
import { Stack } from '../Flow';
import Typography, { TypographyType } from '../Typography/Typography';

type InfoBlockProps = {
  label?: string;
  labelType?: TypographyType;
  labelColor?: string;
  content?: number;
  contentType?: TypographyType;
  contentColor?: string;
  isTimestamp?: boolean;
};

const InfoBlock: FC<InfoBlockProps> = ({
  label,
  labelType = TypographyType.BODY_1,
  labelColor = COLOR_LIGHT,
  content,
  contentType = TypographyType.H4,
  contentColor = COLOR_LIGHT,
  isTimestamp,
}) => (
  <Stack>
    {label && (
      <Typography type={labelType} color={labelColor} centered>
        {label}
      </Typography>
    )}
    <Typography type={contentType} color={contentColor} centered>
      {content !== undefined && isTimestamp ? secondsToTimeString(content) : content}
    </Typography>
  </Stack>
);

export default InfoBlock;

import React, { FC } from 'react';
import useAppTheme from '../../themes/useAppTheme';
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
  labelColor,
  content,
  contentType = TypographyType.H4,
  contentColor,
  isTimestamp,
}) => {
  const { oldColors } = useAppTheme();
  return (
    <Stack>
      {label && (
        <Typography type={labelType} color={labelColor || oldColors.COLOR_LIGHT} centered>
          {label}
        </Typography>
      )}
      <Typography type={contentType} color={contentColor || oldColors.COLOR_LIGHT} centered>
        {content !== undefined && isTimestamp ? secondsToTimeString(content) : content}
      </Typography>
    </Stack>
  );
};

export default InfoBlock;

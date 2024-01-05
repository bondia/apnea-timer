import React, { FC } from 'react';
import useAppTheme from '../../providers/AppThemeProvider/useAppTheme';
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
  const { colors } = useAppTheme();
  return (
    <Stack>
      {label && (
        <Typography
          type={labelType}
          color={labelColor || colors.primary900}
          centered
        >
          {label}
        </Typography>
      )}
      <Typography
        type={contentType}
        color={contentColor || colors.primary900}
        centered
      >
        {content !== undefined && isTimestamp
          ? secondsToTimeString(content)
          : content}
      </Typography>
    </Stack>
  );
};

export default InfoBlock;

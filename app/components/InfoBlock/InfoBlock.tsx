import React, { FC } from 'react';
import useAppTheme from '../../hooks/useAppTheme';
import milisecondsToTimeString from '../../utils/time/milisecondsToTimeString';
import { Stack } from '../Flow';
import Typography, { TypographyType } from '../Typography/Typography';

type InfoBlockProps = {
  label?: string;
  labelType?: TypographyType;
  labelColor?: string;
  miliseconds?: number;
  content?: string | number;
  contentType?: TypographyType;
  contentColor?: string;
};

const InfoBlock: FC<InfoBlockProps> = ({
  label,
  labelType = TypographyType.BODY_1,
  labelColor,
  miliseconds,
  content,
  contentType = TypographyType.H4,
  contentColor,
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
        {miliseconds ? milisecondsToTimeString(miliseconds) : content}
      </Typography>
    </Stack>
  );
};

export default InfoBlock;

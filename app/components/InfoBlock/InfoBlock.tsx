import React, { FC } from 'react';
import { View } from 'react-native';
import { COLOR_LIGHT } from '../../commonStyles';
import secondsToTimeString from '../../utils/time/secondsToTimeString';
import Typography, { TypographyType } from '../Typography/Typography';

type InfoBlockProps = {
  title?: string;
  timeContent: number;
  textColor?: string;
};

const InfoBlock: FC<InfoBlockProps> = ({ title, timeContent, textColor = COLOR_LIGHT }) => (
  <View>
    {title && (
      <Typography type={TypographyType.H6} color={textColor} centered>
        {title}
      </Typography>
    )}

    <Typography type={TypographyType.H3} color={textColor} centered>
      {secondsToTimeString(timeContent)}
    </Typography>
  </View>
);

export default InfoBlock;

import React, { FC } from 'react';
import { TextStyle } from 'react-native';
import { COLOR_LIGHT, FONT_SIZE } from '../../commonStyles';
import secondsToTimeString from '../../utils/time/secondsToTimeString';
import TextComponent from '../TextComponent/TextComponent';
import * as SC from './InfoBlock.styled';

type InfoBlockProps = {
  title?: string;
  timeContent?: number;
  rawContent?: number | string;
  textColor?: string;
  width?: string;
  labelTextSize?: FONT_SIZE;
  textSize?: FONT_SIZE;
};

const InfoBlock: FC<InfoBlockProps> = props => {
  const {
    title,
    timeContent,
    rawContent,
    width,
    textColor = COLOR_LIGHT,
    labelTextSize = FONT_SIZE.FONT_SIZE_M,
    textSize = FONT_SIZE.FONT_SIZE_L,
  } = props;

  const hederStyles: TextStyle = { ...SC.baseStyles.headerLabel, ...{ color: textColor, fontSize: labelTextSize } };

  const styles: TextStyle = textColor
    ? { ...SC.baseStyles.headerText, ...{ color: textColor, fontSize: textSize } }
    : SC.baseStyles.headerText;

  return (
    <SC.BlockWrapper width={width}>
      {title && <TextComponent style={hederStyles}>{title}</TextComponent>}
      <TextComponent style={styles}>
        {timeContent !== undefined ? secondsToTimeString(timeContent) : rawContent}
      </TextComponent>
    </SC.BlockWrapper>
  );
};

export default InfoBlock;

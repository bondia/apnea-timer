import React from 'react';
import { TextStyle } from 'react-native';
import secondsToTimeString from '../../utils/time/secondsToTimeString';
import TextComponent from '../TextComponent';
import * as SC from './InfoBlock.styled';

interface InfoBlockProps {
  title: string;
  timeContent?: number;
  rawContent?: number | string;
  textColor?: string;
}
export default function InfoBlock(props: InfoBlockProps): JSX.Element {
  const { title, timeContent, rawContent, textColor } = props;

  const styles: TextStyle = textColor
    ? { ...SC.baseStyles.headerText, ...{ color: textColor } }
    : SC.baseStyles.headerText;
  return (
    <SC.BlockWrapper>
      <TextComponent style={SC.baseStyles.headerLabel}>{title}</TextComponent>
      <TextComponent style={styles}>
        {timeContent !== undefined ? secondsToTimeString(timeContent) : rawContent}
      </TextComponent>
    </SC.BlockWrapper>
  );
}

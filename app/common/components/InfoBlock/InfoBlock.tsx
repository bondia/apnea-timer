import React from 'react';

import secondsToTimeString from '../../utils/time/secondsToTimeString';

import * as SC from './InfoBlock.styled';
import TextComponent from '../TextComponent';
import { TextStyle } from 'react-native';

interface InfoBlockProps {
    title: string;
    timeContent?: number;
    rawContent?: number | string;
    textColor?: string;
}
export default function InfoBlock(props: InfoBlockProps): JSX.Element {
    const {
        title,
        timeContent,
        rawContent,
        textColor
    } = props;

    const styles: TextStyle =
        textColor ?
        { ...SC.baseStyles.headerText, ...{ color: textColor } }  :
        SC.baseStyles.headerText
        ;

    return (
        <SC.BlockWrapper>
            <TextComponent style={SC.baseStyles.headerLabel}>
                {title}
            </TextComponent>
            <TextComponent style={styles}>
                {timeContent !== undefined ? secondsToTimeString(timeContent) : rawContent}
            </TextComponent>
        </SC.BlockWrapper>
    );
}
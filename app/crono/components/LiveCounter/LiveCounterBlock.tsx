import React from 'react';

import secondsToTimeString from '../../../common/utils/time/secondsToTimeString';

import * as SC from './LiveCounter.styled';
import TextComponent from '../../../common/components/TextComponent';
import { TextStyle } from 'react-native';

interface LiveCounterBlockProps {
    title: string;
    timeContent?: number;
    rawContent?: number | string;
    textColor?: string;
}
export default function LiveCounterBlock(props: LiveCounterBlockProps): JSX.Element {
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
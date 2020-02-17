import React from 'react';
import {
    View,
    TouchableHighlight,
    StyleProp,
    TextStyle,
    StyleSheet
} from 'react-native';

import useLongTouchHandling from './useLongTouchHandling';

import * as SC from './LongTouchButton.styled';

interface LongTouchButtonProps {
    title?: string;
    active?: boolean;
    enabled?: boolean;
    style?: StyleProp<TextStyle>;
    onPressStart?: () => void;
    onShortPressEnd?: () => void;
    onLongPressStart?: () => void;
    onLongPressEnd?: () => void;
    onPressInterval?: () => void;
    pressIntervalRefresh?: number;
}

export default function LongTouchButton(props: LongTouchButtonProps): JSX.Element {
    // default props
    const {
        title = '-- --',
        active = false,
        enabled = true,
        style = undefined,
        onPressStart,
        onShortPressEnd,
        onLongPressStart,
        onLongPressEnd,
        onPressInterval,
        pressIntervalRefresh,
    } = props;

    // Attatch Hook for handling long touches
    const {
        onPressIn,
        onLongPress,
        onPressOut
    } = useLongTouchHandling({
        enabled,
        onPressStart,
        onShortPressEnd,
        onLongPressStart,
        onLongPressEnd,
        onPressInterval,
        pressIntervalRefresh
    });

    return (
        <SC.LongTouchButtonContainer>
            <TouchableHighlight
                onPressIn={onPressIn}
                onLongPress={onLongPress}
                onPressOut={onPressOut}
                underlayColor="transparent"
            >
                <SC.ButtonWrapper active={active}>
                    <SC.ButtonText>{title}</SC.ButtonText>
                </SC.ButtonWrapper>
            </TouchableHighlight>
        </SC.LongTouchButtonContainer>
    );
}
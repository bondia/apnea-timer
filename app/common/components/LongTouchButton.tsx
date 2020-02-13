import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, StyleProp, TextStyle } from 'react-native';
import useLongTouchHandling from './useLongTouchHandling'; 

import { FONT_CLOLR_GREY_LIGHT, COLOR_LIGHT } from '../styles/commonStyles';

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
        <View style={[style, baseStyles.container]}>
            <TouchableHighlight
                onPressIn={onPressIn}
                onLongPress={onLongPress}
                onPressOut={onPressOut}
                underlayColor={FONT_CLOLR_GREY_LIGHT}
            >
                <View style={active ? [baseStyles.button, baseStyles.active] : baseStyles.button}>
                    <Text style={baseStyles.text}>{title}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const baseStyles = StyleSheet.create({
    container: {},
    button: {
        padding: 20,
        backgroundColor: FONT_CLOLR_GREY_LIGHT,
        borderRadius: 3,
        margin: 5
    },
    text: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 20
    },
    active: {
        backgroundColor: COLOR_LIGHT
    }
});

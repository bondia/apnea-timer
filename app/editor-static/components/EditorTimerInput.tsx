import React from 'react';
import { StyleSheet } from 'react-native';

import * as enums from '../../editor/enums';
import secondsToTimeString from '../../common/utils/time/secondsToTimeString';

import * as SC from './EditorTimerInput.styled';
import { FONT_COLOR_GREY, COLOR_RED_NORMAL, COLOR_GREEN_NORMAL } from '../../common/styles/commonStyles';

import LongTouchButton from '../../common/components/LongTouchButton';
import TextComponent from '../../common/components/TextComponent';

interface EditorTimerInputProps {
    index: number;
    duration?: number;
    type?: string;
    setNumber?: number;
    zombie?: boolean;
    increaseAction: (index: number, amount: number) => void;
    decreaseAction: (index: number, amount: number) => void;
}

export default function EditorTimerInput(props: EditorTimerInputProps): JSX.Element {
    const {
        index,
        duration = 0,
        type = enums.SET_TYPE_PREPARE,
        setNumber = 0,
        zombie = false,
        increaseAction = null,
        decreaseAction = null
    } = props;


    let clockColor = enums.SET_TYPE_PREPARE === type ? COLOR_GREEN_NORMAL : COLOR_RED_NORMAL;
    clockColor = zombie ? FONT_COLOR_GREY : clockColor;

    // TODO: Move to styled with text component
    const styles = StyleSheet.create({
        setNumber: {
            flex: 1,
            textAlign: 'left',
            paddingTop: 33,
            lineHeight: 15,
            fontSize: 15,
            color: FONT_COLOR_GREY
        },
        clock: {
            paddingTop: 25,
            flex: 3,
            color: clockColor,
            fontSize: 30,
            lineHeight: 30,
            textAlign: 'center'
        }
    });

    return (
        <SC.Container>
            <SC.ButtonWrapper>
                <LongTouchButton
                    title="-"
                    onPressStart={() => decreaseAction(index, 1)}
                    onPressInterval={() => decreaseAction(index, 5)}
                />
            </SC.ButtonWrapper>

            <TextComponent style={styles.clock}>
                {secondsToTimeString(duration)}
            </TextComponent>

            <TextComponent style={styles.setNumber}>
                ({setNumber})
            </TextComponent>

            <SC.ButtonWrapper>
                <LongTouchButton
                    title="+"
                    onPressStart={() => increaseAction(index, 1)}
                    onPressInterval={() => increaseAction(index, 5)}
                />
            </SC.ButtonWrapper>
        </SC.Container>
    );
}

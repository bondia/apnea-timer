import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';

import findRunningSet from 'app/crono/pure/findRunningSet';
import secondsToTimeString from 'app/common/utils/time/secondsToTimeString';
import {
    FONT_COLOR_GREY,
    FONT_SIZE_L,
    COLOR_LIGHT,
    COLOR_RED_NORMAL,
    COLOR_GREEN_NORMAL
} from 'app/common/styles/commonStyles';
import * as enums from 'app/editor/enums';

import TextComponent from 'app/common/components/TextComponent';

export default class LiveCounter extends React.PureComponent {
    static propTypes = {
        crono: ImmutablePropTypes.map.isRequired
    };

    getCurrentSet() {
        const { crono } = this.props;
        return findRunningSet(crono.get('sets'));
    }

    render() {
        const { crono } = this.props;
        const tableType = crono.getIn(['trainingTable', 'type']);
        const spentTime = crono.getIn(['running', 'clock']);
        const totalTime = crono.getIn(['running', 'countdown']);
        const contractions = crono.getIn(['running', 'contractions']);

        // set data
        const current = this.getCurrentSet();
        const setType = current ? current.get('type') : null;
        const mode = current ? current.getIn(['running', 'mode']) : null;
        const countdown = current ? current.getIn(['running', 'countdown']) : null;
        const pos = current ? current.get('pos') : 0;
        const currentSet = pos <= 1 ? 1 : Math.floor(pos/2)+1;

        // current set styles
        let currentSetStyles = baseStyles.headerText;
        currentSetStyles =
            enums.SET_TYPE_HOLD === setType ? [currentSetStyles, { color: COLOR_RED_NORMAL }] : currentSetStyles;
        currentSetStyles =
            enums.SET_TYPE_PREPARE === setType ? [currentSetStyles, { color: COLOR_GREEN_NORMAL }] : currentSetStyles;

        return (
            <View style={[this.props.style, baseStyles.wrapper]}>
                <View style={baseStyles.header}>
                {enums.TABLE_TYPE_ENDURANCE === tableType && (
                    <View style={baseStyles.headerBlock}>
                        <TextComponent style={baseStyles.headerLabel}>Targeting</TextComponent>
                        <TextComponent style={baseStyles.headerText}>{spentTime > 0 ? secondsToTimeString(spentTime+totalTime) : secondsToTimeString(totalTime)}</TextComponent>
                    </View>
                )}

                {enums.TABLE_TYPE_ENDURANCE === tableType && (
                    <View style={baseStyles.headerBlock}>
                        <TextComponent style={baseStyles.headerLabel}>Spent Time</TextComponent>
                        <TextComponent style={baseStyles.headerText}>{spentTime > 0 ? secondsToTimeString(spentTime) : '00:00'}</TextComponent>
                    </View>
                )}

                {enums.TABLE_TYPE_ENDURANCE === tableType && (
                    <View style={baseStyles.headerBlock}>
                        <TextComponent style={baseStyles.headerLabel}>Current Dive</TextComponent>
                        <TextComponent style={baseStyles.headerText}>{currentSet}</TextComponent>
                    </View>
                )}

                {enums.TABLE_TYPE_ENDURANCE !== tableType && (
                    <View style={baseStyles.headerBlock}>
                        <TextComponent style={baseStyles.headerLabel}>Remaining Time</TextComponent>
                        <TextComponent style={baseStyles.headerText}>{secondsToTimeString(totalTime)}</TextComponent>
                    </View>
                )}

                {enums.TABLE_TYPE_ENDURANCE !== tableType && (
                    <View style={baseStyles.headerBlock}>
                        <TextComponent style={baseStyles.headerLabel}>Contractions</TextComponent>
                        <TextComponent style={baseStyles.headerText}>{secondsToTimeString(contractions)}</TextComponent>
                    </View>
                )}

                {current && mode !== enums.SET_MODE_FINISHED && (
                    <View style={baseStyles.headerBlock}>
                        <TextComponent style={baseStyles.headerLabel}>
                            {enums.SET_TYPE_HOLD === setType ? 'Breath Hold' : ''}
                            {enums.SET_TYPE_PREPARE === setType ? 'Breath Up' : ''}
                        </TextComponent>

                        <TextComponent style={currentSetStyles}>{secondsToTimeString(countdown)}</TextComponent>
                    </View>
                )}

                </View>
            </View>
        );
    }
}

const baseStyles = StyleSheet.create({
    wrapper: {
        flex: 2
    },

    // HEADER
    header: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerBlock: {
        width: '50%'
    },

    headerLabel: {
        textAlign: 'center',
        color: FONT_COLOR_GREY
    },

    headerText: {
        textAlign: 'center',
        fontSize: FONT_SIZE_L,
        color: COLOR_LIGHT
    }
});
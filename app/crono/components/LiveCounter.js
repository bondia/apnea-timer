import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';

import secondsToTimeString from 'app/common/utils/time/secondsToTimeString';
import { FONT_COLOR_GREY, FONT_SIZE_L, COLOR_LIGHT } from 'app/common/styles/commonStyles';
import * as enums from 'app/editor/enums';

import TextComponent from 'app/common/components/TextComponent';

export default class LiveCounter extends React.PureComponent {
    static propTypes = {
        crono: ImmutablePropTypes.map.isRequired
    };

    getCurrentSet() {
        const { crono } = this.props;
        const sets = crono.getIn(['sets']);

        let current = sets.find(e => e.getIn(['running', 'mode']) === enums.SET_MODE_RUNNING);
        return current ? current : null;
    }

    render() {
        const { crono } = this.props;
        const totalTime = crono.getIn(['trainingTable', 'running', 'countdown']);

        // set data
        const current = this.getCurrentSet();
        const setType = current ? current.get('type') : null;
        const mode = current ? current.getIn(['running', 'mode']) : null;
        const countdown = current ? current.getIn(['running', 'countdown']) : null;

        return (
            <View style={[this.props.style, baseStyles.wrapper]}>
                <View style={baseStyles.header}>
                    {current &&
                    mode !== enums.SET_MODE_FINISHED && (
                        <View style={baseStyles.headerBlock}>
                            <TextComponent style={baseStyles.headerLabel}>
                                {enums.SET_TYPE_HOLD === setType ? 'Breath Hold' : ''}
                                {enums.SET_TYPE_PREPARE === setType ? 'Breath Up' : ''}
                            </TextComponent>

                            <TextComponent style={baseStyles.headerText}>
                                {secondsToTimeString(countdown)}
                            </TextComponent>
                        </View>
                    )}

                    <View style={baseStyles.headerBlock}>
                        <TextComponent style={baseStyles.headerLabel}>Remaining Time</TextComponent>
                        <TextComponent style={baseStyles.headerText}>{secondsToTimeString(totalTime)}</TextComponent>
                    </View>
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
        flexDirection: 'row'
    },

    headerBlock: {
        flex: 1,
        justifyContent: 'center'
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

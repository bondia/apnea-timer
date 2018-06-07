import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Actions } from 'react-native-router-flux';
import * as tableEnums from 'app/editor/enums';

import findRunningSet from '../pure/findRunningSet';

import LongTouchButton from 'app/common/components/LongTouchButton';

export default class CronoButtonSet extends React.PureComponent {
    static propTypes = {
        crono: ImmutablePropTypes.map.isRequired,
        cronoActions: PropTypes.object.isRequired
    };

    canTrackContractions() {
        const { crono } = this.props;
        const current = findRunningSet(crono.get('sets'));
        const setType = current.get('type');
        return current && tableEnums.SET_TYPE_HOLD === setType;
    }

    handleStartAuto() {
        this.handleStart(tableEnums.CRONO_MODE_AUTO);
    }

    handleStartCoach() {
        this.handleStart(tableEnums.CRONO_MODE_COACH);
    }

    handleStart(mode) {
        const { cronoActions } = this.props;
        cronoActions.startCrono(mode);
    }

    handleSkip() {
        const { crono, cronoActions } = this.props;
        const current = findRunningSet(crono.get('sets'));
        if (current != null) {
            cronoActions.skipSet(current.get('pos'));
        }
    }

    handleContraction() {
        const { cronoActions } = this.props;
        cronoActions.trackContraction();
    }

    handleFinish() {
        Actions.pop();
        this.props.cronoActions.clearCrono();
    }

    render() {
        const { crono } = this.props;
        const clock = crono.getIn(['trainingTable', 'running', 'clock']);
        return (
            <View style={baseStyles.container}>
                {clock < 0 && (
                    <LongTouchButton title="Auto" onPress={this.handleStartAuto.bind(this)} style={baseStyles.button} />
                )}

                {clock < 0 && (
                    <LongTouchButton
                        title="Coach"
                        onPress={this.handleStartCoach.bind(this)}
                        style={baseStyles.button}
                    />
                )}

                {clock >= 0 && (
                    <LongTouchButton title="Skip" onPress={this.handleSkip.bind(this)} style={baseStyles.button} />
                )}

                {clock >= 0 &&
                this.canTrackContractions() && (
                    <LongTouchButton
                        title="1st Cont"
                        onPress={this.handleContraction.bind(this)}
                        style={baseStyles.button}
                    />
                )}

                <LongTouchButton title="Finish" onPress={this.handleFinish.bind(this)} style={baseStyles.button} />
            </View>
        );
    }
}

const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 74,
        flexDirection: 'row'
    },

    button: {
        justifyContent: 'center',
        flex: 1
    }
});

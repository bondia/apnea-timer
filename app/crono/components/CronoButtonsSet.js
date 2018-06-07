import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Actions } from 'react-native-router-flux';
import * as tableEnums from 'app/editor/enums';

import LongTouchButton from 'app/common/components/LongTouchButton';

export default class CronoButtonSet extends React.PureComponent {

    static propTypes = {
        crono: ImmutablePropTypes.map.isRequired,
        cronoActions: PropTypes.object.isRequired
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
        const current = crono.getIn([ 'sets' ])
                            .find(s => s.getIn([ 'running', 'mode' ]) === tableEnums.SET_MODE_RUNNING);
        if (current) {
            cronoActions.skipSet(current.get('pos'));
        }
    }

    handleFinish() {
        Actions.pop();
        this.props.cronoActions.clearCrono();
    }

    render() {
        const { crono } = this.props;
        const clock = crono.getIn([ 'trainingTable', 'running', 'clock' ]);
        return (
            <View style={baseStyles.container}>
            {clock < 0 &&
                <LongTouchButton    title="Auto"
                                    onPress={this.handleStartAuto.bind(this)}
                                    style={baseStyles.button}
                                    />
            }

            {clock < 0 &&
                <LongTouchButton    title="Coach"
                                    onPress={this.handleStartCoach.bind(this)}
                                    style={baseStyles.button}
                                    />
            }

            {clock >= 0 &&
                <LongTouchButton    title="Skip"
                                    onPress={this.handleSkip.bind(this)}
                                    style={baseStyles.button}
                                    />
            }

                <LongTouchButton    title="Finish"
                                    onPress={this.handleFinish.bind(this)}
                                    style={baseStyles.button}
                                    />
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
        flex: 1,
    }
});

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import * as enums from '../enums';
import secondsToTimeString from 'app/common/utils/time/secondsToTimeString';
import { FONT_COLOR_GREY } from 'app/common/styles/commonStyles';

import LongTouchButton from 'app/common/components/LongTouchButton';
import TextComponent from 'app/common/components/TextComponent';

export default class EditorTimerView extends React.PureComponent {
    static propTypes = {
        increaseAction: PropTypes.func.isRequired,
        decreaseAction: PropTypes.func.isRequired
    };

    static defaultProps = {
        running: false,
        duration: 0,
        type: enums.SET_TYPE_PREPARE,
        setNumber: 0,
        zombie: false,
        increaseAction: null,
        decreaseAction: null
    };

    handleIncrease(amount) {
        const { index, increaseAction } = this.props;
        increaseAction(index, amount);
    }

    handleDecrease(amount) {
        const { index, decreaseAction } = this.props;
        decreaseAction(index, amount);
    }

    render() {
        const self = this;
        const { duration, type, setNumber, zombie } = this.props;

        let clockColor = enums.SET_TYPE_PREPARE === type ? 'green' : 'red';
        clockColor = zombie ? FONT_COLOR_GREY : clockColor;

        const styles = StyleSheet.create({
            container: {
                flex: 0.5,
                flexDirection: 'row',
                width: '100%'
            },
            setNumber: {
                flex: 1,
                textAlign: 'left',
                paddingTop: 33,
                lineHeight: 15,
                fontSize: 15,
                color: FONT_COLOR_GREY
            },
            button: {
                flex: 2
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
            <View style={styles.container}>
                <LongTouchButton
                    title="-"
                    onPress={() => self.handleDecrease(1)}
                    onPressLong={() => self.handleDecrease(5)}
                    style={styles.button}
                />

                <TextComponent style={styles.clock}>{secondsToTimeString(duration)}</TextComponent>

                <TextComponent style={styles.setNumber}>({setNumber})</TextComponent>

                <LongTouchButton
                    title="+"
                    onPress={() => self.handleIncrease(1)}
                    onPressLong={() => self.handleIncrease(5)}
                    style={styles.button}
                />
            </View>
        );
    }
}

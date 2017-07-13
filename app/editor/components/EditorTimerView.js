import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import * as editorActions from '../redux/editorActions'
import { cronoType } from 'app/crono/enums/tableEnums'
import * as timeUtils from 'app/crono/services/TimeUtils'
import LongTouchButton from 'app/common/components/LongTouchButton'

export default class EditorTimerView extends React.PureComponent {

    static propTypes = {
        increaseAction: React.PropTypes.func.isRequired,
        decreaseAction: React.PropTypes.func.isRequired,
    };

    static defaultProps = {
        running: false,
        duration: 0,
        type: 'prepare',
        increaseAction: null,
        decreaseAction: null
    };

    handleIncrease(amount) {
        const { index, increaseAction } = this.props
        increaseAction(index, amount)
    }

    handleDecrease(amount) {
        const { index, decreaseAction } = this.props
        decreaseAction(index, amount)
    }

    render() {
        const self = this;
        const { running, duration, type } = this.props
        const styles = StyleSheet.create({
            container: {
                flexDirection: 'row',
            },
            clock: {
                color: type == cronoType.TYPE_PREPARE ? 'green' : 'red',
                fontSize: running ? 50 : 15,
                fontFamily: 'futura',
                textAlign: 'center',
                margin: 5,
                width: 90
            }
        })

        return (
            <View style={styles.container}>
                <Text style={styles.clock}>
                    {timeUtils.formatSeconds(duration)}
                </Text>

                <LongTouchButton    title="-"
                                    onPress={() => self.handleDecrease(1) }
                                    onPressLong={() => self.handleDecrease(5) }
                                    />

                <LongTouchButton    title="+"
                                    onPress={() => self.handleIncrease(1) }
                                    onPressLong={() => self.handleIncrease(5) }
                                    />
            </View>
        )
    }
}

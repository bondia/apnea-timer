import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import * as editorActions from '../redux/editorActions'
import { cronoType } from 'app/crono/enums/tableEnums'
import * as timeUtils from 'app/crono/services/TimeUtils'
import LongTouchButton from 'app/common/components/LongTouchButton'
import TextComponent from 'app/common/components/TextComponent'

export default class EditorTimerView extends React.PureComponent {

    static propTypes = {
        increaseAction: React.PropTypes.func.isRequired,
        decreaseAction: React.PropTypes.func.isRequired,
    };

    static defaultProps = {
        running: false,
        duration: 0,
        type: 'prepare',
        setNumber: 0,
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
        const { running, duration, type, setNumber } = this.props

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'row',
                width: '100%',
            },
            setNumber: {
                flex: 1,
                textAlign: 'center',
                paddingTop: 20,
            },
            button: {
                flex: 2,
            },
            clock: {
                paddingTop: 20,
                flex: 3,
                color: type == cronoType.TYPE_PREPARE ? 'green' : 'red',
                fontSize: running ? 50 : 30,
                lineHeight: running ? 50 : 30,
                textAlign: 'center',
            }
        })

        return (
            <View style={styles.container}>

                <TextComponent style={styles.setNumber}>
                    {setNumber}
                </TextComponent>

                <LongTouchButton    title="-"
                                    onPress={() => self.handleDecrease(1) }
                                    onPressLong={() => self.handleDecrease(5) }
                                    style={styles.button}
                                    />

                <LongTouchButton    title="+"
                                    onPress={() => self.handleIncrease(1) }
                                    onPressLong={() => self.handleIncrease(5) }
                                    style={styles.button}
                                    />

                <TextComponent style={styles.clock}>
                    {timeUtils.formatSeconds(duration)}
                </TextComponent>

            </View>
        )
    }
}

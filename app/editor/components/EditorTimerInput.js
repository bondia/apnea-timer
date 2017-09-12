import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Button } from 'react-native'

import * as enums from '../enums'
import * as editorActions from '../redux/editorActions'
import secondsToTimeString from 'app/common/utils/time/secondsToTimeString'
import { FONT_COLOR_GREY } from 'app/common/styles/commonStyles'

import LongTouchButton from 'app/common/components/LongTouchButton'
import TextComponent from 'app/common/components/TextComponent'

export default class EditorTimerView extends React.PureComponent {

    static propTypes = {
        increaseAction: PropTypes.func.isRequired,
        decreaseAction: PropTypes.func.isRequired,
    };

    static defaultProps = {
        running: false,
        duration: 0,
        type: enums.SET_TYPE_PREPARE,
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
        const { duration, type, setNumber } = this.props

        const styles = StyleSheet.create({
            container: {
                flex: 0.5,
                flexDirection: 'row',
                width: '100%',
            },
            setNumber: {
                flex: 1,
                textAlign: 'left',
                paddingTop: 33,
                lineHeight: 15,
                fontSize: 15,
                color: FONT_COLOR_GREY,
            },
            button: {
                flex: 2,
            },
            clock: {
                paddingTop: 25,
                flex: 3,
                color: type == enums.SET_TYPE_PREPARE ? 'green' : 'red',
                fontSize: 30,
                lineHeight: 30,
                textAlign: 'center',
            }
        })

        return (
            <View style={styles.container}>

                <LongTouchButton    title="-"
                                    onPress={() => self.handleDecrease(1) }
                                    onPressLong={() => self.handleDecrease(5) }
                                    style={styles.button}
                                    />


                <TextComponent style={styles.clock}>
                    {secondsToTimeString(duration)}
                </TextComponent>

                <TextComponent style={styles.setNumber}>
                    ({setNumber})
                </TextComponent>

                <LongTouchButton    title="+"
                                    onPress={() => self.handleIncrease(1) }
                                    onPressLong={() => self.handleIncrease(5) }
                                    style={styles.button}
                                    />

            </View>
        )
    }
}

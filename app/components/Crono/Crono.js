import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { cronoType } from '../../enums/tableEnums'

export default class Crono extends Component {

    static defaultProps = {
        running: false,
        duration: 0,
        type: 'prepare'
    }

    calculateMinutes(seconds) {
        return seconds >= 60 ? Math.floor(seconds / 60) : 0
    }

    calculateRestSeconds(seconds) {
        return seconds - (this.calculateMinutes(seconds) * 60)
    }

    getMinutesString(seconds) {
        const minutes = this.calculateMinutes(seconds)
        return minutes < 10 ? `0${minutes}` : minutes
    }

    getRestSecondsString(seconds) {
        const rest = this.calculateRestSeconds(seconds)
        return rest < 10 ? `0${rest}` : rest
    }

    render() {
        const { running, duration, type } = this.props
        const styles = StyleSheet.create({
            clock: {
                color: type == cronoType.TYPE_PREPARE ? 'green' : 'red',
                fontSize: running ? 50 : 15,
                textAlign: 'center',
                margin: 5
            }
        })

        return (
            <View>
                <Text style={styles.clock}>
                    {`${this.getMinutesString(duration)}:${this.getRestSecondsString(duration)}`}
                </Text>
            </View>
        )
    }
}

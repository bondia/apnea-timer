import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import TimerMixin from 'react-timer-mixin'
// import reactMixin from 'react-mixin'

import { cronoType } from '../../enums/tableEnums'

export default class Crono extends Component {

    // mixins = [ TimerMixin ]

    // state = {
    //     intervalId: null,
    //     minutes: 0,
    //     seconds: 0
    // }

    // static defaultProps = {
    //     time: null,
    //     label: null,
    //     stamp: null,
    //     onFinish: null,
    //     mode: null,
    // }
    //

    static defaultProps = {
        running: false,
        duration: 0,
        type: 'prepare'
    }

/*
    // TODO: move this to the TrainingTable class
    componentDidMount() {
        // const { mode } = this.props
        // if (mode != 'run') {
        //     this.setTime()
        //     return
        // }

        const self = this
        const intervalId = this.setInterval(function () {
            self.setTime()
        }, 10)
        this.setState({ intervalId })
    }

    setTime() {
        const { stamp, time, onFinish } = this.props
        let { intervalId } = this.state

        // calculate time difference
        const currentdate = new Date()
        const timeSpend = stamp ? Math.floor((currentdate.getTime() - stamp.getTime()) / 1000) : 0
        const timeRemain = time - timeSpend

        // decide seconds and minutes
        let seconds = timeRemain
        let minutes = seconds >= 60 ? Math.floor(seconds / 60) : 0
        seconds = seconds - (minutes * 60)

        if (timeRemain < 0) {
            this.clearInterval(intervalId)
            onFinish(currentdate)
            intervalId = null
            seconds = 0
        }

        this.setState({
            minutes: minutes,
            seconds: seconds,
            intervalId: intervalId
        })
    }
*/


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

// reactMixin(Crono.prototype, TimerMixin)

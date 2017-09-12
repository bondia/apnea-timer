import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import * as enums from 'app/editor/enums'
import secondsToTimeString from 'app/common/utils/time/secondsToTimeString'

import TextComponent from 'app/common/components/TextComponent'

export default class Crono extends React.PureComponent {

    static defaultProps = {
        running: false,
        duration: 0,
        type: enums.SET_TYPE_PREPARE
    }

    render() {
        const { running, duration, type } = this.props
        const styles = StyleSheet.create({
            clock: {
                paddingTop: 25,
                color: type == enums.SET_TYPE_PREPARE ? 'green' : 'red',
                fontSize: 30,
                lineHeight: 30,
                textAlign: 'center',
            }
        })

        return (
            <View>
                <TextComponent style={styles.clock}>
                    {secondsToTimeString(duration)}
                </TextComponent>
            </View>
        )
    }
}

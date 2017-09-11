import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import TextComponent from 'app/common/components/TextComponent'
import * as timeUtils from 'app/crono/services/TimeUtils'
import { cronoType } from 'app/crono/enums/tableEnums'

export default class Crono extends React.PureComponent {

    static defaultProps = {
        running: false,
        duration: 0,
        type: cronoType.TYPE_PREPARE
    }

    render() {
        const { running, duration, type } = this.props
        const styles = StyleSheet.create({
            clock: {
                paddingTop: 25,
                color: type == cronoType.TYPE_PREPARE ? 'green' : 'red',
                fontSize: 30,
                lineHeight: 30,
                textAlign: 'center',
            }
        })

        return (
            <View>
                <TextComponent style={styles.clock}>
                    {timeUtils.formatSeconds(duration)}
                </TextComponent>
            </View>
        )
    }
}

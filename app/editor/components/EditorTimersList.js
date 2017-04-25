import React from 'react'
import { StyleSheet, View } from 'react-native'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { cronoMode } from 'app/crono/enums/tableEnums'
import EditorTimerView from './EditorTimerView'

export default class EditorTimersList extends React.PureComponent {

    static propTypes = {
        steps: ImmutablePropTypes.list.isRequired,
    }

    render() {
        const { steps } = this.props
        return (
            <View style={styles.timers}>
                {steps.map((item, idx) => {
                    return (
                        <View key={idx} style={styles.timer}>
                            <EditorTimerView    index={item.get('pos')}
                                                running={item.get('mode') == cronoMode.MODE_RUNNING}
                                                type={item.get('type')}
                                                duration={item.get('duration')}
                                                />
                        </View>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    timers: {
        margin: 10
    },
    timer: {
    }
})

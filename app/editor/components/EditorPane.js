import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { cronoType, cronoMode } from 'app/crono/enums/tableEnums'
import * as timeUtils from 'app/crono/services/TimeUtils'

import EditorCronoView from './EditorCronoView'
import EditorButtonsSet from './EditorButtonsSet'

class TrainingTable extends React.PureComponent {

    static propTypes = {
        editor: ImmutablePropTypes.map.isRequired,
    }

    render() {
        const { editor } = this.props
        const holdtime = editor.get('holdtime')
        return (
            <View style={styles.container}>
                <Text style={{ margin: 5, fontSize: 20 }}>
                    Hold time
                </Text>
                <Text style={{ margin: 5, fontSize: 20 }}>
                    {timeUtils.formatSeconds(holdtime)}
                </Text>

                <Text style={{ marginTop: 20, fontSize: 20 }}>
                    Recover time
                </Text>
                <View style={styles.timers}>
                    {editor.getIn([ 'table', 'steps' ]).map((item, idx) => {
                        return item.get('type') != cronoType.TYPE_PREPARE ? null : (
                            <View key={idx} style={styles.timer}>
                                <EditorCronoView  index={idx}
                                        running={item.get('mode') == cronoMode.MODE_RUNNING}
                                        type={item.get('type')}
                                        duration={item.get('duration')}
                                        />

                            </View>
                        )
                    })}
                </View>

                <EditorButtonsSet />

            </View>
        )
    }
}

const stateToProps = (state) => {
    return {
        editor: state.editor
    }
}

export default connect(stateToProps)(TrainingTable)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timers: {
        margin: 10

    },
    timer: {

    }
})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { cronoType } from 'app/crono/enums/tableEnums'
import * as timeUtils from 'app/crono/services/TimeUtils'

import EditorTimersList from './EditorTimersList'
import EditorButtonsSet from './EditorButtonsSet'

class EditorPane extends React.PureComponent {

    static propTypes = {
        editor: ImmutablePropTypes.map.isRequired,
    }

    render() {
        const { editor } = this.props
        const holdtime = editor.get('holdtime')
        const steps = editor.getIn([ 'table', 'steps' ]).filter(i => i.get('type') == cronoType.TYPE_PREPARE)

        return (
            <View style={styles.container}>
                <Text style={{ margin: 5, fontSize: 20 }}>
                    Hold time
                </Text>
                <Text style={{ margin: 5, fontSize: 50 }}>
                    {timeUtils.formatSeconds(holdtime)}
                </Text>

                <Text style={{ marginTop: 20, fontSize: 20 }}>
                    Recover time
                </Text>

                <EditorTimersList steps={steps} />

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

export default connect(stateToProps)(EditorPane)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

import React from 'react'
import { StyleSheet, View } from 'react-native'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as editorActions from '../redux/editorActions'

import { cronoMode } from 'app/crono/enums/tableEnums'
import EditorTimerView from './EditorTimerView'

class EditorTimersList extends React.PureComponent {

    static propTypes = {
        editorActions: React.PropTypes.object.isRequired,
        steps: ImmutablePropTypes.list.isRequired,
    }

    render() {
        const { steps, editorActions } = this.props
        return (
            <View style={styles.timers}>
                {steps.map((item, idx) => {
                    return (
                        <View key={idx} style={styles.timer}>
                            <EditorTimerView    index={ item.get('pos') }
                                                running={ item.get('mode') == cronoMode.MODE_RUNNING }
                                                type={ item.get('type') }
                                                duration={ item.get('duration') }
                                                increaseAction={ editorActions.increaseTimeItem }
                                                decreaseAction={ editorActions.decreaseTimeItem }
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

const dispatchToProps = (dispatch) => {
    return {
        editorActions: bindActionCreators(editorActions, dispatch)
    }
}

export default connect(null, dispatchToProps)(EditorTimersList)


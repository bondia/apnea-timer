import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
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
            <ScrollView style={{ marginTop: 10, marginBottom: 0 }}>
                {steps.map((item, idx) => {
                    return (
                        <View key={idx} >
                            <EditorTimerView    index={ item.get('pos') }
                                                running={ item.get('mode') == cronoMode.MODE_RUNNING }
                                                type={ item.get('type') }
                                                duration={ item.get('duration') }
                                                setNumber={ idx+1 }
                                                increaseAction={ editorActions.increaseTimeItem }
                                                decreaseAction={ editorActions.decreaseTimeItem }
                                                />
                        </View>
                    )
                })}
            </ScrollView>
        )
    }
}

const dispatchToProps = (dispatch) => {
    return {
        editorActions: bindActionCreators(editorActions, dispatch)
    }
}

export default connect(null, dispatchToProps)(EditorTimersList)


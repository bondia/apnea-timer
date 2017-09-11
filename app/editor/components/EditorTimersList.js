import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, ScrollView } from 'react-native'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as editorActions from '../redux/editorActions'
import * as enums from '../enums'

import EditorTimerInput from './EditorTimerInput'

class EditorTimersList extends React.PureComponent {

    static propTypes = {
        editorActions: PropTypes.object.isRequired,
        sets: ImmutablePropTypes.list.isRequired,
    }

    render() {
        const { sets, editorActions } = this.props
        return (
            <ScrollView style={{ marginTop: 10, marginBottom: 0 }}>
                {sets.map((item, idx) => {
                    return (
                        <View key={idx} >
                            <EditorTimerInput   index={ item.get('pos') }
                                                running={ item.get('mode') == enums.SET_MODE_RUNNING }
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


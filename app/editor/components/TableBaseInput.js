import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import * as editorActions from '../redux/editorActions'
import LongTouchButton from 'app/common/components/LongTouchButton'

class TableBaseInput extends React.PureComponent {

    static propTypes = {
        editorActions: PropTypes.object.isRequired,
        editor: ImmutablePropTypes.map.isRequired,
    }

    handleIncrease(amount) {
        const { editor, editorActions } = this.props
        editorActions.changeTableBase(editor.get('base') + amount)
    }

    handleDecrease(amount) {
        const { editor, editorActions } = this.props
        editorActions.changeTableBase(editor.get('base') - amount)
    }

    render() {
        const self = this
        const { style } = this.props

        return (
            <View style={[ this.props.style, baseStyles.container]}>

               <LongTouchButton     title="-"
                                    onPress={() => self.handleDecrease(1) }
                                    onPressLong={() => self.handleDecrease(5) }
                                    style={baseStyles.button}
                                    />

                <LongTouchButton    title="+"
                                    onPress={() => self.handleIncrease(1) }
                                    onPressLong={() => self.handleIncrease(5) }
                                    style={baseStyles.button}
                                    />

            </View>
        )
    }
}

const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
    },

    button: {
        flex: 1,
    }
})

const stateToProps = (state) => {
    return { editor: state.editor }
}

const dispatchToProps = (dispatch) => {
    return { editorActions: bindActionCreators(editorActions, dispatch) }
}

export default connect(stateToProps, dispatchToProps)(TableBaseInput)

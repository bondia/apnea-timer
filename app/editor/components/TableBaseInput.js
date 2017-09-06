import React from 'react'
import { StyleSheet, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import * as editorActions from '../redux/editorActions'
import LongTouchButton from 'app/common/components/LongTouchButton'

class TableBaseInput extends React.PureComponent {

    static propTypes = {
        editorActions: React.PropTypes.object.isRequired,
        editor: ImmutablePropTypes.map.isRequired,
    }

    //--------------------------------
    //  EVENT HANDLING
    //--------------------------------

    handleIncrease(amount) {
        this.props.editorActions.changeBase(this.props.editor.get('base') + amount)
    }

    handleDecrease(amount) {
        this.props.editorActions.changeBase(this.props.editor.get('base') - amount)
    }

    //--------------------------------
    //  RENDER
    //--------------------------------

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


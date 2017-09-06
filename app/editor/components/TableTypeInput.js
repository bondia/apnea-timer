import React from 'react'
import { StyleSheet, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import * as editorActions from '../redux/editorActions'
import LongTouchButton from 'app/common/components/LongTouchButton'

class TableTypeInput extends React.PureComponent {

    static propTypes = {
        editorActions: React.PropTypes.object.isRequired,
        editor: ImmutablePropTypes.map.isRequired,
    }

    handleO2() {
        // this.props.editorActions.changeBase(this.props.editor.get('base') + amount)
    }

    handleCO2() {
        // this.props.editorActions.changeBase(this.props.editor.get('base') - amount)
    }

    render() {
        const self = this
        const { style } = this.props

        return (
            <View style={[ this.props.style, baseStyles.container]}>

               <LongTouchButton     title="O2"
                                    onPress={() => self.handleO2() }
                                    style={baseStyles.button}
                                    active={true}
                                    />

                <LongTouchButton    title="CO2"
                                    onPress={() => self.handleCO2() }
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

export default connect(stateToProps, dispatchToProps)(TableTypeInput)
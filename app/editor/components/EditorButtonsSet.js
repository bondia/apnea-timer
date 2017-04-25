import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Actions } from 'react-native-router-flux'

import { routesEnum } from 'app/main/enums/routes'

import * as editorActions from '../redux/editorActions'

class EditorButtonSet extends React.PureComponent {

    static propTypes = {
        editorActions: React.PropTypes.object.isRequired,
        editor: ImmutablePropTypes.map.isRequired,
    }

    //--------------------------------
    //  EVENT HANDLING
    //--------------------------------

    handleStart() {
        const { editor } = this.props;
        Actions[routesEnum.CRONO_SCENE]({ editor: editor, fuck: 'fuck' })
    }

    handleHard() {
        this.props.editorActions.changeBase(this.props.editor.get('base') + 1)
    }

    handleEasy() {
        this.props.editorActions.changeBase(this.props.editor.get('base') - 1)
    }

    //--------------------------------
    //  RENDER
    //--------------------------------

    render() {
        const { editor } = this.props
        const holdtime = editor.get('holdtime')
        return (
            <View style={styles.container}>
                <Button style={styles.button}
                        onPress={this.handleStart.bind(this)}
                        title="Start"
                        accessibilityLabel="Start"
                        />

                <Button style={styles.button}
                        onPress={this.handleHard.bind(this)}
                        title="Hard"
                        accessibilityLabel="Hard"
                        />

                <Button style={styles.button}
                        onPress={this.handleEasy.bind(this)}
                        title="Easy"
                        accessibilityLabel="Easy"
                        />
            </View>
        )
    }
}

const stateToProps = (state) => {
    return {
        editor: state.editor
    }
}

const dispatchToProps = (dispatch) => {
    return {
        editorActions: bindActionCreators(editorActions, dispatch),
    }
}

export default connect(stateToProps, dispatchToProps)(EditorButtonSet)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    button: {
        flex: 3,
    }
})

import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as editorActions from '../redux/editorActions'

import { cronoType } from 'app/crono/enums/tableEnums'
import * as timeUtils from 'app/crono/services/TimeUtils'

class Crono extends React.PureComponent {

    static defaultProps = {
        editorActions: React.PropTypes.object.isRequired,
        running: false,
        duration: 0,
        type: 'prepare',
    }

    handleEasy() {
        const { index, editorActions } = this.props
        editorActions.changeItem(index, -5)
    }

    handleHard() {
        const { index, editorActions } = this.props
        editorActions.changeItem(index, 5)
    }

    render() {
        const { running, duration, type } = this.props
        const styles = StyleSheet.create({
            container: {
                flexDirection: 'row',
            },
            clock: {
                color: type == cronoType.TYPE_PREPARE ? 'green' : 'red',
                fontSize: running ? 50 : 15,
                fontFamily: 'futura',
                textAlign: 'center',
                margin: 5,
                width: 90
            },
            button: {

            }
        })

        return (
            <View style={styles.container}>
                <Text style={styles.clock}>
                    {timeUtils.formatSeconds(duration)}
                </Text>

                <Button onPress={this.handleEasy.bind(this)}
                        title="-"
                        accessibilityLabel="-"
                        color="grey"
                        />

                <Button onPress={this.handleHard.bind(this)}
                        title="+"
                        accessibilityLabel="+"
                        color="grey"
                        />
            </View>
        )
    }
}


const dispatchToProps = (dispatch) => {
    return {
        editorActions: bindActionCreators(editorActions, dispatch)
    }
}

export default connect(null, dispatchToProps)(Crono)


import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as creatorActions from '../redux/creatorActions'

import { cronoType } from 'app/crono/enums/tableEnums'
import * as timeUtils from 'app/crono/services/TimeUtils'

class Crono extends React.PureComponent {

    static defaultProps = {
        creatorActions: React.PropTypes.object.isRequired,
        running: false,
        duration: 0,
        type: 'prepare',
    }

    handleEasy() {
        const { index, creatorActions } = this.props
        creatorActions.changeItem(index, -5)
    }

    handleHard() {
        const { index, creatorActions } = this.props
        creatorActions.changeItem(index, 5)
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
                        color="#841584"
                        title="-"
                        accessibilityLabel="-"
                        />

                <Button onPress={this.handleHard.bind(this)}
                        color="#841584"
                        title="+"
                        accessibilityLabel="+"
                        />
            </View>
        )
    }
}


const dispatchToProps = (dispatch) => {
    return {
        creatorActions: bindActionCreators(creatorActions, dispatch)
    }
}

export default connect(null, dispatchToProps)(Crono)


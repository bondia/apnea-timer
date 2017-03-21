import React, { PropTypes, Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { cronoMode } from '../../enums/tableEnums'
import * as timerActions from '../../actions/timerActions.js'
import Crono from '../Crono/Crono.js'

class TrainingTable extends Component {

    static propTypes = {
        timerActions: PropTypes.object.isRequired,
        timer: ImmutablePropTypes.map.isRequired,
    }

    handlePress() {
        this.props.timerActions.startCrono()

        // let { table } = this.state
        // table.steps[0] = this.startCounter(table.steps[0], new Date())
        // this.setState({ table, started: true })
    }

    // startCounter(item, stamp) {
    //     item.stamp = stamp
    //     item.mode = 'run'
    //     return item
    // }

    // finishCounter(item) {
    //     item.mode = 'finished'
    //     return item
    // }

    // onFinish = (stamp) => {
    //     let { table, step } = this.state

    //     // set last counter finished
    //     table.steps[step] = this.finishCounter(table.steps[step])

    //     // decide next step
    //     step = step+1

    //     // stop when all steps done
    //     if (step >= table.steps.length) {
    //         return
    //     }

    //     // update new step
    //     table.steps[step] = this.startCounter(table.steps[step], stamp)

    //     this.setState({ step, table })
    // }

    render() {
        const { timer } = this.props
        const ticks = timer.get('clock')
        const step = timer.get('step')

        return (
            <View style={styles.container}>
                <Text>
                    -- {ticks} --
                </Text>

                {timer.getIn([ 'table', 'steps' ]).map((item, idx) => {
                    return (
                        <View key={idx}>
                            <Crono  running={item.get('mode') == cronoMode.MODE_RUNNING}
                                    type={item.get('type')}
                                    duration={item.get('duration')}
                                    />

                        </View>
                    )
                })}

                {step < 0 &&
                    <Button style={styles.button}
                        onPress={this.handlePress.bind(this)}
                        title="Start"
                        accessibilityLabel="Start"
                    />
                }
            </View>
        )
    }
}

const stateToProps = (state) => {
    return {
        timer: state.timer
    }
}

const dispatchToProps = (dispatch) => {
    return {
        timerActions: bindActionCreators(timerActions, dispatch)
    }
}

export default connect(stateToProps, dispatchToProps)(TrainingTable)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        borderColor: 'red',
        backgroundColor: '#fff',
        borderWidth: 1,
        padding: 10,
        width: 100,
        height: 100
    }
})

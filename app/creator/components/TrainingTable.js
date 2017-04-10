import React, { PropTypes, Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { cronoMode } from 'app/crono/enums/tableEnums'
import * as timerActions from 'app/crono/redux/timerActions'
import Crono from './Crono.js'

class TrainingTable extends Component {

    static propTypes = {
        timerActions: PropTypes.object.isRequired,
        timer: ImmutablePropTypes.map.isRequired,
    }

    componentWillMount() {
        // if (this.props.timer.get('finished', true)) {
        //     this.props.timerActions.stopCrono()
        // }
    }

    handleStart() {
        this.props.timerActions.startCrono()
    }

    handleHard() {
        this.props.timerActions.changeBase(this.props.timer.get('base') + 1)
    }

    handleEasy() {
        this.props.timerActions.changeBase(this.props.timer.get('base') - 1)
    }

    render() {
        const { timer } = this.props
        const ticks = timer.get('clock')
        const base = timer.get('base')
        const step = timer.get('step')

        return (
            <ScrollView>

            <View style={styles.container}>
                <Text>
                    -- {base} : {ticks} --
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

                <View style={{ flex: 1, flexDirection: 'row'}}>
                    {step < 0 &&
                        <Button style={styles.button}
                            onPress={this.handleStart.bind(this)}
                            title="Start"
                            accessibilityLabel="Start"
                        />
                    }

                    {step < 0 &&
                        <Button style={styles.button}
                            onPress={this.handleHard.bind(this)}
                            title="Hard"
                            accessibilityLabel="Hard"
                        />
                    }

                    {step < 0 &&
                        <Button style={styles.button}
                            onPress={this.handleEasy.bind(this)}
                            title="Easy"
                            accessibilityLabel="Easy"
                        />
                    }
                </View>
            </View>
            </ScrollView>
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
        marginTop: 64,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 3,
        borderColor: 'red',
        backgroundColor: '#fff',
        borderWidth: 1,
        padding: 10,
        width: 100,
        height: 100
    }
})

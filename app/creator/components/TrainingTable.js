import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Actions } from 'react-native-router-flux'

import { routesEnum } from 'app/main/enums/routes'
import { cronoType, cronoMode } from 'app/crono/enums/tableEnums'

import * as creatorActions from '../redux/creatorActions'
import * as timeUtils from 'app/crono/services/TimeUtils'


import Crono from './Crono'

class TrainingTable extends React.PureComponent {

    static propTypes = {
        creatorActions: React.PropTypes.object.isRequired,
        creator: ImmutablePropTypes.map.isRequired,
    }

    //--------------------------------
    //  EVENT HANDLING
    //--------------------------------

    handleStart() {
        const { creator } = this.props;
        Actions[routesEnum.CRONO_SCENE]({ creator: creator, fuck: 'fuck' })
    }

    handleHard() {
        this.props.creatorActions.changeBase(this.props.creator.get('base') + 1)
    }

    handleEasy() {
        this.props.creatorActions.changeBase(this.props.creator.get('base') - 1)
    }

    //--------------------------------
    //  RENDER
    //--------------------------------

    render() {
        const { creator } = this.props
        const holdtime = creator.get('holdtime')
        return (
            <View style={styles.container}>
                <Text style={{ margin: 5, fontSize: 20 }}>
                    Hold time
                </Text>
                <Text style={{ margin: 5, fontSize: 20 }}>
                    {timeUtils.formatSeconds(holdtime)}
                </Text>

                <Text style={{ marginTop: 20, fontSize: 20 }}>
                    Recover time
                </Text>
                <View style={styles.timers}>
                    {creator.getIn([ 'table', 'steps' ]).map((item, idx) => {
                        return item.get('type') != cronoType.TYPE_PREPARE ? null : (
                            <View key={idx} style={styles.timer}>
                                <Crono  index={idx}
                                        running={item.get('mode') == cronoMode.MODE_RUNNING}
                                        type={item.get('type')}
                                        duration={item.get('duration')}
                                        />

                            </View>
                        )
                    })}
                </View>

                <View style={{ flex: 1, flexDirection: 'row'}}>
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
            </View>
        )
    }
}

const stateToProps = (state) => {
    return {
        creator: state.creator
    }
}

const dispatchToProps = (dispatch) => {
    return {
        creatorActions: bindActionCreators(creatorActions, dispatch),
    }
}

export default connect(stateToProps, dispatchToProps)(TrainingTable)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timers: {
        margin: 10

    },
    timer: {

    },
    button: {
        flex: 3,
    }
})

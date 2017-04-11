import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Actions } from 'react-native-router-flux'

import { routesEnum } from 'app/main/enums/routes'
import { cronoMode } from 'app/crono/enums/tableEnums'

import * as creatorActions from '../redux/creatorActions'
import * as cronoActions from 'app/crono/redux/cronoActions'

import Crono from './Crono'

class TrainingTable extends React.PureComponent {

    static propTypes = {
        creatorActions: React.PropTypes.object.isRequired,
        cronoActions: React.PropTypes.object.isRequired,
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
        const ticks = creator.get('clock')
        const base = creator.get('base')
        const step = creator.get('step')

        return (
            <View style={styles.container}>
                <Text>
                    -- {base} : {ticks} --
                </Text>

                {creator.getIn([ 'table', 'steps' ]).map((item, idx) => {
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
        cronoActions: bindActionCreators(cronoActions, dispatch)
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

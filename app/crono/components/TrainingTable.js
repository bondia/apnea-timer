import React from 'react'
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Actions } from 'react-native-router-flux'

import { cronoMode } from 'app/crono/enums/tableEnums'
import * as cronoActions from 'app/crono/redux/cronoActions'
import Crono from './Crono'

class TrainingTable extends React.PureComponent {

    static propTypes = {
        cronoActions: React.PropTypes.object.isRequired,
        data: ImmutablePropTypes.map.isRequired,
    }

    handleStart() {
        const { data, cronoActions } = this.props
        cronoActions.startCrono(data)
    }

    handleFinish() {
        Actions.pop()
        this.props.cronoActions.finishCrono()
    }

    render() {
        const { data } = this.props
        const ticks = data.get('clock')
        const base = data.get('base')
        const step = data.get('step')

        return (
            <View style={styles.container}>
                <Text>
                    -- {base} : {ticks} --
                </Text>

                {data.getIn([ 'table', 'steps' ]).map((item, idx) => {
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

                        <Button style={styles.button}
                                onPress={this.handleFinish.bind(this)}
                                title="Finish"
                                accessibilityLabel="Finish"
                                />
                </View>
            </View>
        )
    }

}

const stateToProps = (state, ownProps) => {
    return {
        data: state.crono ? state.crono : ownProps.creator
    }
}

const dispatchToProps = (dispatch) => {
    return {
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

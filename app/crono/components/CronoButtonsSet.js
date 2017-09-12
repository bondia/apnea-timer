import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Actions } from 'react-native-router-flux'
import * as enums from 'app/editor/enums'

import LongTouchButton from 'app/common/components/LongTouchButton'

export default class StartButton extends React.PureComponent {

    static propTypes = {
        crono: ImmutablePropTypes.map.isRequired,
        cronoActions: PropTypes.object.isRequired,
    }

    handleStart() {
        const { crono, cronoActions } = this.props
        cronoActions.startCrono(crono)
    }

    handleSkip() {
        const { crono, cronoActions } = this.props
        const current = crono.getIn([ 'table', 'sets' ]).find(s => s.get('mode') === enums.SET_MODE_RUNNING)
        if (current) {
            cronoActions.skipSet(current.get('pos'))
        }
    }

    handleFinish() {
        Actions.pop()
        this.props.cronoActions.finishCrono()
    }

    render() {
        const { crono } = this.props
        const step = crono.getIn([ 'live', 'step' ])

        return (
            <View style={baseStyles.container}>
            {step === undefined &&
                <LongTouchButton    title="START"
                                    onPress={this.handleStart.bind(this)}
                                    style={baseStyles.button}
                                    />
            }

            {step >= 0 &&
                <LongTouchButton    title="SKIP"
                                    onPress={this.handleSkip.bind(this)}
                                    style={baseStyles.button}
                                    />
            }

                <LongTouchButton    title="FINISH"
                                    onPress={this.handleFinish.bind(this)}
                                    style={baseStyles.button}
                                    />
            </View>
        )
    }
}

const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 74,
        flexDirection: 'row'
    },

    button: {
        justifyContent: 'center',
        flex: 1,
    }
})

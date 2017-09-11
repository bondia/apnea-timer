import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Text } from 'react-native'
import ImmutablePropTypes from 'react-immutable-proptypes'

import * as enums from 'app/editor/enums'
import Crono from './Crono'

export default class SetsList extends React.PureComponent {

    static propTypes = {
        crono: ImmutablePropTypes.map.isRequired,
    }

    render() {
        const { crono } = this.props
        let sets = crono.getIn([ 'table', 'sets' ])
        sets = sets.filter(s => s.get('mode') === enums.SET_MODE_INITIAL || s.get('mode') === enums.SET_MODE_RUNNING)
        return (
            <ScrollView>
                {sets.map((item, idx) => {
                    const mode = item.get('mode')
                    const type = item.get('type')
                    const duration = item.get('duration')

                    return (
                        <View key={idx}>
                            <Crono  running={mode == enums.SET_MODE_RUNNING}
                                    type={type}
                                    duration={duration}
                                    />
                        </View>
                    )
                })}
            </ScrollView>
        )
    }
}

import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView } from 'react-native'
import ImmutablePropTypes from 'react-immutable-proptypes'

import * as enums from 'app/editor/enums'
import Crono from './Crono'

export default class SetsList extends React.PureComponent {

    static propTypes = {
        crono: ImmutablePropTypes.map.isRequired,
    }

    render() {
        const { crono } = this.props
        return (
            <ScrollView>
                {crono.getIn([ 'table', 'sets' ]).map((item, idx) => {
                    const mode = item.get('mode')
                    const type = item.get('type')
                    const duration = item.get('duration')

                    if (mode === enums.SET_MODE_FINISHED) {
                        return null
                    }

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

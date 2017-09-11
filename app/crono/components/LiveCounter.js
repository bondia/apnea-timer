import React from 'react'
import { View, StyleSheet } from 'react-native'
import ImmutablePropTypes from 'react-immutable-proptypes'

import * as timeUtils from 'app/crono/services/TimeUtils'
import { FONT_COLOR_GREY, FONT_SIZE_L, COLOR_LIGHT } from 'app/common/styles/commonStyles'
import * as enums from 'app/editor/enums'
import { cronoType, cronoMode } from 'app/crono/enums/tableEnums'

import TextComponent from 'app/common/components/TextComponent'

export default class EditorPaneHeader extends React.PureComponent {

    static propTypes = {
        crono: ImmutablePropTypes.map.isRequired,
    }

    render() {
        const { crono, style } = this.props
        const totalTime = crono.get('duration')
        const sets = crono.getIn([ 'table', 'sets' ])
        let current = sets.find(e => e.get('mode') === cronoMode.MODE_RUNNING)
        current = !current ? sets.first() : current

        return (
            <View style={[ this.props.style, baseStyles.wrapper ]}>

                <View style={baseStyles.header}>
                    {current && current.get('mode') !== cronoMode.MODE_FINISHED &&
                    <View style={baseStyles.headerBlock}>

                        <TextComponent style={baseStyles.headerLabel}>
                            {cronoType.TYPE_HOLD === current.get('type') ? 'Breath Hold' : '' }
                            {cronoType.TYPE_PREPARE === current.get('type') ? 'Breath Up' : '' }
                        </TextComponent>

                        <TextComponent style={baseStyles.headerText}>
                            {timeUtils.formatSeconds(current.get('duration'))}
                        </TextComponent>
                    </View>
                    }

                    <View style={baseStyles.headerBlock}>
                        <TextComponent style={baseStyles.headerLabel}>
                            Remaining Time
                        </TextComponent>
                        <TextComponent style={baseStyles.headerText}>
                            {timeUtils.formatSeconds(totalTime)}
                        </TextComponent>
                    </View>
                </View>

            </View>
        )
    }
}

const baseStyles = StyleSheet.create({

    wrapper: {
        flex: 2,
    },

    // HEADER
    header: {
        flex: 1,
        flexDirection: 'row',
    },

    headerBlock: {
        flex: 1,
        justifyContent: 'center',
    },

    headerLabel: {
        textAlign: 'center',
        color: FONT_COLOR_GREY
    },

    headerText: {
        textAlign: 'center',
        fontSize: FONT_SIZE_L,
        color: COLOR_LIGHT
    }
})

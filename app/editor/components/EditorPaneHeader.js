import React from 'react'
import { View, StyleSheet } from 'react-native'
import ImmutablePropTypes from 'react-immutable-proptypes'

import * as timeUtils from 'app/crono/services/TimeUtils'
import { FONT_COLOR_GREY, FONT_SIZE_L, COLOR_LIGHT } from 'app/common/styles/commonStyles'
import * as enums from '../enums'

import TextComponent from 'app/common/components/TextComponent'
import TableTypeInput from './TableTypeInput'
import TableBaseInput from './TableBaseInput'

export default class EditorPaneHeader extends React.PureComponent {

    static propTypes = {
        editor: ImmutablePropTypes.map.isRequired,
    }

    render() {
        const { editor, style } = this.props
        const base = editor.get('base')
        const type = editor.get('type')
        const totalTime = editor.get('duration')

        return (
            <View style={[ this.props.style, baseStyles.wrapper, enums.TABLE_TYPE_FREE === type && baseStyles.wrapperSmall ]}>

                <TableTypeInput />

                <View style={baseStyles.header}>

                { enums.TABLE_TYPE_FREE != type &&
                    <View style={baseStyles.headerBlock}>
                        <TextComponent style={baseStyles.headerLabel}>
                            {enums.TABLE_TYPE_CO2 === type ? 'Breath Hold' : '' }
                            {enums.TABLE_TYPE_O2 === type ? 'Breath Up' : '' }
                        </TextComponent>

                        <TextComponent style={baseStyles.headerText}>
                            {timeUtils.formatSeconds(base)}
                        </TextComponent>
                    </View>
                }

                    <View style={baseStyles.headerBlock}>
                        <TextComponent style={baseStyles.headerLabel}>
                            Total Time
                        </TextComponent>

                        <TextComponent style={baseStyles.headerText}>
                            {timeUtils.formatSeconds(totalTime)}
                        </TextComponent>
                    </View>
                </View>

            { enums.TABLE_TYPE_FREE != type &&
                <TableBaseInput />
            }

            </View>
        )
    }
}

const baseStyles = StyleSheet.create({

    wrapper: {
        flex: 3,
    },

    wrapperSmall: {
        flex: 2,
        maxHeight: 148
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

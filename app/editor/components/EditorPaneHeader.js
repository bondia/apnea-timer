import React from 'react'
import { View, StyleSheet } from 'react-native'
import ImmutablePropTypes from 'react-immutable-proptypes'

import * as timeUtils from 'app/crono/services/TimeUtils'
import { FONT_COLOR_GREY, FONT_SIZE_L, COLOR_LIGHT } from 'app/common/styles/commonStyles'

import TextComponent from 'app/common/components/TextComponent'
import TableBaseInput from './TableBaseInput'

export default class EditorPaneHeader extends React.PureComponent {

    static propTypes = {
        editor: ImmutablePropTypes.map.isRequired,
    }

    render() {
        const { editor, style } = this.props
        const holdtime = editor.get('holdtime')
        const totalTime = editor.get('duration')

        return (
            <View style={[ this.props.style, baseStyles.wrapper ]}>
                <View style={baseStyles.header}>
                    <View style={baseStyles.headerBlock}>
                        <TextComponent style={baseStyles.headerLabel}>
                            Breath Hold
                        </TextComponent>

                        <TextComponent style={baseStyles.headerText}>
                            {timeUtils.formatSeconds(holdtime)}
                        </TextComponent>
                    </View>

                    <View style={baseStyles.headerBlock}>
                        <TextComponent style={baseStyles.headerLabel}>
                            Total Time
                        </TextComponent>

                        <TextComponent style={baseStyles.headerText}>
                            {timeUtils.formatSeconds(totalTime)}
                        </TextComponent>
                    </View>
                </View>

                <TableBaseInput />
            </View>
        )
    }
}

const baseStyles = StyleSheet.create({

    wrapper: {
        flex: 2
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

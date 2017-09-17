import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { FONT_COLOR_GREY } from 'app/common/styles/commonStyles'
import * as enums from '../enums'

import TextComponent from 'app/common/components/TextComponent'
import EditorPaneHeader from './EditorPaneHeader'
import EditorTimersList from './EditorTimersList'
import StartButton from './StartButton'

class EditorPane extends React.PureComponent {

    static propTypes = {
        editor: ImmutablePropTypes.map.isRequired,
    }

    render() {
        const { editor, style } = this.props
        const type = editor.getIn([ 'trainingTable', 'type' ])
        const sets = editor.getIn([ 'sets' ]).filter(i => {
            let valid = false
            valid = type === enums.TABLE_TYPE_CO2 && enums.SET_TYPE_PREPARE === i.get('type') ? true : valid
            valid = type === enums.TABLE_TYPE_O2 && enums.SET_TYPE_HOLD === i.get('type') ? true : valid
            valid = type === enums.TABLE_TYPE_FREE ? true : valid
            return valid
        })

        return (
            <View style={[ style, baseStyles.main ]}>

                <EditorPaneHeader editor={editor} />

                <View style={baseStyles.setsListBlock}>
                    <TextComponent style={baseStyles.label}>
                        {enums.TABLE_TYPE_CO2 === type ? 'Breath Up' : '' }
                        {enums.TABLE_TYPE_O2 === type ? 'Breath Hold' : '' }
                        {enums.TABLE_TYPE_FREE === type ? 'Sets' : '' }
                    </TextComponent>

                    <EditorTimersList sets={sets} />
                </View>

                <StartButton editor={editor} />

            </View>
        )
    }
}

const baseStyles = StyleSheet.create({

    main: {
        flex: 1,
    },

    label: {
        marginTop: 15,
        textAlign: 'center',
        width: '100%',
        color: FONT_COLOR_GREY
    },

    setsListBlock: {
        flex: 4
    }
})


const stateToProps = (state, props) => {
    return {
        editor: state.editor
    }
}

export default connect(stateToProps)(EditorPane)

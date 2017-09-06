import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { FONT_COLOR_GREY } from 'app/main/styles/commonStyles'
import { cronoType } from 'app/crono/enums/tableEnums'

import TextComponent from 'app/main/components/TextComponent'

import EditorPaneHeader from './EditorPaneHeader'
import EditorTimersList from './EditorTimersList'
import StartButton from './StartButton'

class EditorPane extends React.PureComponent {

    static propTypes = {
        editor: ImmutablePropTypes.map.isRequired,
    }

    render() {
        const { editor, style } = this.props
        const steps = editor.getIn([ 'table', 'steps' ]).filter(i => i.get('type') == cronoType.TYPE_PREPARE)

        return (
            <View style={[ style, baseStyles.main ]}>

                <EditorPaneHeader editor={editor} />

                <View style={baseStyles.setsListBlock}>
                    <TextComponent style={baseStyles.label}>
                        RECOVER TIME
                    </TextComponent>

                    <EditorTimersList steps={steps} />
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
        marginTop: 25,
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

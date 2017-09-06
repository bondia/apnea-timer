import React from 'react'
import { StyleSheet, View } from 'react-native'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Actions } from 'react-native-router-flux'

import LongTouchButton from 'app/common/components/LongTouchButton'
import { routesEnum } from 'app/main/enums/routes'

export default class StartButton extends React.PureComponent {

    static propTypes = {
        editor: ImmutablePropTypes.map.isRequired,
    }

    handleStart() {
        const { editor } = this.props;
        Actions[routesEnum.CRONO_SCENE]({ editor: editor })
    }

    render() {
        const { editor } = this.props
        const holdtime = editor.get('holdtime')
        return (
            <View style={baseStyles.container}>
                <LongTouchButton    title="START"
                                    onPress={this.handleStart.bind(this)}
                                    style={baseStyles.button}
                                    />
            </View>
        )
    }
}

const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    button: {
        justifyContent: 'center',
        flex: 1,
    }
})

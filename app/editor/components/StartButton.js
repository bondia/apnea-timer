import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Actions } from 'react-native-router-flux';

import { routesEnum } from 'app/main/enums/routes';

import LongTouchButton from 'app/common/components/LongTouchButton';

export default class StartButton extends React.PureComponent {

    static propTypes = {
        editor: ImmutablePropTypes.map.isRequired,
    }

    handleStart() {
        const { editor } = this.props;
        Actions[routesEnum.CRONO_SCENE]({ crono: editor });
    }

    render() {
        return (
            <View style={baseStyles.container}>
                <LongTouchButton    title="Start"
                                    onPress={this.handleStart.bind(this)}
                                    style={baseStyles.button}
                                    />
            </View>
        );
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
});

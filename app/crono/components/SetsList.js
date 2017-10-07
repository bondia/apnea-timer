import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';

import * as enums from 'app/editor/enums';
import Crono from './Crono';

export default class SetsList extends React.PureComponent {
    static propTypes = {
        crono: ImmutablePropTypes.map.isRequired
    };

    render() {
        const { crono } = this.props;
        let sets = crono.getIn(['sets']);

        return (
            <ScrollView>
                <View style={baseStyles.setsWrapper}>
                    {sets.map((item, idx) => {
                        const type = item.get('type');
                        const mode = item.getIn(['running', 'mode']);
                        const countdown = item.getIn(['running', 'countdown']);
                        return (
                            <View key={idx} style={baseStyles.item}>
                                <Crono
                                    active={mode === enums.SET_MODE_RUNNING || mode === enums.SET_MODE_INITIAL}
                                    running={mode === enums.SET_MODE_RUNNING}
                                    type={type}
                                    duration={countdown}
                                />
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        );
    }
}

const baseStyles = StyleSheet.create({
    setsWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    item: {
        width: '33%'
    }
});

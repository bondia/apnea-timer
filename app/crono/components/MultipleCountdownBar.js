import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';

import CountdownBar from './CountdownBar';

export default class MultipleCountdownBar extends React.PureComponent {
    static propTypes = {
        sets: ImmutablePropTypes.list.isRequired
    };

    render() {
        const { sets } = this.props;
        return (
            <View style={baseStyles.wrapper}>
                {sets.map((s, idx) => (
                    <View key={idx} style={{ flex: 1 }}>
                        <CountdownBar set={s} />
                    </View>
                ))}
            </View>
        );
    }
}

const baseStyles = StyleSheet.create({
    wrapper: {
        marginTop: 5,
        marginBottom: 15,
        width: 3,
        borderRadius: 10,
    }
});

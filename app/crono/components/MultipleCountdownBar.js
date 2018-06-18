import React from 'react';
import { View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';

import CountdownBar from './CountdownBar';

export default class MultipleCountdownBar extends React.PureComponent {
    static propTypes = {
        sets: ImmutablePropTypes.list.isRequired
    };

    render() {
        const { sets } = this.props;
        return (
            <View>
                {sets.map((s, idx) => (
                    <View key={idx} style={{ flex: 1 }}>
                        <CountdownBar set={s} />
                    </View>
                ))}
            </View>
        );
    }
}


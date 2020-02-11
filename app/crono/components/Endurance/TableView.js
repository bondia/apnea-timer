import React from 'react';
import { View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';

import LiveCounter from './LiveCounter';

export default class CronoPane extends React.PureComponent {
    static propTypes = {
        crono: ImmutablePropTypes.map.isRequired
    };

    render() {
        const { crono } = this.props;
        if (crono === null || crono.get('sets').size <= 0) {
            return null;
        }

        return (
            <View style={{ flex: 1 }}>
                <LiveCounter crono={crono} />
            </View>
        );
    }
}

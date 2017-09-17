import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import * as enums from 'app/editor/enums';
import Crono from './Crono';

export default class SetsList extends React.PureComponent {

    static propTypes = {
        crono: ImmutablePropTypes.map.isRequired,
    }

    render() {
        const { crono } = this.props
        let sets = crono.getIn([ 'sets' ])
        // sets = sets.filter(s => {
        //     s.get('mode') === enums.SET_MODE_INITIAL
        // })

        return (
            <ScrollView>
                <View style={baseStyles.setsWrapper}>

                    {sets.map((item, idx) => {
                        const type = item.get('type');
                        const mode = item.getIn([ 'running', 'mode' ]);
                        const countdown = item.getIn([ 'running', 'countdown']);

                        return (
                            <View key={idx} style={baseStyles.item}>
                                <Crono  running={mode == enums.SET_MODE_RUNNING}
                                        type={type}
                                        duration={countdown}
                                        />
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        )
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

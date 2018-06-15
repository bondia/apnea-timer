import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';

import * as editorEnums from 'app/editor/enums';
import { FONT_CLOLR_GREY_LIGHT, COLOR_LIGHT } from 'app/common/styles/commonStyles';

export default class CountdownBar extends React.PureComponent {
    static propTypes = {
        set: ImmutablePropTypes.map
    };

    calculateHeight() {
        const { set } = this.props;
        if (set == null) {
            return '0';
        }

        const should = set.get('duration');
        const has = set.getIn(['running', 'countdown']);
        const percent = has * 100 / should;
        return `${percent} %`;
    }

    render() {
        const { set } = this.props;

        const styles =
            set != null && set.get('type') === editorEnums.SET_TYPE_HOLD ? baseStyles.hold : baseStyles.prepare;

        return (
            <View style={baseStyles.bar}>
                <View style={[baseStyles.innerBar, styles, { height: this.calculateHeight(set) }]} />
            </View>
        );
    }
}

const baseStyles = StyleSheet.create({
    bar: {
        height: '100%',
        width: 3,
        backgroundColor: FONT_CLOLR_GREY_LIGHT,
    },

    innerBar: {
        height: '100%',
        width: 3,
        flex: 1,
        borderRadius: 10
    },

    prepare: {
        alignSelf: 'flex-end',
        backgroundColor: COLOR_LIGHT
    },

    hold: {
        alignSelf: 'flex-end',
        backgroundColor: 'red'
    }
});

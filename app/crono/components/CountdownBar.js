import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';

import * as editorEnums from 'app/editor/enums';
import { FONT_CLOLR_GREY_LIGHT, COLOR_GREEN_LIGHT, COLOR_RED_LIGHT } from 'app/common/styles/commonStyles';

export default class CountdownBar extends React.PureComponent {
    static propTypes = {
        set: ImmutablePropTypes.map
    };

    calculateHeight() {
        const { set } = this.props;
        // check set
        if (set == null) {
            return 0;
        }
        // check mode
        const mode = set.getIn(['running', 'mode']);
        if (mode === editorEnums.SET_MODE_FINISHED || mode === editorEnums.SET_MODE_SKIPED) {
            return 0;
        }
        // calculate
        const should = set.get('duration');
        const has = set.getIn(['running', 'countdown']);
        const percent = has * 100 / should;
        return `${percent} %`;
    }

    render() {
        const { set, style } = this.props;

        const barStyles = style ? [style, baseStyles.bar] : baseStyles.bar;
        const styles =
            set != null && set.get('type') === editorEnums.SET_TYPE_HOLD ? baseStyles.hold : baseStyles.prepare;

        return (
            <View style={barStyles}>
                <View style={[baseStyles.innerBar, styles, { height: this.calculateHeight(set) }]} />
            </View>
        );
    }
}

const baseStyles = StyleSheet.create({
    bar: {
        flex: 1,
        width: 5,
        maxWidth: 5,
        alignItems: 'baseline',
        backgroundColor: FONT_CLOLR_GREY_LIGHT
    },

    innerBar: {
        position: 'absolute',
        bottom: 0,
        width: 5
    },

    prepare: {
        backgroundColor: COLOR_GREEN_LIGHT
    },

    hold: {
        backgroundColor: COLOR_RED_LIGHT
    }
});

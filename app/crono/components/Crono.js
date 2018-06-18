import React from 'react';
import { StyleSheet, View } from 'react-native';

import * as enums from 'app/editor/enums';
import { FONT_COLOR_GREY, COLOR_RED_NORMAL, COLOR_GREEN_NORMAL } from 'app/common/styles/commonStyles';
import secondsToTimeString from 'app/common/utils/time/secondsToTimeString';

import TextComponent from 'app/common/components/TextComponent';

export default class Crono extends React.PureComponent {
    static defaultProps = {
        active: true,
        running: false,
        duration: 0,
        type: enums.SET_TYPE_PREPARE,
        contraction: -1
    };

    render() {
        const { active, duration, type, contraction } = this.props;

        let color = type == enums.SET_TYPE_PREPARE ? COLOR_GREEN_NORMAL : COLOR_RED_NORMAL;
        color = !active ? FONT_COLOR_GREY : color;

        const styles = StyleSheet.create({
            clock: {
                color,
                paddingTop: 25,
                fontSize: 30,
                lineHeight: 30,
                textAlign: 'center'
            },
            contraction: {
                color: FONT_COLOR_GREY,
                fontSize: 15,
                lineHeight: 15,
                textAlign: 'center'
            }
        });

        return (
            <View>
                <TextComponent style={styles.clock}>{secondsToTimeString(duration)}</TextComponent>
                {contraction > 0 && (
                    <TextComponent style={styles.contraction}>{secondsToTimeString(contraction)}</TextComponent>
                )}
            </View>
        );
    }
}

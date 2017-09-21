import React from 'react';
import { StyleSheet, View } from 'react-native';

import * as enums from 'app/editor/enums';
import secondsToTimeString from 'app/common/utils/time/secondsToTimeString';

import TextComponent from 'app/common/components/TextComponent';

export default class Crono extends React.PureComponent {

    static defaultProps = {
        active: true,
        running: false,
        duration: 0,
        type: enums.SET_TYPE_PREPARE
    }

    render() {
        const { active, duration, type } = this.props;

        let color = type == enums.SET_TYPE_PREPARE ? 'green' : 'red';
        color = !active ? 'grey' : color;

        const styles = StyleSheet.create({
            clock: {
                color,
                paddingTop: 25,
                fontSize: 30,
                lineHeight: 30,
                textAlign: 'center',
            }
        });

        return (
            <View>
                <TextComponent style={styles.clock}>
                    {secondsToTimeString(duration)}
                </TextComponent>
            </View>
        );
    }
}

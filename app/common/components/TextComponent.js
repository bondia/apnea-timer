import React from 'react';
import { Text, StyleSheet } from 'react-native';

import * as common from 'app/common/styles/commonStyles';

export default (props) => {
    return (
        <Text {...props} style={[styles.text, props.style]}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: common.FONT_SIZE_M,
        fontFamily: common.FONT_FAMILY
    }
});

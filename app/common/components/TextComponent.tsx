import React, { ReactNode } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

import * as common from '../styles/commonStyles';

interface TextComponentProps {
    style: TextStyle;
    children: ReactNode;
}

export default function TextComponent(props: TextComponentProps): JSX.Element {
    const { children, style} = props;

    return (
        <Text {...props} style={[styles.text, style]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: common.FONT_SIZE_M,
        fontFamily: common.FONT_FAMILY
    }
});

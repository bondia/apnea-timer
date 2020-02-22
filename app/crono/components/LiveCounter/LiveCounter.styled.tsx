import styled from 'styled-components/native';
import { View, StyleSheet } from 'react-native';

import {
    FONT_COLOR_GREY,
    FONT_SIZE_L,
    COLOR_LIGHT,
    COLOR_RED_NORMAL,
    COLOR_GREEN_NORMAL
} from '../../../common/styles/commonStyles';

export const LiveCounterWrapper = styled.View`
    flex: 2;
`;

export const BlockWrapper = styled.View`
    width: 50%;
`;

export const baseStyles = StyleSheet.create({
    // HEADER
    header: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerBlock: {
        width: '50%'
    },

    headerLabel: {
        textAlign: 'center',
        color: FONT_COLOR_GREY
    },

    headerText: {
        textAlign: 'center',
        fontSize: FONT_SIZE_L,
        color: COLOR_LIGHT
    }
});
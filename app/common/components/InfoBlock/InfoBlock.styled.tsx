import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import {
    FONT_COLOR_GREY,
    FONT_SIZE_L,
    COLOR_LIGHT,
} from '../../styles/commonStyles';

export const BlockWrapper = styled.View`
    width: 50%;
`;

export const baseStyles = StyleSheet.create({
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
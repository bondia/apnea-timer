import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import {
    FONT_COLOR_GREY,
} from '../../../common/styles/commonStyles';

export const FormWrapper = styled.View`
    flex: 1;
    padding: 10px;
`;

interface SetsListWrapperProps {
    fullHeight: boolean;
}
export const SetsListWrapper = styled.View<SetsListWrapperProps>`
    flex: ${props => props.fullHeight ? 5 : 4};
`;

interface StaticMainFormWrapperProps {
    small: boolean;
}
export const StaticMainFormWrapper = styled.View<StaticMainFormWrapperProps>`
    flex: ${props => props.small ? 2 : 3};
    max-height: ${props => props.small ? '148px' : 'auto'};
`;

export const MainInfoBlock = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
`;

export const baseStyles = StyleSheet.create({
    label: {
        marginTop: 15,
        textAlign: 'center',
        width: '100%',
        color: FONT_COLOR_GREY
    },
});


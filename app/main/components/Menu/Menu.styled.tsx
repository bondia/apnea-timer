import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { FONT_COLOR_LIGHT } from '../../../common/styles/commonStyles';

export const MenuWrapper = styled.ScrollView`
    flex: 1;
`;

interface ActionAreaProps {
    color: string;
};
export const ActionArea = styled.TouchableHighlight<ActionAreaProps>`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};
    min-height: 250px;
`;


// TODO: Remove styled text
export const styles = StyleSheet.create({
    baseStyles: {
        fontSize: 30,
        color: FONT_COLOR_LIGHT,
        textAlign: 'center',
        alignItems: 'center'
    }
});
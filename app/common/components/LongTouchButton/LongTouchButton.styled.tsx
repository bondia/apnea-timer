import styled from 'styled-components/native';
import { FONT_CLOLR_GREY_LIGHT, COLOR_LIGHT } from '../../styles/commonStyles';

export const LongTouchButtonContainer = styled.View`
    width: 100%;
    flex: 1;
`;

interface ButtonWrapperProps {
    active: boolean;
};
export const ButtonWrapper = styled.View<ButtonWrapperProps>`
    padding: 20px;
    background-color: ${props => (props.active ? COLOR_LIGHT : FONT_CLOLR_GREY_LIGHT)};
    border-radius: 3px;
    margin: 5px;
`;

export const ButtonText = styled.Text`
    background-color: transparent;
    text-align: center;
    font-size: 20px;
`;
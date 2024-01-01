import styled from 'styled-components/native';
import { COLOR_LIGHT, FONT_CLOLR_GREY_LIGHT } from '../../commonStyles';

type ButtonWrapperProps = {
  active: boolean;
};

// eslint-disable-next-line import/prefer-default-export
export const ButtonWrapper = styled.TouchableHighlight<ButtonWrapperProps>`
  background-color: ${props => (props.active ? COLOR_LIGHT : FONT_CLOLR_GREY_LIGHT)};
  border-radius: 3px;
  height: 100%;
`;

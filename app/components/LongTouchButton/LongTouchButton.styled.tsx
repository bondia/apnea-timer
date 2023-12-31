import styled from 'styled-components/native';
import { COLOR_LIGHT, FONT_CLOLR_GREY_LIGHT } from '../../commonStyles';

export const LongTouchButtonContainer = styled.View`
  width: 100%;
  flex: 1;
  min-height: 90px;
`;

type ButtonWrapperProps = {
  active: boolean;
};

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
  padding: 20px;
  background-color: ${props => (props.active ? COLOR_LIGHT : FONT_CLOLR_GREY_LIGHT)};
  border-radius: 3px;
  margin: 0 5px;
`;

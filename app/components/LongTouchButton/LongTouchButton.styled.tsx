import styled from 'styled-components/native';
import { PropsWithAppTheme } from '../../themes/types';

type ButtonWrapperProps = PropsWithAppTheme<{
  active: boolean;
}>;

export const Wrapper = styled.View<ButtonWrapperProps>`
  flex: 1;

  background-color: ${({ theme: { colors }, active }) =>
    active ? colors.primary050 : colors.inverted200};

  border-radius: 3px;
  shadow-opacity: 0.1;
  shadow-color: ${({ theme: { colors } }) => colors.primary900};
  shadow-radius: 1px;
  shadow-offset: 2px 2px;
`;

export const TouchableHighlight = styled.TouchableHighlight`
  flex: 1;
`;

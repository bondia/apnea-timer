import styled from 'styled-components/native';
import { PropsWithAppTheme } from '../../themes/types';

type ButtonWrapperProps = PropsWithAppTheme<{
  active: boolean;
}>;

// eslint-disable-next-line import/prefer-default-export
export const ButtonWrapper = styled.TouchableHighlight<ButtonWrapperProps>`
  background-color: ${({ theme: { colors }, active }) =>
    active ? colors.primary050 : colors.inverted700};
  border-radius: 3px;
  height: 100%;
`;

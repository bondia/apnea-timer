import styled from 'styled-components/native';
import { PropsWithAppTheme } from '../../themes/theme.d';

type ButtonWrapperProps = PropsWithAppTheme<{
  active: boolean;
}>;

// eslint-disable-next-line import/prefer-default-export
export const ButtonWrapper = styled.TouchableHighlight<ButtonWrapperProps>`
  background-color: ${({ theme: { oldColors }, active }) =>
    active ? oldColors.COLOR_LIGHT : oldColors.FONT_CLOLR_GREY_LIGHT};
  border-radius: 3px;
  height: 100%;
`;

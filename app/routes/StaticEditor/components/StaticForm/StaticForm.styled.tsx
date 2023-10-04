import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { FONT_COLOR_GREY } from '../../../../commonStyles';

export const FormWrapper = styled.View`
  flex: 1;
  padding: 5px;
`;

// FORM

type StaticMainFormWrapperProps = {
  small: boolean;
};
export const StaticMainFormWrapper = styled.View<StaticMainFormWrapperProps>`
  flex: ${(props: StaticMainFormWrapperProps) => (props.small ? 2 : 3)};
  max-height: ${(props: StaticMainFormWrapperProps) => (props.small ? '150px' : '225px')};
`;

export const MainInfoBlock = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

// LIST

type SetsListWrapperProps = {
  fullHeight: boolean;
};
export const SetsListWrapper = styled.View<SetsListWrapperProps>`
  flex: ${(props: SetsListWrapperProps) => (props.fullHeight ? 5 : 4)};
`;

// TODO: Remove Text StyleSheet
export const baseStyles = StyleSheet.create({
  label: {
    marginTop: 15,
    textAlign: 'center',
    width: '100%',
    color: FONT_COLOR_GREY,
  },
});

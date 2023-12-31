import styled from 'styled-components/native';

// FORM

type StaticMainFormWrapperProps = {
  small: boolean;
};

export const StaticMainFormWrapper = styled.View<StaticMainFormWrapperProps>`
  flex: ${(props: StaticMainFormWrapperProps) => (props.small ? 2 : 3)};
  max-height: ${(props: StaticMainFormWrapperProps) => (props.small ? '150px' : '225px')};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  max-height: 60px;
`;

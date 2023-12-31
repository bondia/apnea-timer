import styled from 'styled-components/native';

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

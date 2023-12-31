import styled from 'styled-components/native';

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
  flex-direction: row;
  justify-content: space-around;
`;

// LIST

type SetsListWrapperProps = {
  fullHeight: boolean;
};

export const SetsListWrapper = styled.View<SetsListWrapperProps>`
  flex: ${(props: SetsListWrapperProps) => (props.fullHeight ? 5 : 4)};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  max-height: 60px;
`;

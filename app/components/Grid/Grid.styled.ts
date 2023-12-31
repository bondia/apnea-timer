import styled from 'styled-components/native';

export const Grid = styled.View`
  margin: 0 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

type ColProps = {
  flex?: number;
};

export const Col = styled.View<ColProps>`
  flex: ${({ flex = 1 }) => flex};
`;

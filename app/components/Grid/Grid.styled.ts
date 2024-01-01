import styled from 'styled-components/native';

type ColProps = {
  flex?: number;
};

/**
 * @deprecated
 */
// eslint-disable-next-line import/prefer-default-export
export const Col = styled.View<ColProps>`
  flex: ${({ flex = 1 }) => flex};
`;

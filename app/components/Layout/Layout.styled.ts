import styled from 'styled-components/native';
import flexDirection from './utils/flexDirection';
import justifyContent from './utils/justifyContent';

type StackProps = {
  size?: number;
  fullWidth?: boolean;
  horizontal?: boolean;
  reversed?: boolean;
  wrap?: boolean;
  spaceAround?: boolean;
  centered?: boolean;
};

export const Stack = styled.View<StackProps>`
  flex: ${({ size = 1 }) => size};
  width: ${({ fullWidth = false }) => (fullWidth ? '100%' : 'auto')};
  flex-wrap: ${({ wrap = false }) => (wrap ? 'wrap' : 'nowrap')};
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
`;

export const ScrollableStack = styled.ScrollView<StackProps>`
  flex: ${({ size = 1 }) => size};
  width: ${({ fullWidth = false }) => (fullWidth ? '100%' : 'auto')};
  flex-direction: ${flexDirection};
`;

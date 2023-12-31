import styled from 'styled-components/native';
import flexDirection from './utils/flexDirection';

type StackProps = {
  size?: number;
  fullWidth?: boolean;
  horizontal?: boolean;
  reversed?: boolean;
  wrap?: boolean;
};

export const Stack = styled.View<StackProps>`
  flex: ${({ size = 1 }) => size};
  width: ${({ fullWidth = false }) => (fullWidth ? '100%' : 'auto')};
  flex-direction: ${flexDirection};
  flex-wrap: ${({ wrap = false }) => (wrap ? 'wrap' : 'nowrap')};
`;

export const ScrollableStack = styled.ScrollView<StackProps>`
  flex: ${({ size = 1 }) => size};
  width: ${({ fullWidth = false }) => (fullWidth ? '100%' : 'auto')};
  flex-direction: ${flexDirection};
`;

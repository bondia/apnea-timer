import styled from 'styled-components/native';
import flexDirection from './utils/flexDirection';
import justifyContent from './utils/justifyContent';

type StackProps = {
  flex?: number;
  fullWidth?: boolean;
  horizontal?: boolean;
  reversed?: boolean;
  wrap?: boolean;
  spaceAround?: boolean;
  centered?: boolean;
};

const widthRule = ({ fullWidth = false }) => (fullWidth ? '100%' : 'auto');
const flexRule = ({ flex = 1 }) => flex;
const flexWrapRule = ({ wrap = false }) => (wrap ? 'wrap' : 'nowrap');

export const Stack = styled.View<StackProps>`
  width: ${widthRule};
  flex: ${flexRule};
  flex-wrap: ${flexWrapRule};
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
`;

export const ScrollableStack = styled.ScrollView<StackProps>`
  width: ${widthRule};
  flex: ${flexRule};
  flex-wrap: ${flexWrapRule};
  flex-direction: ${flexDirection};
`;

type SpacerProps = {
  width?: string;
  height?: string;
};

export const Spacer = styled.View<SpacerProps>`
  width: ${({ width = 'auto' }) => width};
  height: ${({ height = 'auto' }) => height};
`;

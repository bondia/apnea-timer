import styled from 'styled-components/native';
import flexDirection from './utils/flexDirection';
import justifyContent from './utils/justifyContent';

type StackProps = {
  // width
  fullWidth?: boolean;
  // flex
  grow?: string;
  shrink?: string;
  basis?: string;
  // flex directions
  horizontal?: boolean;
  reversed?: boolean;
  // flex disposition
  wrap?: boolean;
  spaceAround?: boolean;
  centered?: boolean;
};

const widthRule = ({ fullWidth = false }: StackProps) => (fullWidth ? '100%' : 'auto');
const flexRule = ({ grow = '1', shrink = '0', basis = '0' }: StackProps) => `${grow} ${shrink} ${basis}`;
const flexWrapRule = ({ wrap = false }: StackProps) => (wrap ? 'wrap' : 'nowrap');

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

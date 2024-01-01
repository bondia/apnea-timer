import styled from 'styled-components/native';
import { SpacingValues } from './layout.d';
import flexDirection from './utils/flexDirection';
import justifyContent from './utils/justifyContent';
import spacingToPixels from './utils/spacingToPixels';

export type StackProps = {
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
  // gaps
  rowGap?: SpacingValues;
  columnGap?: SpacingValues;
};

export const widthRule = ({ fullWidth = false }: StackProps) => (fullWidth ? '100%' : 'auto');
export const flexRule = ({ grow = '0', shrink = '1', basis = 'auto' }: StackProps) => `${grow} ${shrink} ${basis}`;
export const flexWrapRule = ({ wrap = false }: StackProps) => (wrap ? 'wrap' : 'nowrap');

const Stack = styled.View<StackProps>`
  width: ${widthRule};
  flex: ${flexRule};
  flex-wrap: ${flexWrapRule};
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  row-gap: ${({ rowGap }) => spacingToPixels(rowGap)};
  column-gap: ${({ columnGap }) => spacingToPixels(columnGap)};
`;

export default Stack;

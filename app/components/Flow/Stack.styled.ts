import styled from 'styled-components/native';
import { marginSpacerRule } from './Spacer.styled';
import { SpacingValues } from './layout';
import flexDirection from './utils/flexDirection';
import justifyContent from './utils/justifyContent';
import spacingToPixels from './utils/spacingToPixels';

export type StackProps = {
  // width
  fullWidth?: boolean;
  // spaces
  spaceX?: SpacingValues;
  spaceY?: SpacingValues;
  spaceTop?: SpacingValues;
  spaceBottom?: SpacingValues;
  spaceLeft?: SpacingValues;
  spaceRight?: SpacingValues;
  // flex
  grow?: number;
  shrink?: number;
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
  // debuger
  debug?: string | boolean;
};

export const widthRule = ({ fullWidth = false }: StackProps) => (fullWidth ? '100%' : 'auto');
export const flexRule = ({ grow = 0, shrink = 1, basis = 'auto' }: StackProps) => `${grow} ${shrink} ${basis}`;
export const flexWrapRule = ({ wrap = false }: StackProps) => (wrap ? 'wrap' : 'nowrap');

const Stack = styled.View<StackProps>`
  width: ${widthRule};
  flex: ${flexRule};
  flex-wrap: ${flexWrapRule};
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  row-gap: ${({ rowGap }) => spacingToPixels(rowGap)};
  column-gap: ${({ columnGap }) => spacingToPixels(columnGap)};
  border: ${({ debug = false }) => (debug ? `1px solid ${debug === true ? 'black' : debug}` : 'none')};
  margin: ${({
    spaceX: xAxis,
    spaceY: yAxis,
    spaceTop: top,
    spaceBottom: bottom,
    spaceLeft: left,
    spaceRight: right,
  }) => marginSpacerRule({ xAxis, yAxis, top, right, bottom, left })};
`;

export default Stack;

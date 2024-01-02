import styled from 'styled-components/native';
import { marginSpacerRule } from './Spacer.styled';
import { StackProps, flexRule, flexWrapRule, widthRule } from './Stack.styled';
import flexDirection from './utils/flexDirection';
import spacingToPixels from './utils/spacingToPixels';

const ScrollableStack = styled.ScrollView<StackProps>`
  width: ${widthRule};
  flex: ${flexRule};
  flex-wrap: ${flexWrapRule};
  flex-direction: ${flexDirection};
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

export default ScrollableStack;

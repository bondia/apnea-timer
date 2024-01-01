import styled from 'styled-components/native';
import { SpacingValues } from './layout.d';
import spacingToPixels from './utils/spacingToPixels';

type SpacerProps = {
  // block
  spacing?: SpacingValues;
  horizontal?: boolean;
  // margins
  xAxis?: SpacingValues;
  yAxis?: SpacingValues;
  top?: SpacingValues;
  right?: SpacingValues;
  bottom?: SpacingValues;
  left?: SpacingValues;
  // debug
  debug?: string | boolean;
};

const marginRule = ({ xAxis, yAxis, top, right, bottom, left }: SpacerProps) => {
  const topValue = spacingToPixels(top || yAxis || undefined);
  const bottomValue = spacingToPixels(bottom || yAxis || undefined);
  const rightValue = spacingToPixels(right || xAxis || undefined);
  const leftValue = spacingToPixels(left || xAxis || undefined);
  return `${topValue} ${rightValue} ${bottomValue} ${leftValue}`;
};

const Spacer = styled.View<SpacerProps>`
  margin: ${marginRule};
  width: ${({ spacing, horizontal }) => (spacing && horizontal ? spacingToPixels(spacing) : 'auto')};
  height: ${({ spacing, horizontal }) => (spacing && !horizontal ? spacingToPixels(spacing) : 'auto')};
  border: ${({ debug = false }) => (debug ? `1px solid ${debug === true ? 'black' : debug}` : 'none')};

  flex: 0 1 auto;
`;

export default Spacer;

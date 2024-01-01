import styled from 'styled-components/native';
import { SpacingValues } from './layout.d';
import spacingToPixels from './utils/spacingToPixels';

type SpacerProps = {
  spacing?: SpacingValues;
  xAxis?: SpacingValues;
  yAxis?: SpacingValues;
  top?: SpacingValues;
  right?: SpacingValues;
  bottom?: SpacingValues;
  left?: SpacingValues;
};

const paddingRule = ({ spacing, xAxis, yAxis, top, right, bottom, left }: SpacerProps) => {
  const topValue = spacingToPixels(top || yAxis || spacing || undefined);
  const bottomValue = spacingToPixels(bottom || yAxis || spacing || undefined);
  const rightValue = spacingToPixels(right || xAxis || spacing || undefined);
  const leftValue = spacingToPixels(left || xAxis || spacing || undefined);
  return `${topValue} ${rightValue} ${bottomValue} ${leftValue}`;
};

const Spacer = styled.View<SpacerProps>`
  padding: ${paddingRule};
`;

export default Spacer;

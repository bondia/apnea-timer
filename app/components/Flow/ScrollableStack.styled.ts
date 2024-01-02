import styled from 'styled-components/native';
import { StackProps, flexRule, flexWrapRule, widthRule } from './Stack.styled';
import flexDirection from './utils/flexDirection';

const ScrollableStack = styled.ScrollView<StackProps>`
  width: ${widthRule};
  flex: ${flexRule};
  flex-wrap: ${flexWrapRule};
  flex-direction: ${flexDirection};
`;

export default ScrollableStack;

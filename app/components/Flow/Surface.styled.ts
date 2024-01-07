import styled from 'styled-components/native';
import { PropsWithAppTheme } from '../../themes/types';
import { flexRule } from './Stack.styled';
import { FlexRules } from './types';

type RadiusValue = boolean | string;

export type SurfaceProps = {
  elevation?: string;
  radius?: RadiusValue;
  radiusTL?: RadiusValue;
  radiusTR?: RadiusValue;
  radiusBR?: RadiusValue;
  radiusBL?: RadiusValue;
} & FlexRules;

const decideRadius = (
  general: RadiusValue = false,
  specific: RadiusValue = false,
) => {
  if (specific === true) {
    return '5px';
  }
  if (specific) {
    return specific;
  }
  if (general === true) {
    return '5px';
  }
  if (general) {
    return general;
  }
  return 0;
};

const Surface = styled.View<PropsWithAppTheme<SurfaceProps>>`
  background-color: ${({ theme, elevation }) =>
    elevation || theme.elevations.ELEVATION_00};

  border-top-left-radius: ${({ radius, radiusTL }) =>
    decideRadius(radius, radiusTL)};
  border-top-right-radius: ${({ radius, radiusTR }) =>
    decideRadius(radius, radiusTR)};
  border-bottom-left-radius: ${({ radius, radiusBR }) =>
    decideRadius(radius, radiusBR)};
  border-bottom-right-radius: ${({ radius, radiusBL }) =>
    decideRadius(radius, radiusBL)};

  flex: ${flexRule};
`;

export default Surface;

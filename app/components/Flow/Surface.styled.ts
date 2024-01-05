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

const decideRadius = (general: RadiusValue, specific: RadiusValue) => {
  if (specific === true || general === true) {
    return '5px';
  }
  if (specific || general) {
    return specific || general;
  }
  return 0;
};

const radiusRule = ({
  radius = false,
  radiusTL = false,
  radiusTR = false,
  radiusBR = false,
  radiusBL = false,
}: SurfaceProps) => {
  const tl = decideRadius(radius, radiusTL);
  const tr = decideRadius(radius, radiusTR);
  const br = decideRadius(radius, radiusBR);
  const bl = decideRadius(radius, radiusBL);
  return `${tl} ${tr} ${br} ${bl}`;
};

const Surface = styled.View<PropsWithAppTheme<SurfaceProps>>`
  background-color: ${({ theme, elevation }) =>
    elevation || theme.elevations.ELEVATION_00};
  border-radius: ${radiusRule};
  flex: ${flexRule};
`;

export default Surface;

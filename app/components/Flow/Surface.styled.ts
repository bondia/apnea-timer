import styled from 'styled-components/native';
import { PropsWithAppTheme } from '../../themes/types';
import { flexRule } from './Stack.styled';
import { FlexRules } from './types';

export type SurfaceProps = {
  elevation?: string;
  radius?: boolean | string;
} & FlexRules;

const Surface = styled.View<PropsWithAppTheme<SurfaceProps>>`
  background-color: ${({ theme, elevation }) =>
    elevation || theme.elevations.ELEVATION_00};
  border-radius: ${({ radius = false }) => {
    if (radius === true) {
      return '5px';
    }
    if (radius) {
      return radius;
    }
    return 0;
  }};

  flex: ${flexRule};
`;

export default Surface;

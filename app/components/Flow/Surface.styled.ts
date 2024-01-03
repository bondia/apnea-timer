import styled from 'styled-components/native';
import { PropsWithAppTheme } from '../../themes/types';

type SurfaceProps = PropsWithAppTheme<{
  elevation?: string;
  radius?: boolean;
}>;

const Surface = styled.View<SurfaceProps>`
  background-color: ${({ theme, elevation }) => elevation || theme.elevations.ELEVATION_00};
  border-radius: ${({ radius = false }) => (radius ? '5px' : 0)};
`;

export default Surface;

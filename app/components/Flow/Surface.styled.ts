import styled from 'styled-components/native';
import { AppTheme, PropsWithAppTheme } from '../../themes/theme.d';

type SurfaceProps = PropsWithAppTheme<{
  theme: AppTheme;
  elevation?: string;
  radius?: boolean;
}>;

const Surface = styled.View<SurfaceProps>`
  background-color: ${({ theme, elevation }) => elevation || theme.elevations.ELEVATION_00};
  border-radius: ${({ radius = false }) => (radius ? '5px' : 0)};
`;

export default Surface;

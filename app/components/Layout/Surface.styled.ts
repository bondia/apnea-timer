import styled from 'styled-components/native';
import { SurfaceColorsEnum } from '../../darkTheme';

type SurfaceProps = {
  elevation?: SurfaceColorsEnum;
  radius?: boolean;
};

const Surface = styled.View<SurfaceProps>`
  background-color: ${({ elevation = SurfaceColorsEnum.ELEVATION_00 }) => elevation};
  border-radius: ${({ radius = false }) => (radius ? '5px' : 0)};
`;

export default Surface;

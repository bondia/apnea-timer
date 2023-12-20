import styled from 'styled-components/native';
import { SURFACE_COLORS } from '../../../../darkTheme';

// eslint-disable-next-line import/prefer-default-export
export const LiveCounterWrapper = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  margin: 0 0 10px;
  padding: 5px 0;

  background-color: ${SURFACE_COLORS.ELEVATION_03};
  border-radius: 5px;
`;

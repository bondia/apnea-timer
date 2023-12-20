import styled from 'styled-components/native';
import { SURFACE_COLORS } from '../../darkTheme';

export const Grid = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const GridItem = styled.View`
  width: 50%;
  padding: 8px 10px;
`;

type SetProps = {
  isRunning: boolean;
};

export const Set = styled.View<SetProps>`
  padding: 5px;
  min-height: 70px;
  border-radius: 5px;
  background-color: ${({ isRunning }: SetProps) =>
    isRunning ? SURFACE_COLORS.ELEVATION_24 : SURFACE_COLORS.ELEVATION_01};
`;

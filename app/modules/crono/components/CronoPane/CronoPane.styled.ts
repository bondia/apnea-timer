import styled from 'styled-components/native';
import { SURFACE_COLORS } from '../../../../darkTheme';

export const PaneWrapper = styled.View`
  flex: 1;
  padding: 20px 10px 10px;
  background-color: ${SURFACE_COLORS.ELEVATION_00};
`;

export const CountersWrapper = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  margin-bottom: 10px;
`;

export const SetsWrapper = styled.View`
  flex: 1 0 0;
`;

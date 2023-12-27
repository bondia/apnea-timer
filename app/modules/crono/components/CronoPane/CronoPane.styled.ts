import styled from 'styled-components/native';
import { SURFACE_COLORS } from '../../../../darkTheme';

export const PaneWrapper = styled.View`
  flex: 1;
  padding: 15px 0 10px;
  background-color: ${SURFACE_COLORS.ELEVATION_00};
`;

export const ContentWrapper = styled.View`
  flex: 1;
  margin-bottom: 10px;
`;

import styled from 'styled-components/native';
import { Row } from '../../../../components/Grid';
import { SURFACE_COLORS } from '../../../../darkTheme';

// eslint-disable-next-line import/prefer-default-export
export const LiveCounterRow = styled(Row)`
  margin: 0 0 10px;
  padding: 10px 0;
  background-color: ${SURFACE_COLORS.ELEVATION_03};
  border-radius: 5px;
`;

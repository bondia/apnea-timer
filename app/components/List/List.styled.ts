import styled from 'styled-components/native';
import { SURFACE_COLORS } from '../../darkTheme';

export const ListItem = styled.View`
  width: 50%;
  padding: 4px 4px;
`;

type ListItemContent = {
  active: boolean;
};

export const ListItemContent = styled.View<ListItemContent>`
  border-radius: 5px;
  background-color: ${({ active }: ListItemContent) =>
    active ? SURFACE_COLORS.ELEVATION_24 : SURFACE_COLORS.ELEVATION_01};
`;

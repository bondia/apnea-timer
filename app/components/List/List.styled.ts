import styled from 'styled-components/native';
import { SURFACE_COLORS } from '../../darkTheme';

export const List = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ListItem = styled.View`
  width: 50%;
  padding: 8px 10px;
`;

type ListItemContent = {
  active: boolean;
};

export const ListItemContent = styled.View<ListItemContent>`
  padding: 5px;
  min-height: 70px;
  border-radius: 5px;
  background-color: ${({ active }: ListItemContent) =>
    active ? SURFACE_COLORS.ELEVATION_24 : SURFACE_COLORS.ELEVATION_01};
`;

import styled from 'styled-components/native';

export const Grid = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-around;
`;

export const GridItem = styled.View`
  width: 25%;
  padding: 2px 0;
`;

interface SetProps {
  isRunning: boolean;
}

export const Set = styled.View<SetProps>`
  min-height: 60px;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 7px;
  border-width: 3px;
  border-color: ${(props: SetProps) => (props.isRunning ? '#ffa500' : 'transparent')};
`;

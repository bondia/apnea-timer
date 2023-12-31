import styled from 'styled-components/native';

export const MenuWrapper = styled.ScrollView`
  flex: 1;
`;

type ActionAreaProps = {
  color: string;
};

export const ActionArea = styled.TouchableHighlight<ActionAreaProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: ActionAreaProps) => props.color};
  min-height: 175px;
`;

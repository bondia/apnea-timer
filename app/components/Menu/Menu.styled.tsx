import styled from 'styled-components/native';

type ActionAreaProps = {
  color: string;
};

// eslint-disable-next-line import/prefer-default-export
export const ActionArea = styled.TouchableHighlight<ActionAreaProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: ActionAreaProps) => props.color};
  min-height: 175px;
`;

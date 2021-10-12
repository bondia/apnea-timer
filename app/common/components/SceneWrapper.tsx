import React, { FC, ReactNode } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;
interface SceneWrapperProps {
  children: ReactNode;
}

const SceneWrapper: FC<SceneWrapperProps> = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default SceneWrapper;

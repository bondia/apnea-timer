import React from 'react';
import styled from 'styled-components/native';

interface SceneWrapperProps {
  children: JSX.Element;
  noHeader?: boolean;
}

export default function SceneWrapper(props: SceneWrapperProps): JSX.Element {
  const { children } = props;
  return <Container>{children}</Container>;
}

const Container = styled.View`
  flex: 1;
`;

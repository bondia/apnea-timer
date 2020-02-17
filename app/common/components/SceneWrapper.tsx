import React from 'react';
import styled from 'styled-components/native';

import { HEADER_HEIGHT } from '../../common/styles/commonStyles';

export default function SceneWrapper(props): JSX.Element {
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export const Container = styled.View`
    flex: 1;
    padding-top: ${HEADER_HEIGHT}px;
`;

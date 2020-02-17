import React from 'react';
import styled from 'styled-components/native';

import { HEADER_HEIGHT } from '../../common/styles/commonStyles';

interface SceneWrapperProps {
    children: JSX.Element;
    noHeader?: boolean;
}

export default function SceneWrapper(props: SceneWrapperProps): JSX.Element {
    const {
        noHeader = false,
        children
    } = props;

    return (
        <Container noHeader={noHeader}>
            {children}
        </Container>
    );
}

/**
 * STYLES
 */

interface ContainerProps {
    noHeader: boolean;
};
export const Container = styled.View<ContainerProps>`
    flex: 1;
    padding-top: ${props => props.noHeader ? '0' : `${HEADER_HEIGHT}px`};
`;

import React from 'react';

import SceneWrapper from '../../common/components/SceneWrapper';
import Menu from './Menu/Menu';

export default function MainScene(): JSX.Element {
    return (
        <SceneWrapper>
            <Menu />
        </SceneWrapper>
    );
}

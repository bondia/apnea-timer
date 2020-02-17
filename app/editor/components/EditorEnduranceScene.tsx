import React from 'react';

import SceneWrapper from '../../common/components/SceneWrapper';
import EditorEndurancePane from './Endurance/EditorEndurancePane';

export default function EditorEnduranceScene(): JSX.Element {
    return (
        <SceneWrapper>
            <EditorEndurancePane />
        </SceneWrapper>
    );
}
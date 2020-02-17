import React from 'react';

import SceneWrapper from '../../common/components/SceneWrapper';
import EditorPane from './Editor/EditorPane';

export default function EditorScene(): JSX.Element {
    return (
        <SceneWrapper>
            <EditorPane />
        </SceneWrapper>
    );
}

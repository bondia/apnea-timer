import React from 'react';

import { EditorStateType } from '../../editor/redux/editorTypes';

import SceneWrapper from '../../common/components/SceneWrapper';
import CronoPane from './CronoPane';

interface CronoSceneProps {
    initialData: EditorStateType;
}

export default function CronoScene(props: CronoSceneProps): JSX.Element {
    const { initialData } = props;
    return (
        <SceneWrapper noHeader>
            <CronoPane initialData={initialData} />
        </SceneWrapper>
    );
}
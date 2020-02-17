import React from 'react';

import { ImmutableJSCronoType } from '../redux/CronoTypes';
import SceneWrapper from '../../common/components/SceneWrapper';
import CronoPane from './CronoPane';

interface CronoSceneProps {
    crono: ImmutableJSCronoType;
}

export default function CronoScene(props: CronoSceneProps): JSX.Element {
    const { crono } = props;
    return (
        <SceneWrapper noHeader>
            <CronoPane crono={crono} />
        </SceneWrapper>
    );
}
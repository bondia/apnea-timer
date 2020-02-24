import React from 'react';

import { ImmutableJSEditorSetType } from '../../../editor/redux/editorTypes';
import EditorTimerInput from '../StaticFormInputs/EditorTimerInput';

interface EditorSetProps {
    set: ImmutableJSEditorSetType;
}
export default function EditorSet(props: EditorSetProps): JSX.Element {
    const {
        set,
    } = props;
    return (
        <EditorTimerInput
            index={set.get('pos')}
            type={set.get('type')}
            duration={set.get('duration')}
            zombie={set.get('zombie')}
            setNumber={set.get('pos')}
        />
    );
}
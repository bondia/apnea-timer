import React from 'react';
import { ScrollView } from 'react-native';

import {
    ImmutableJSEditorSetType
} from '../../../editor/redux/editorTypes';

import EditorSet from './StaticSet';

interface EditorSetsListProps {
    sets: ImmutableJSEditorSetType[];
}
export default function EditorSetsList(props: EditorSetsListProps): JSX.Element {
    const { sets } = props;
    return (
        <ScrollView style={{ marginTop: 10, marginBottom: 0 }}>
            {sets.map((item: ImmutableJSEditorSetType, index: number) =>
                <EditorSet key={index} set={item} />
            )}
        </ScrollView>
    );
}
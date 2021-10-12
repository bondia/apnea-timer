import React from 'react';
import { ScrollView } from 'react-native';
import { ImmutableJSType } from '../../../editor/redux/editorTypes';
import EditorSet from './StaticSet';

interface EditorSetsListProps {
  sets: ImmutableJSType[];
}
export default function EditorSetsList(props: EditorSetsListProps): JSX.Element {
  const { sets } = props;
  return (
    <ScrollView style={{ marginTop: 10, marginBottom: 0 }}>
      {sets.map((item: ImmutableJSType, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <EditorSet key={index} set={item} />
      ))}
    </ScrollView>
  );
}

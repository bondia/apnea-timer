import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { ImmutableJSEditorSetType } from '../../../../editor/redux/editorTypes';
import EditorSet from './StaticSet';

type Props = {
  sets: ImmutableJSEditorSetType[];
};

const EditorSetsList: FC<Props> = props => {
  const { sets } = props;
  return (
    <ScrollView style={{ marginTop: 10, marginBottom: 0 }}>
      {sets.map(item => (
        <EditorSet key={item.get('pos')} set={item} />
      ))}
    </ScrollView>
  );
};

export default EditorSetsList;

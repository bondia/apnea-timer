import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { TableSetListType } from '../../../../modules/editor/editorTypes';
import EditorSet from './StaticSet';

type Props = {
  sets: TableSetListType;
};

const EditorSetsList: FC<Props> = props => {
  const { sets } = props;
  return (
    <ScrollView style={{ marginTop: 10, marginBottom: 0 }}>
      {sets.map(set => (
        // TODO: check here the position whether it is the right way
        <EditorSet key={set.pos} set={set} />
      ))}
    </ScrollView>
  );
};

export default EditorSetsList;

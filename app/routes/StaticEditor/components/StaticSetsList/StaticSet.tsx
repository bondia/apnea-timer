import React, { FC } from 'react';
import EditorTimerInput from '../../../../editor-static/components/StaticFormInputs/EditorTimerInput';
import { ImmutableJSEditorSetType } from '../../../../editor/redux/editorTypes';

interface Props {
  set: ImmutableJSEditorSetType;
}

const StaticSet: FC<Props> = props => {
  const { set } = props;
  return (
    <EditorTimerInput
      index={set.get('pos')}
      type={set.get('type')}
      duration={set.get('duration')}
      zombie={set.get('zombie')}
      setNumber={set.get('pos')}
    />
  );
};

export default StaticSet;
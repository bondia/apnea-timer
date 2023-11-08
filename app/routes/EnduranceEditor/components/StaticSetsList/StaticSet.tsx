import React, { FC } from 'react';
import { TableSetType } from '../../../../modules/editor/editorTypes';
import EditorTimerInput from '../../../../modules/editor/components/StaticFormInputs/EditorTimerInput';

type Props = {
  set: TableSetType;
};

const StaticSet: FC<Props> = ({ set: { pos, type, duration, zombie } }) => (
  <EditorTimerInput index={pos} type={type} duration={duration} zombie={zombie} setNumber={pos} />
);

export default StaticSet;

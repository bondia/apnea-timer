import React, { FC } from 'react';
import InfoBlock from '../../../../common/components/InfoBlock';
import TableBaseInput from '../../../../editor-static/components/StaticFormInputs/TableBaseInput';
import TableTypeInput from '../../../../editor-static/components/StaticFormInputs/TableTypeInput';
import { TableType } from '../../../../editor/enums';
import { ImmutableJSEditorStateType } from '../../../../editor/redux/editorTypes';
import * as SC from './StaticForm.styled';
import { decideColor, decideTitle } from './utils';

interface Props {
  editor: ImmutableJSEditorStateType;
}

const StaticMainForm: FC<Props> = props => {
  const { editor } = props;
  const base = editor.getIn(['trainingTable', 'base']);
  const type = editor.getIn(['trainingTable', 'type']);
  const totalTime = editor.getIn(['trainingTable', 'duration']);

  const setTitle = decideTitle(type);
  const setTitleColor = decideColor(type);

  return (
    <SC.StaticMainFormWrapper small={TableType.TABLE_TYPE_FREE === type}>
      <TableTypeInput />

      <SC.MainInfoBlock>
        {TableType.TABLE_TYPE_FREE !== type && (
          <InfoBlock title={setTitle} timeContent={base} textColor={setTitleColor} />
        )}

        <InfoBlock title="Total Time" timeContent={totalTime} />
      </SC.MainInfoBlock>

      {TableType.TABLE_TYPE_FREE !== type && <TableBaseInput />}
    </SC.StaticMainFormWrapper>
  );
};

export default StaticMainForm;

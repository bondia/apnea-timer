import React, { FC } from 'react';
import InfoBlock from '../../../../common/components/InfoBlock';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL } from '../../../../common/styles/commonStyles';
import TableBaseInput from '../../../../editor-static/components/StaticFormInputs/TableBaseInput';
import TableTypeInput from '../../../../editor-static/components/StaticFormInputs/TableTypeInput';
import { TableType } from '../../../../editor/enums';
import { ImmutableJSEditorStateType } from '../../../../editor/redux/editorTypes';
import * as SC from './StaticForm.styled';

const titleByType = {
  [TableType.TABLE_TYPE_CO2]: 'Breath Hold',
  [TableType.TABLE_TYPE_O2]: 'Breath Up',
};

const colorByType = {
  [TableType.TABLE_TYPE_CO2]: COLOR_RED_NORMAL,
  [TableType.TABLE_TYPE_O2]: COLOR_GREEN_NORMAL,
};

interface Props {
  editor: ImmutableJSEditorStateType;
}

const StaticMainForm: FC<Props> = props => {
  const { editor } = props;
  const base = editor.getIn(['trainingTable', 'base']);
  const type = editor.getIn(['trainingTable', 'type']);
  const totalTime = editor.getIn(['trainingTable', 'duration']);

  const compact = TableType.TABLE_TYPE_FREE === type;

  return (
    <SC.StaticMainFormWrapper small={compact}>
      <TableTypeInput />

      <SC.MainInfoBlock>
        {!compact && <InfoBlock title={titleByType[type]} textColor={colorByType[type]} timeContent={base} />}
        <InfoBlock title="Total Time" timeContent={totalTime} />
      </SC.MainInfoBlock>

      {!compact && <TableBaseInput />}
    </SC.StaticMainFormWrapper>
  );
};

export default StaticMainForm;

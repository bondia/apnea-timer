import React from 'react';
import InfoBlock from '../../../common/components/InfoBlock';
import {
  COLOR_GREEN_NORMAL,
  COLOR_RED_NORMAL
} from '../../../common/styles/commonStyles';
import { TableType } from '../../../editor/enums';
import { ImmutableJSEditorType } from '../../../editor/redux/editorTypes';
import TableBaseInput from '../StaticFormInputs/TableBaseInput';
import TableTypeInput from '../StaticFormInputs/TableTypeInput';
import * as SC from './StaticForm.styled';

interface StaticMainFormProps {
  editor: ImmutableJSEditorType;
}
export default function StaticMainForm(
  props: StaticMainFormProps
): JSX.Element {
  const { editor } = props;
  const base = editor.getIn(['trainingTable', 'base']);
  const type = editor.getIn(['trainingTable', 'type']);
  const totalTime = editor.getIn(['trainingTable', 'duration']);

  let setTitle: string = '';
  setTitle = TableType.TABLE_TYPE_CO2 === type ? 'Breath Hold' : setTitle;
  setTitle = TableType.TABLE_TYPE_O2 === type ? 'Breath Up' : setTitle;

  let setTitleColor: string = '';
  setTitleColor =
    TableType.TABLE_TYPE_CO2 === type ? COLOR_RED_NORMAL : setTitleColor;
  setTitleColor =
    TableType.TABLE_TYPE_O2 === type ? COLOR_GREEN_NORMAL : setTitleColor;

  return (
    <SC.StaticMainFormWrapper small={TableType.TABLE_TYPE_FREE === type}>
      <TableTypeInput />

      <SC.MainInfoBlock>
        {TableType.TABLE_TYPE_FREE != type && (
          <InfoBlock
            title={setTitle}
            timeContent={base}
            textColor={setTitleColor}
          />
        )}

        <InfoBlock title="Total Time" timeContent={totalTime} />
      </SC.MainInfoBlock>

      {TableType.TABLE_TYPE_FREE != type && <TableBaseInput />}
    </SC.StaticMainFormWrapper>
  );
}

import React, { FC } from 'react';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL } from '../../../../commonStyles';
import InfoBlock from '../../../../components/InfoBlock';
import TableBaseInput from '../StaticFormInputs/TableBaseInput';
import TableTypeInput from '../StaticFormInputs/TableTypeInput';
import { TableTypeEnum } from '../../../../modules/editor/enums';
import { ImmutableJSEditorStateType } from '../../../../modules/editor/redux/editorTypes';
import * as SC from './StaticForm.styled';

const titleByType = {
  [TableTypeEnum.TABLE_TYPE_CO2]: 'Breath Hold',
  [TableTypeEnum.TABLE_TYPE_O2]: 'Breath Up',
};

const colorByType = {
  [TableTypeEnum.TABLE_TYPE_CO2]: COLOR_RED_NORMAL,
  [TableTypeEnum.TABLE_TYPE_O2]: COLOR_GREEN_NORMAL,
};

type Props = {
  editor: ImmutableJSEditorStateType;
};

const StaticMainForm: FC<Props> = props => {
  const { editor } = props;
  const base = editor.getIn(['trainingTable', 'base']);
  const type = editor.getIn(['trainingTable', 'type']);
  const totalTime = editor.getIn(['trainingTable', 'duration']);

  const compact = TableTypeEnum.TABLE_TYPE_FREE === type;

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

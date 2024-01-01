import React, { FC } from 'react';
import { Stack } from '../../../../components/Layout';
import LongTouchButton from '../../../../components/LongTouchButton';
import { useAppDispatch } from '../../../../redux/hooks';
import { TableTypeEnum } from '../../enums';
import changeTableType from '../../redux/actions/composed/changeTableType';
import { useEditorBaseSelector, useEditorTypeSelector } from '../../redux/editorSelectors';

const TableTypeInput: FC = () => {
  const dispatch = useAppDispatch();
  const type = useEditorTypeSelector();
  const base = useEditorBaseSelector();

  const changeType = (newType: TableTypeEnum) => {
    if (type !== newType) {
      dispatch(changeTableType(base, newType));
    }
  };

  return (
    <Stack grow="0" basis="auto" horizontal columnGap={2}>
      <LongTouchButton
        title="CO2"
        onPressStart={() => changeType(TableTypeEnum.TABLE_TYPE_CO2)}
        active={TableTypeEnum.TABLE_TYPE_CO2 === type}
      />

      <LongTouchButton
        title="O2"
        onPressStart={() => changeType(TableTypeEnum.TABLE_TYPE_O2)}
        active={TableTypeEnum.TABLE_TYPE_O2 === type}
      />

      <LongTouchButton
        title="Free"
        onPressStart={() => changeType(TableTypeEnum.TABLE_TYPE_FREE)}
        active={TableTypeEnum.TABLE_TYPE_FREE === type}
      />
    </Stack>
  );
};

export default TableTypeInput;

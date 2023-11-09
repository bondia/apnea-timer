import React, { FC } from 'react';
import styled from 'styled-components/native';
import LongTouchButton from '../../../../components/LongTouchButton';
import { TableTypeEnum } from '../../enums';
import { useAppDispatch } from '../../../../redux/hooks';
import { useEditorBaseSelector, useEditorTypeSelector } from '../../redux/editorSelectors';
import { changeTableType } from '../../redux/actions/composed/changeTableType';

/**
 * STYLES
 */

export const ButtonsSetWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

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
    <ButtonsSetWrapper>
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
    </ButtonsSetWrapper>
  );
};

export default TableTypeInput;
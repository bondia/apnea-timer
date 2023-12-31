import React, { FC } from 'react';
import styled from 'styled-components/native';
import LongTouchButton from '../../../../components/LongTouchButton';
import { useAppDispatch } from '../../../../redux/hooks';
import { changeTableBase } from '../../redux/actions/composed/changeTableBase';
import { useEditorBaseSelector } from '../../redux/editorSelectors';

export const ButtonsSet = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const TableBaseInput: FC = () => {
  const dispatch = useAppDispatch();
  const base = useEditorBaseSelector();
  return (
    <ButtonsSet>
      <LongTouchButton
        title="-"
        onPressStart={() => dispatch(changeTableBase(base - 5))}
        onPressInterval={() => dispatch(changeTableBase(base - 5))}
      />
      <LongTouchButton
        title="+"
        onPressStart={() => dispatch(changeTableBase(base + 5))}
        onPressInterval={() => dispatch(changeTableBase(base + 5))}
      />
    </ButtonsSet>
  );
};

export default TableBaseInput;

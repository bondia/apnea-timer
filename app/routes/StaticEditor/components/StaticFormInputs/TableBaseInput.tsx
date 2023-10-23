import React, { FC } from 'react';
import styled from 'styled-components/native';
import LongTouchButton from '../../../../components/LongTouchButton';
import { useAppDispatch } from '../../../../redux/hooks';
import { useEditorBaseSelector } from '../../../../modules/editor/redux/editorSelectors';
import { changeTableBase } from '../../../../modules/editor/redux/editorActions';

export const ButtonsSet = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
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

import React, { FC } from 'react';
import { Stack } from '../../../../components/Layout';
import LongTouchButton from '../../../../components/LongTouchButton';
import { useAppDispatch } from '../../../../redux/hooks';
import { changeTableBase } from '../../redux/actions/composed/changeTableBase';
import { useEditorBaseSelector } from '../../redux/editorSelectors';

const TableBaseInput: FC = () => {
  const dispatch = useAppDispatch();
  const base = useEditorBaseSelector();
  return (
    <Stack horizontal columnGap={2}>
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
    </Stack>
  );
};

export default TableBaseInput;

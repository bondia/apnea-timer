import React, { FC, useEffect } from 'react';
import { Stack } from '../../../../components/Layout';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { EditorStateType } from '../../editorTypes';
import createEnduranceTable from '../../redux/actions/composed/createEnduranceTable';
import { editorSelector } from '../../redux/editorSelectors';
import CronoStartButton from '../CronoStartButton/CronoStartButton';
import EnduranceMainForm from './EnduranceMainForm';

const EditorEndurancePane: FC = () => {
  const dispatch = useAppDispatch();
  const editor = useAppSelector(editorSelector);

  useEffect(() => {
    dispatch(createEnduranceTable(35, 35, 8));
  }, [dispatch]);

  if (editor === null) {
    return null;
  }

  const newSets = editor.sets.filter(s => !s.zombie);
  const crono: EditorStateType = {
    ...editor,
    sets: [...newSets],
  };

  return (
    <Stack>
      <EnduranceMainForm editor={editor} />
      <CronoStartButton data={crono} />
    </Stack>
  );
};

export default EditorEndurancePane;

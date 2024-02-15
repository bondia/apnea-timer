import React, { FC, useEffect } from 'react';
import ActionsLayout from '../../../../components/Layouts/ActionsLayout';
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
    dispatch(createEnduranceTable(40000, 30000, 8));
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
    <ActionsLayout
      content={<EnduranceMainForm editor={editor} />}
      actions={<CronoStartButton data={crono} />}
    />
  );
};

export default EditorEndurancePane;

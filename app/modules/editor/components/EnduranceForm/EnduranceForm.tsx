import React, { FC, useEffect } from 'react';
import CronoStartButton from '../CronoStartButton/CronoStartButton';
import { Wrapper } from './EnduranceForm.styled';
import EnduranceMainForm from './EnduranceMainForm';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { editorSelector } from '../../redux/editorSelectors';
import { createEnduranceTable } from '../../redux/actions/composed/createEnduranceTable';
import { EditorStateType } from '../../editorTypes';

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
    <Wrapper>
      <EnduranceMainForm editor={editor} />
      <CronoStartButton data={crono} />
    </Wrapper>
  );
};

export default EditorEndurancePane;

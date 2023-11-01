import React, { FC, useEffect } from 'react';
import CronoStartButton from '../../../../components/CronoStartButton/CronoStartButton';
import { ImmutableJSEditorSetType } from '../../../../modules/editor/redux/editorTypes';
import { Wrapper } from './EnduranceForm.styled';
import EnduranceMainForm from './EnduranceMainForm';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { createEnduranceTable } from '../../../../modules/editor/redux/editorActions';
import { editorSelector } from '../../../../modules/editor/redux/editorSelectors';

const EditorEndurancePane: FC = () => {
  const dispatch = useAppDispatch();
  const editor = useAppSelector(editorSelector);

  useEffect(() => {
    dispatch(createEnduranceTable(35, 35, 8));
  }, [dispatch]);

  if (editor === null) {
    return null;
  }

  const crono = editor.update('sets', (sets: ImmutableJSEditorSetType[]) => sets.filter(s => !s.get('zombie')));

  return (
    <Wrapper>
      <EnduranceMainForm editor={editor} />
      <CronoStartButton data={crono} />
    </Wrapper>
  );
};

export default EditorEndurancePane;

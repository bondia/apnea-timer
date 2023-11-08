import React, { FC, useEffect } from 'react';
import CronoStartButton from '../../../../components/CronoStartButton/CronoStartButton';
import { ImmutableJSTableSetType } from '../../../../modules/editor/editorTypes';
import { Wrapper } from './EnduranceForm.styled';
import EnduranceMainForm from './EnduranceMainForm';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { editorSelector } from '../../../../modules/editor/redux/editorSelectors';
import { createEnduranceTable } from '../../../../modules/editor/redux/actions/composed/createEnduranceTable';

const EditorEndurancePane: FC = () => {
  const dispatch = useAppDispatch();
  const editor = useAppSelector(editorSelector);

  useEffect(() => {
    dispatch(createEnduranceTable(35, 35, 8));
  }, [dispatch]);

  if (editor === null) {
    return null;
  }

  const crono = editor.update('sets', (sets: ImmutableJSTableSetType[]) => sets.filter(s => !s.get('zombie')));

  return (
    <Wrapper>
      <EnduranceMainForm editor={editor} />
      <CronoStartButton data={crono} />
    </Wrapper>
  );
};

export default EditorEndurancePane;

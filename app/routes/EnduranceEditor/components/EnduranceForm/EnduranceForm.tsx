import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CronoStartButton from '../../../../components/CronoStartButton/CronoStartButton';
import * as editorActions from '../../../../editor/redux/editorActions';
import {
  EditorActionsTypes,
  ImmutableJSEditorSetType,
  ImmutableJSEditorType,
} from '../../../../editor/redux/editorTypes';
import { StoreState } from '../../../../redux/types';
import { Wrapper } from './EnduranceForm.styled';
import EnduranceMainForm from './EnduranceMainForm';

interface EditorEnudrancePaneProps {
  editor: ImmutableJSEditorType;
  actions: EditorActionsTypes;
}

const EditorEndurancePane: FC<EditorEnudrancePaneProps> = (props: EditorEnudrancePaneProps) => {
  const { editor, actions } = props;
  const { createEnduranceTable } = actions;

  useEffect(() => {
    createEnduranceTable(35, 35, 8);
  }, [createEnduranceTable]);

  if (editor === null) {
    return null;
  }

  const crono = editor.update('sets', (sets: ImmutableJSEditorSetType[]) => sets.filter(s => !s.get('zombie')));

  return (
    <Wrapper>
      <EnduranceMainForm editor={editor} actions={actions} />
      <CronoStartButton data={crono} />
    </Wrapper>
  );
};

// REDUX

const stateToProps = (state: StoreState) => {
  return {
    editor: state.editor,
  };
};

const dispatchToProps = dispatch => {
  return { actions: bindActionCreators(editorActions, dispatch) };
};

export default connect(stateToProps, dispatchToProps)(EditorEndurancePane);

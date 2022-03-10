import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/native';
import StartButton from '../../editor/components/Common/StartButton';
import * as editorActions from '../../editor/redux/editorActions';
import { EditorActionsTypes, ImmutableJSEditorSetType, ImmutableJSEditorType } from '../../editor/redux/editorTypes';
import { StoreState } from '../../redux/types';
import EnduranceForm from './EnduranceForm';

// STYLES
export const Wrapper = styled.View`
  flex: 1;
  padding: 10px;
`;
interface EditorEnudrancePaneProps {
  editor: ImmutableJSEditorType;
  actions: EditorActionsTypes;
}

const EditorEndurancePane: FC<EditorEnudrancePaneProps> = (props: EditorEnudrancePaneProps) => {
  const { editor, actions } = props;
  const { createEnduranceTable } = actions;

  useEffect(() => {
    if (editor === null) {
      createEnduranceTable(35, 35, 8);
    }
  }, [editor, createEnduranceTable]);

  if (editor === null) {
    return null;
  }

  const crono = editor.update('sets', (sets: ImmutableJSEditorSetType[]) => sets.filter(s => !s.get('zombie')));

  return (
    <Wrapper>
      <EnduranceForm editor={editor} actions={actions} />
      <StartButton data={crono} />
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

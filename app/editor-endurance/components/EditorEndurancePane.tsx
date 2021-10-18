import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/native';
import StartButton from '../../editor/components/Common/StartButton';
import * as editorActions from '../../editor/redux/editorActions';
import { EditorActionsTypes, ImmutableJSEditorSetType, ImmutableJSEditorType } from '../../editor/redux/editorTypes';
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

function EditorEndurancePane(props: EditorEnudrancePaneProps): JSX.Element {
  const { editor, actions } = props;

  useEffect(() => {
    if (editor === null) {
      actions.createEnduranceTable(35, 35, 8);
    }
  }, [editor, actions]);

  if (editor === null) {
    return null;
  }

  const crono = editor.update('sets', (sets: ImmutableJSEditorSetType[]) => sets.filter(s => !s.get('zombie')));

  return (
    <Wrapper>
      <EnduranceForm editor={editor} actions={undefined} />
      <StartButton data={crono} />
    </Wrapper>
  );
}

// REDUX

const stateToProps = state => {
  return {
    editor: state.editor,
  };
};

const dispatchToProps = dispatch => {
  return { actions: bindActionCreators(editorActions, dispatch) };
};

export default connect(stateToProps, dispatchToProps)(EditorEndurancePane);

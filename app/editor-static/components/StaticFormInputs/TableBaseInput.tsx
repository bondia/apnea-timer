import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/native';
import LongTouchButton from '../../../components/LongTouchButton';
import * as editorActions from '../../../editor/redux/editorActions';

export const ButtonsSet = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
`;
type TableBaseInputProps = {
  editor: ImmutableJSEditor;
  actions: EditorActions;
};

const TableBaseInput: FC<TableBaseInputProps> = (props: TableBaseInputProps) => {
  const { editor, actions } = props;

  const base = editor.getIn(['trainingTable', 'base']);
  const { changeTableBase } = actions;

  return (
    <ButtonsSet>
      <LongTouchButton
        title="-"
        onPressStart={() => changeTableBase(base - 5)}
        onPressInterval={() => changeTableBase(base - 5)}
      />
      <LongTouchButton
        title="+"
        onPressStart={() => changeTableBase(base + 5)}
        onPressInterval={() => changeTableBase(base + 5)}
      />
    </ButtonsSet>
  );
};

/**
 * TODO: Remove immutable js
 */
type ImmutableJSEditor = {
  getIn: (stack: string[]) => any;
};

type changeTableBase = (amount: number) => void;
type EditorActions = {
  changeTableBase: changeTableBase;
};

const stateToProps = state => {
  return { editor: state.editor };
};

const dispatchToProps = dispatch => {
  return { actions: bindActionCreators(editorActions, dispatch) };
};

export default connect(stateToProps, dispatchToProps)(TableBaseInput);

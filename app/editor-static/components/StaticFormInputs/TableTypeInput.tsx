import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/native';
import LongTouchButton from '../../../components/LongTouchButton';
import { TableType } from '../../../editor/enums';
import * as editorActions from '../../../editor/redux/editorActions';

/**
 * STYLES
 */

export const ButtonsSetWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
interface TableBaseInputProps {
  editor: ImmutableJSEditor;
  actions: EditorActions;
}

const TableTypeInput: FC<TableBaseInputProps> = props => {
  const { editor, actions } = props;

  const { changeTableType } = actions;
  const type = editor.getIn(['trainingTable', 'type']);
  const base = editor.getIn(['trainingTable', 'base']);

  const changeType = (newType: string) => {
    if (type !== newType) {
      changeTableType(base, newType);
    }
  };

  return (
    <ButtonsSetWrapper>
      <LongTouchButton
        title="CO2"
        onPressStart={() => changeType(TableType.TABLE_TYPE_CO2)}
        active={TableType.TABLE_TYPE_CO2 === type}
      />

      <LongTouchButton
        title="O2"
        onPressStart={() => changeType(TableType.TABLE_TYPE_O2)}
        active={TableType.TABLE_TYPE_O2 === type}
      />

      <LongTouchButton
        title="Free"
        onPressStart={() => changeType(TableType.TABLE_TYPE_FREE)}
        active={TableType.TABLE_TYPE_FREE === type}
      />
    </ButtonsSetWrapper>
  );
};

/**
 * TYPES
 * TODO: Remove immutable js
 */

interface ImmutableJSEditor {
  getIn: (stack: string[]) => any;
}

type ChangeTableType = (base: number, type: string) => void;
interface EditorActions {
  changeTableType: ChangeTableType;
}

/**
 * REDUX
 */

const stateToProps = state => {
  return { editor: state.editor };
};

const dispatchToProps = dispatch => {
  return { actions: bindActionCreators(editorActions, dispatch) };
};

export default connect(stateToProps, dispatchToProps)(TableTypeInput);

import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextComponent from '../../../../common/components/TextComponent';
import StaticSetsList from '../../../../editor-static/components/StaticSetsList';
import StartButton from '../../../../editor/components/Common/StartButton';
import { SetType, TableType } from '../../../../editor/enums';
import * as editorActions from '../../../../editor/redux/editorActions';
import { EditorActionsTypes, ImmutableJSEditorStateType, ImmutableJSType } from '../../../../editor/redux/editorTypes';
import { StoreState } from '../../../../main/redux/types';
import * as SC from './StaticForm.styled';
import StaticMainForm from './StaticMainForm';

interface StaticFormProps {
  editor: ImmutableJSEditorStateType;
  actions: EditorActionsTypes;
}

const StaticForm: FC<StaticFormProps> = props => {
  const { editor, actions } = props;
  const { changeTableType } = actions;

  useEffect(() => {
    changeTableType(120, TableType.TABLE_TYPE_CO2);
  }, [changeTableType]);

  if (editor === null) {
    return null;
  }

  // filter sets by table type
  const tableType = editor.getIn(['trainingTable', 'type']);
  const sets = editor.getIn(['sets']).filter((set: ImmutableJSType) => {
    const setType = set.get('type');
    let isValid = false;
    isValid = (tableType === TableType.TABLE_TYPE_CO2 && setType === SetType.SET_TYPE_PREPARE) || isValid;
    isValid = (tableType === TableType.TABLE_TYPE_O2 && setType === SetType.SET_TYPE_HOLD) || isValid;
    isValid = tableType === TableType.TABLE_TYPE_FREE || isValid;
    return isValid;
  });

  const crono = editor.update('sets', items => items.filter(item => !item.get('zombie')));
  const showStartButton = crono.get('sets').size > 0;

  return (
    <SC.FormWrapper>
      <StaticMainForm editor={editor} />

      <SC.SetsListWrapper fullHeight={!showStartButton}>
        <TextComponent style={SC.baseStyles.label}>
          {TableType.TABLE_TYPE_CO2 === tableType ? 'Breath Up' : ''}
          {TableType.TABLE_TYPE_O2 === tableType ? 'Breath Hold' : ''}
          {TableType.TABLE_TYPE_FREE === tableType ? 'Sets' : ''}
        </TextComponent>

        <StaticSetsList sets={sets} />
      </SC.SetsListWrapper>

      {showStartButton && <StartButton data={crono} />}
    </SC.FormWrapper>
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

export default connect(stateToProps, dispatchToProps)(StaticForm);

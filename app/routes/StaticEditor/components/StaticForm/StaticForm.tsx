import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CronoStartButton from '../../../../components/CronoStartButton/CronoStartButton';
import TextComponent from '../../../../components/TextComponent/OldTextComponent';
import { TableType } from '../../../../editor/enums';
import * as editorActions from '../../../../editor/redux/editorActions';
import { EditorActionsTypes, ImmutableJSEditorStateType } from '../../../../editor/redux/editorTypes';
import { StoreState } from '../../../../redux/types';
import headlineByTableType from '../../utils/headlineByTableType';
import setsByTableType from '../../utils/setsByTableType';
import StaticSetsList from '../StaticSetsList/StaticSetsList';
import * as SC from './StaticForm.styled';
import StaticMainForm from './StaticMainForm';

type StaticFormProps = {
  editor: ImmutableJSEditorStateType;
  actions: EditorActionsTypes;
};

const StaticForm: FC<StaticFormProps> = props => {
  const { editor, actions } = props;
  const { changeTableType } = actions;

  useEffect(() => {
    changeTableType(120, TableType.TABLE_TYPE_CO2);
  }, [changeTableType]);

  if (editor === null) {
    return null;
  }

  const tableType = editor.getIn(['trainingTable', 'type']);
  const headline = headlineByTableType(tableType);
  const sets = setsByTableType(editor, tableType);
  const crono = editor.update('sets', items => items.filter(item => !item.get('zombie')));
  const showStartButton = crono.get('sets').size > 0;

  return (
    <SC.FormWrapper>
      <StaticMainForm editor={editor} />

      <SC.SetsListWrapper fullHeight={!showStartButton}>
        <TextComponent style={SC.baseStyles.label}>{headline}</TextComponent>
        <StaticSetsList sets={sets} />
      </SC.SetsListWrapper>

      {showStartButton && <CronoStartButton data={crono} />}
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

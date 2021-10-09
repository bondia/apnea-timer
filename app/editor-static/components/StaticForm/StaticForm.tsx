import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextComponent from '../../../common/components/TextComponent';
import StartButton from '../../../editor/components/Common/StartButton';
import { SetType, TableType } from '../../../editor/enums';
import * as editorActions from '../../../editor/redux/editorActions';
import {
  EditorActionsTypes,
  ImmutableJSEditorSetType,
  ImmutableJSEditorType
} from '../../../editor/redux/editorTypes';
import StaticSetsList from '../StaticSetsList';
import * as SC from './StaticForm.styled';
import StaticMainForm from './StaticMainForm';

interface StaticFormProps {
  editor: ImmutableJSEditorType;
  editorActions: EditorActionsTypes;
}
const StaticForm = (props: StaticFormProps): JSX.Element => {
  const { editor, editorActions } = props;
  const { changeTableType } = editorActions;

  useEffect(() => {
    changeTableType(120, TableType.TABLE_TYPE_O2);
  }, [changeTableType]);

  if (editor === null) {
    return null;
  }

  // filter sets by table type
  const tableType = editor.getIn(['trainingTable', 'type']);
  const sets = editor
    .getIn(['sets'])
    .filter((set: ImmutableJSEditorSetType) => {
      const setType = set.get('type');
      let isValid = false;
      isValid =
        (tableType === TableType.TABLE_TYPE_CO2 &&
          setType === SetType.SET_TYPE_PREPARE) ||
        isValid;
      isValid =
        (tableType === TableType.TABLE_TYPE_O2 &&
          setType === SetType.SET_TYPE_HOLD) ||
        isValid;
      isValid = tableType === TableType.TABLE_TYPE_FREE || isValid;
      return isValid;
    });

  const crono = editor.update('sets', (sets) =>
    sets.filter((s) => !s.get('zombie'))
  );
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

const stateToProps = (state) => {
  return {
    editor: state.editor
  };
};

const dispatchToProps = (dispatch) => {
  return { editorActions: bindActionCreators(editorActions, dispatch) };
};

export default connect(stateToProps, dispatchToProps)(StaticForm);

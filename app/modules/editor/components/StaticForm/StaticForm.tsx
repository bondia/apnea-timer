import React, { FC, useEffect } from 'react';
import Immutable from 'immutable';

import TextComponent from '../../../../components/TextComponent/OldTextComponent';
import headlineByTableType from './headlineByTableType';
import CronoStartButton from '../../../../components/CronoStartButton/CronoStartButton';
import { TableTypeEnum } from '../../enums';
import { EditorStateType } from '../../editorTypes';
import setsByTableType from '../../pure/sets/setsByTableType';
import StaticSetsList from '../../../../routes/EnduranceEditor/components/StaticSetsList/StaticSetsList';
import StaticMainForm from './StaticMainForm';
import { editorSelector } from '../../redux/editorSelectors';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { changeTableType } from '../../redux/actions/composed/changeTableType';

import * as SC from './StaticForm.styled';

const StaticForm: FC = () => {
  const dispatch = useAppDispatch();
  // TODO: Remove immutable js
  const immutableEditor = useAppSelector(editorSelector);

  useEffect(() => {
    dispatch(changeTableType(120, TableTypeEnum.TABLE_TYPE_CO2));
  }, [dispatch]);

  if (immutableEditor === null) {
    return null;
  }

  // TODO: Remove immutable js
  const editor = immutableEditor?.toJS() as EditorStateType;
  const {
    trainingTable: { type: tableType },
  } = editor;

  const headline = headlineByTableType(tableType);
  const sets = setsByTableType(editor, tableType);
  const crono = { ...editor, sets: sets.filter(item => !item.zombie) };
  const showStartButton = crono.sets.length > 0;

  return (
    <SC.FormWrapper>
      <StaticMainForm editor={editor} />

      <SC.SetsListWrapper fullHeight={!showStartButton}>
        <TextComponent style={SC.baseStyles.label}>{headline}</TextComponent>
        <StaticSetsList sets={sets} />
      </SC.SetsListWrapper>

      {/* TODO: remove immutable */}
      {showStartButton && <CronoStartButton data={Immutable.fromJS(crono)} />}
    </SC.FormWrapper>
  );
};

export default StaticForm;

import React, { FC, useEffect } from 'react';
import CronoStartButton from '../../../../components/CronoStartButton/CronoStartButton';
import TextComponent from '../../../../components/TextComponent/OldTextComponent';
import { TableType } from '../../../../editor/enums';
import headlineByTableType from '../../utils/headlineByTableType';
import setsByTableType from '../../utils/setsByTableType';
import StaticSetsList from '../StaticSetsList/StaticSetsList';
import StaticMainForm from './StaticMainForm';
import { changeTableType } from '../../../../editor/redux/editorActions';
import { editorSelector } from '../../../../editor/redux/editorSelectors';
import { useAppDispatch, useAppSelector } from '../../../../editor/redux/hooks';

import * as SC from './StaticForm.styled';

const StaticForm: FC = () => {
  const dispatch = useAppDispatch();
  const editor = useAppSelector(editorSelector);

  useEffect(() => {
    dispatch(changeTableType(120, TableType.TABLE_TYPE_CO2));
  }, [dispatch]);

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

export default StaticForm;

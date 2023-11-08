import React, { FC, useEffect } from 'react';
import CronoStartButton from '../../../../components/CronoStartButton/CronoStartButton';
import TextComponent from '../../../../components/TextComponent/OldTextComponent';
import { TableTypeEnum } from '../../../../modules/editor/enums';
import headlineByTableType from '../../utils/headlineByTableType';
import setsByTableType from '../../utils/setsByTableType';
import StaticSetsList from '../../../EnduranceEditor/components/StaticSetsList/StaticSetsList';
import StaticMainForm from './StaticMainForm';
import { editorSelector } from '../../../../modules/editor/redux/editorSelectors';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { changeTableType } from '../../../../modules/editor/redux/actions/composed/changeTableType';

import * as SC from './StaticForm.styled';
import { TableSetListType } from '../../../../modules/editor/editorTypes';

const StaticForm: FC = () => {
  const dispatch = useAppDispatch();
  const editor = useAppSelector(editorSelector);

  useEffect(() => {
    dispatch(changeTableType(120, TableTypeEnum.TABLE_TYPE_CO2));
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
        <StaticSetsList sets={sets.toJS() as TableSetListType} />
      </SC.SetsListWrapper>

      {showStartButton && <CronoStartButton data={crono} />}
    </SC.FormWrapper>
  );
};

export default StaticForm;

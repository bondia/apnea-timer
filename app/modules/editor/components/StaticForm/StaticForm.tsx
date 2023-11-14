import React, { FC, useEffect } from 'react';

import TextComponent from '../../../../components/TextComponent/OldTextComponent';
import headlineByTableType from './headlineByTableType';
import CronoStartButton from '../../../../components/CronoStartButton/CronoStartButton';
import { TableTypeEnum } from '../../enums';
import setsByTableType from '../../helpers/sets/setsByTableType';
import StaticSetsList from '../../../../routes/EnduranceEditor/components/StaticSetsList/StaticSetsList';
import StaticMainForm from './StaticMainForm';
import { editorSelector } from '../../redux/editorSelectors';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { changeTableType } from '../../redux/actions/composed/changeTableType';

import * as SC from './StaticForm.styled';

const StaticForm: FC = () => {
  const dispatch = useAppDispatch();
  const editor = useAppSelector(editorSelector);

  useEffect(() => {
    dispatch(changeTableType(120, TableTypeEnum.TABLE_TYPE_CO2));
  }, [dispatch]);

  if (!editor) {
    return null;
  }

  const {
    trainingTable: { type: tableType },
  } = editor;

  const headline = headlineByTableType(tableType);
  const setsList = setsByTableType(editor, tableType);
  const newSets = editor.sets.filter(s => !s.zombie);
  const crono = { ...editor, sets: [...newSets] };
  const showStartButton = crono.sets.length > 0;

  return (
    <SC.FormWrapper>
      <StaticMainForm editor={editor} />

      <SC.SetsListWrapper fullHeight={!showStartButton}>
        <TextComponent style={SC.baseStyles.label}>{headline}</TextComponent>
        <StaticSetsList sets={setsList} />
      </SC.SetsListWrapper>

      {/* TODO: remove immutable */}
      {showStartButton && <CronoStartButton data={crono} />}
    </SC.FormWrapper>
  );
};

export default StaticForm;

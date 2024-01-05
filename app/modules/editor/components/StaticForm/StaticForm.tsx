import React, { FC, useEffect } from 'react';
import { Stack } from '../../../../components/Flow';
import ActionsLayout from '../../../../components/Layouts/ActionsLayout';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { TableTypeEnum } from '../../enums';
import setsByTableType from '../../helpers/sets/setsByTableType';
import changeTableType from '../../redux/actions/composed/changeTableType';
import { editorSelector } from '../../redux/editorSelectors';
import CronoStartButton from '../CronoStartButton/CronoStartButton';
import StaticSetsList from '../StaticSetsList/StaticSetsList';
import StaticMainForm from './StaticMainForm';

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

  const setsList = setsByTableType(editor, tableType);
  const newSets = editor.sets.filter(s => !s.zombie);
  const crono = { ...editor, sets: [...newSets] };
  const showStartButton = crono.sets.length > 0;

  return (
    <ActionsLayout
      content={
        <Stack>
          <StaticMainForm editor={editor} />
          <StaticSetsList tableType={tableType} sets={setsList} />
        </Stack>
      }
      actions={showStartButton && <CronoStartButton data={crono} />}
    />
  );
};

export default StaticForm;

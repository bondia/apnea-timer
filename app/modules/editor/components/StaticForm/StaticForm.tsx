import React, { FC, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { FONT_COLOR_GREY } from '../../../../commonStyles';
import { Stack } from '../../../../components/Layout';
import Typography, { TypographyType } from '../../../../components/Typography/Typography';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { TableTypeEnum } from '../../enums';
import setsByTableType from '../../helpers/sets/setsByTableType';
import changeTableType from '../../redux/actions/composed/changeTableType';
import { editorSelector } from '../../redux/editorSelectors';
import CronoStartButton from '../CronoStartButton/CronoStartButton';
import StaticSetsList from '../StaticSetsList/StaticSetsList';
import StaticMainForm from './StaticMainForm';
import headlineByTableType from './headlineByTableType';

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
    <Stack>
      <StaticMainForm editor={editor} />

      <Stack>
        <Typography type={TypographyType.H6} color={FONT_COLOR_GREY} centered>
          {headline}
        </Typography>
        <ScrollView key={tableType}>
          <StaticSetsList sets={setsList} />
        </ScrollView>
      </Stack>

      {showStartButton && (
        <Stack grow="0" basis="auto" horizontal>
          <CronoStartButton data={crono} />
        </Stack>
      )}
    </Stack>
  );
};

export default StaticForm;

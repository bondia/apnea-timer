import React, { FC, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { FONT_COLOR_GREY } from '../../../../commonStyles';
import Typography, { TypographyType } from '../../../../components/Typography/Typography';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { TableTypeEnum } from '../../enums';
import setsByTableType from '../../helpers/sets/setsByTableType';
import { changeTableType } from '../../redux/actions/composed/changeTableType';
import { editorSelector } from '../../redux/editorSelectors';
import CronoStartButton from '../CronoStartButton/CronoStartButton';
import StaticSetsList from '../StaticSetsList/StaticSetsList';
import * as SC from './StaticForm.styled';
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
    <SC.FormWrapper>
      <StaticMainForm editor={editor} />

      <SC.SetsListWrapper fullHeight={!showStartButton}>
        <Typography type={TypographyType.H6} color={FONT_COLOR_GREY} centered>
          {headline}
        </Typography>
        <ScrollView key={tableType}>
          <StaticSetsList sets={setsList} />
        </ScrollView>
      </SC.SetsListWrapper>

      {showStartButton && (
        <SC.ButtonContainer>
          <CronoStartButton data={crono} />
        </SC.ButtonContainer>
      )}
    </SC.FormWrapper>
  );
};

export default StaticForm;

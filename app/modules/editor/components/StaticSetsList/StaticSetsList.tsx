import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { FONT_COLOR_GREY } from '../../../../commonStyles';
import { Spacer, Stack } from '../../../../components/Layout';
import Typography, { TypographyType } from '../../../../components/Typography/Typography';
import { TableSetListType } from '../../editorTypes';
import { TableTypeEnum } from '../../enums';
import headlineByTableType from '../StaticForm/headlineByTableType';
import EditorTimerInput from '../StaticFormInputs/EditorTimerInput';

type Props = {
  tableType: TableTypeEnum;
  sets: TableSetListType;
};

const StaticSetsList: FC<Props> = ({ tableType, sets }) => {
  const headline = headlineByTableType(tableType);
  return (
    <Stack>
      <Spacer top={4} />
      <Typography type={TypographyType.H5} color={FONT_COLOR_GREY} centered>
        {headline}
      </Typography>
      <Spacer top={1} />
      <ScrollView key={tableType}>
        <Spacer spacing={1}>
          {sets.map(({ pos, type, duration, zombie }) => (
            <EditorTimerInput key={pos} index={pos} type={type} duration={duration} zombie={zombie} setNumber={pos} />
          ))}
        </Spacer>
      </ScrollView>
    </Stack>
  );
};

export default StaticSetsList;

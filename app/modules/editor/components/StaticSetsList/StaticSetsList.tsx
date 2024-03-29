import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { Spacer, Stack } from '../../../../components/Flow';
import Typography, {
  TypographyType,
} from '../../../../components/Typography/Typography';
import useAppTheme from '../../../../hooks/useAppTheme';
import { TableSetListType } from '../../editorTypes';
import { TableTypeEnum } from '../../enums';
import headlineByTableType from '../StaticForm/headlineByTableType';
import EditorTimerInput from '../StaticFormInputs/EditorTimerInput';

type Props = {
  tableType: TableTypeEnum;
  sets: TableSetListType;
};

const StaticSetsList: FC<Props> = ({ tableType, sets }) => {
  const headline = headlineByTableType(TableTypeEnum.TABLE_TYPE_FREE);
  const { colors } = useAppTheme();
  return (
    <Stack>
      <Spacer top={4} bottom={2}>
        <Typography
          type={TypographyType.H5}
          color={colors.inverted900}
          centered
        >
          {headline}
        </Typography>
      </Spacer>
      <ScrollView key={tableType}>
        {sets.map(({ pos, type, duration, zombie }) => (
          <EditorTimerInput
            key={pos}
            index={pos}
            type={type}
            duration={duration}
            zombie={zombie}
            setNumber={pos}
          />
        ))}
      </ScrollView>
    </Stack>
  );
};

export default StaticSetsList;

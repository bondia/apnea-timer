import React, { FC } from 'react';
import { TableTypeEnum } from '../../enums';
import TableBaseInput from '../StaticFormInputs/TableBaseInput';
import TableTypeInput from '../StaticFormInputs/TableTypeInput';

import { Spacer, Stack } from '../../../../components/Flow';
import InfoBlock from '../../../../components/InfoBlock/InfoBlock';
import useAppTheme from '../../../../themes/useAppTheme';
import { EditorStateType } from '../../editorTypes';

type Props = {
  editor: EditorStateType;
};

const StaticMainForm: FC<Props> = ({
  editor: {
    trainingTable: { base, type, duration: totalTime },
  },
}) => {
  const { oldColors } = useAppTheme();

  const isFreeTable = TableTypeEnum.TABLE_TYPE_FREE === type;

  const titleByType = {
    [TableTypeEnum.TABLE_TYPE_CO2]: 'Breath Hold',
    [TableTypeEnum.TABLE_TYPE_O2]: 'Breath Up',
  };

  const colorByType = {
    [TableTypeEnum.TABLE_TYPE_CO2]: oldColors.COLOR_RED_NORMAL,
    [TableTypeEnum.TABLE_TYPE_O2]: oldColors.COLOR_GREEN_NORMAL,
  };

  return (
    <Stack shrink={0}>
      <Spacer yAxis={1}>
        <TableTypeInput />
      </Spacer>

      <Spacer yAxis={1}>
        <Stack horizontal spaceAround>
          {!isFreeTable && (
            <InfoBlock
              label={titleByType[type]}
              labelColor={colorByType[type]}
              content={base}
              contentColor={colorByType[type]}
              isTimestamp
            />
          )}

          <InfoBlock label="Total Time" content={totalTime} isTimestamp />
        </Stack>
      </Spacer>

      {!isFreeTable && (
        <Spacer yAxis={1}>
          <TableBaseInput />
        </Spacer>
      )}
    </Stack>
  );
};

export default StaticMainForm;

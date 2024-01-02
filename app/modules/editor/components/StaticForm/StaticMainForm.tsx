import React, { FC } from 'react';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL } from '../../../../commonStyles';
import { TableTypeEnum } from '../../enums';
import TableBaseInput from '../StaticFormInputs/TableBaseInput';
import TableTypeInput from '../StaticFormInputs/TableTypeInput';

import InfoBlock from '../../../../components/InfoBlock/InfoBlock';
import { Spacer, Stack } from '../../../../components/Layout';
import { EditorStateType } from '../../editorTypes';

const titleByType = {
  [TableTypeEnum.TABLE_TYPE_CO2]: 'Breath Hold',
  [TableTypeEnum.TABLE_TYPE_O2]: 'Breath Up',
};

const colorByType = {
  [TableTypeEnum.TABLE_TYPE_CO2]: COLOR_RED_NORMAL,
  [TableTypeEnum.TABLE_TYPE_O2]: COLOR_GREEN_NORMAL,
};

type Props = {
  editor: EditorStateType;
};

const StaticMainForm: FC<Props> = ({
  editor: {
    trainingTable: { base, type, duration: totalTime },
  },
}) => {
  const isFreeTable = TableTypeEnum.TABLE_TYPE_FREE === type;

  return (
    <Stack shrink={0} spaceX={2}>
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

import React, { FC } from 'react';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL } from '../../../../commonStyles';
import { TableTypeEnum } from '../../enums';
import TableBaseInput from '../StaticFormInputs/TableBaseInput';
import TableTypeInput from '../StaticFormInputs/TableTypeInput';

import InfoTimeBlock from '../../../../components/InfoTimeBlock/InfoTimeBlock';
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
    <Stack shrink={0}>
      <Spacer yAxis={1} xAxis={2}>
        <TableTypeInput />
      </Spacer>

      <Spacer yAxis={1} xAxis={2}>
        <Stack horizontal spaceAround>
          {!isFreeTable && (
            <Stack>
              <InfoTimeBlock
                label={titleByType[type]}
                labelColor={colorByType[type]}
                timestamp={base}
                contentColor={colorByType[type]}
              />
            </Stack>
          )}

          <Stack>
            <InfoTimeBlock label="Total Time" timestamp={totalTime} />
          </Stack>
        </Stack>
      </Spacer>

      {!isFreeTable && (
        <Spacer yAxis={1} xAxis={2}>
          <TableBaseInput />
        </Spacer>
      )}
    </Stack>
  );
};

export default StaticMainForm;

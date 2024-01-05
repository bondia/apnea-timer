import React, { FC } from 'react';
import { TableTypeEnum } from '../../enums';
import TableBaseInput from '../StaticFormInputs/TableBaseInput';
import TableTypeInput from '../StaticFormInputs/TableTypeInput';

import { Spacer, Stack } from '../../../../components/Flow';
import SpacedSurface from '../../../../components/Flow/SpacedSurface';
import InfoBlock from '../../../../components/InfoBlock/InfoBlock';
import useAppTheme from '../../../../providers/AppThemeProvider/useAppTheme';
import { EditorStateType } from '../../editorTypes';

type Props = {
  editor: EditorStateType;
};

const StaticMainForm: FC<Props> = ({
  editor: {
    trainingTable: { base, type, duration: totalTime },
  },
}) => {
  const { colors, elevations } = useAppTheme();

  const isFreeTable = TableTypeEnum.TABLE_TYPE_FREE === type;

  const titleByType = {
    [TableTypeEnum.TABLE_TYPE_CO2]: 'Breath Hold',
    [TableTypeEnum.TABLE_TYPE_O2]: 'Breath Up',
  };

  const colorByType = {
    [TableTypeEnum.TABLE_TYPE_CO2]: colors.error,
    [TableTypeEnum.TABLE_TYPE_O2]: colors.primary900,
  };

  return (
    <SpacedSurface
      elevation={elevations.ELEVATION_24}
      top={3}
      bottom={8}
      xAxis={4}
      radius="20px"
    >
      <Stack shrink={0}>
        <TableTypeInput />

        <Spacer top={2}>
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
          <Spacer top={2}>
            <TableBaseInput />
          </Spacer>
        )}
      </Stack>
    </SpacedSurface>
  );
};

export default StaticMainForm;

import React, { FC } from 'react';
import { TableTypeEnum } from '../../enums';
import TableBaseInput from '../StaticFormInputs/TableBaseInput';
import TableTypeInput from '../StaticFormInputs/TableTypeInput';

import { Spacer, Stack } from '../../../../components/Flow';
import SpacedSurface from '../../../../components/Flow/SpacedSurface';
import InfoBlock from '../../../../components/InfoBlock/InfoBlock';
import useAppTheme from '../../../../hooks/useAppTheme';
import { EditorStateType } from '../../editorTypes';
import headlineByTableType from './headlineByTableType';

type Props = {
  editor: EditorStateType;
};

const StaticMainForm: FC<Props> = ({
  editor: {
    trainingTable: { baseMilliseconds, type, duration: totalTime },
  },
}) => {
  const { colors, elevations } = useAppTheme();

  const isFreeTable = TableTypeEnum.TABLE_TYPE_FREE === type;

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
                label={headlineByTableType(type)}
                labelColor={colorByType[type]}
                miliseconds={baseMilliseconds}
                contentColor={colorByType[type]}
              />
            )}

            <InfoBlock label="Total Time" miliseconds={totalTime} />
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

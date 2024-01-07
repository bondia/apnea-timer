import React, { FC } from 'react';
import InfoBlock from '../../../../components/InfoBlock/InfoBlock';
import { TableTypeEnum } from '../../../editor/enums';
import { CronoSetType, CronoStateType } from '../../cronoTypes';

import { Stack, Surface } from '../../../../components/Flow';
import { TypographyType } from '../../../../components/Typography/Typography';
import useAppTheme from '../../../../providers/AppThemeProvider/useAppTheme';
import Countdown from './Countdown';
import Countup from './Countup';

type LiveCounterProps = {
  crono: CronoStateType;
  set?: CronoSetType;
};

const LiveCounter: FC<LiveCounterProps> = ({
  crono: {
    trainingTable: { type: tableTypeEnum },
    running: { clock: spentTime, countdown: totalTime = 0 },
  },
  set,
}) => {
  const { elevations, colors } = useAppTheme();

  // set data
  const pos = set ? set.pos : 0;
  const currentSet = pos <= 1 ? 1 : pos / 2 + 1;
  const targeting = spentTime > 0 ? spentTime + totalTime : totalTime;

  return (
    <Surface
      elevation={elevations.ELEVATION_16}
      radiusBR="40px"
      radiusBL="40px"
    >
      {/* STATIC */}
      {TableTypeEnum.TABLE_TYPE_ENDURANCE !== tableTypeEnum && (
        <>
          <Stack spaceAround horizontal spaceBottom={8}>
            <Stack basis="33%">
              <InfoBlock
                label="Set"
                content={currentSet}
                labelColor={colors.primary050}
                labelType={TypographyType.SUBTITLE_2}
                contentColor={colors.primary100}
                contentType={TypographyType.H6}
              />
            </Stack>

            <Stack basis="33%">
              <InfoBlock
                label="Time Left"
                content={totalTime}
                isTimestamp
                labelColor={colors.primary050}
                labelType={TypographyType.SUBTITLE_2}
                contentColor={colors.primary100}
                contentType={TypographyType.H6}
              />
            </Stack>

            <Stack basis="33%">{set ? <Countup set={set} /> : null}</Stack>
          </Stack>

          <Stack spaceAround horizontal spaceBottom={10}>
            {set ? <Countdown set={set} /> : null}
          </Stack>
        </>
      )}

      {/* ENDURANCE */}
      {/* TODO: CLEAN UP FOR ENDURANCE */}
      {TableTypeEnum.TABLE_TYPE_ENDURANCE === tableTypeEnum && (
        <Stack spaceAround horizontal spaceBottom={8}>
          <InfoBlock
            label="Current Dive"
            content={currentSet}
            labelColor={colors.primary050}
            labelType={TypographyType.SUBTITLE_1}
            contentColor={colors.primary500}
            contentType={TypographyType.H4}
          />

          <InfoBlock
            label="Targeting"
            content={targeting}
            isTimestamp
            labelColor={colors.primary050}
            labelType={TypographyType.SUBTITLE_1}
            contentColor={colors.primary500}
            contentType={TypographyType.H4}
          />

          <InfoBlock
            label="Spent Time"
            content={spentTime > 0 ? spentTime : 0}
            isTimestamp
            labelColor={colors.primary050}
            labelType={TypographyType.SUBTITLE_1}
            contentColor={colors.primary500}
            contentType={TypographyType.H4}
          />
        </Stack>
      )}
    </Surface>
  );
};

export default LiveCounter;

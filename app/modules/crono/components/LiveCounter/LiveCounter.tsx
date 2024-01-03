import React, { FC } from 'react';
import InfoBlock from '../../../../components/InfoBlock/InfoBlock';
import { TableTypeEnum } from '../../../editor/enums';
import { CronoSetType, CronoStateType } from '../../cronoTypes';

import useAppTheme from '../../../../components/AppThemeProvider/useAppTheme';
import { Spacer, Stack } from '../../../../components/Flow';
import Surface from '../../../../components/Flow/Surface.styled';
import { TypographyType } from '../../../../components/Typography/Typography';

type LiveCounterProps = {
  crono: CronoStateType;
  set?: CronoSetType;
};

const LiveCounter: FC<LiveCounterProps> = ({
  crono: {
    trainingTable: { type: tableTypeEnum },
    running: { clock: spentTime, countdown: totalTime = 0 },
    // sets,
  },
  set,
}) => {
  const { elevations, colors, oldColors } = useAppTheme();

  // const {
  //   spent,
  //   status: { isDiving },
  // } = useSetCalculations(set || sets[0]);

  // set data
  const pos = set ? set.pos : 0;
  const currentSet = pos <= 1 ? 1 : pos / 2 + 1;
  const targeting = spentTime > 0 ? spentTime + totalTime : totalTime;

  return (
    <Spacer top={2} bottom={3}>
      <Surface elevation={elevations.ELEVATION_03} radius>
        <Stack spaceAround horizontal spaceY={2}>
          {/* STATIC */}
          {TableTypeEnum.TABLE_TYPE_ENDURANCE !== tableTypeEnum && (
            <>
              <InfoBlock
                label="Time Left"
                labelColor={colors.inverted050}
                labelType={TypographyType.SUBTITLE_2}
                content={totalTime}
                contentColor={colors.inverted050}
                contentType={TypographyType.H4}
                isTimestamp
              />

              {/* {set ? (
                <InfoBlock
                  label={isDiving ? 'Hold' : 'Recovery'}
                  labelColor={FONT_COLOR_GREY}
                  labelType={TypographyType.SUBTITLE_1}
                  content={spent}
                  contentColor={FONT_COLOR_LIGHT}
                  contentType={TypographyType.H3}
                  isTimestamp
                />
              ) : undefined} */}

              {/*
                <InfoBlock
                label="Contractions"
                labelColor={FONT_COLOR_GREY}
                labelType={TypographyType.SUBTITLE_1}
                content={contractions}
                contentColor={FONT_COLOR_LIGHT}
                contentType={TypographyType.H6}
                isTimestamp
                />
              */}
            </>
          )}

          {/* ENDURANCE */}
          {/* TODO: CLEAN UP FOR ENDURANCE */}
          {TableTypeEnum.TABLE_TYPE_ENDURANCE === tableTypeEnum && (
            <>
              <InfoBlock
                label="Current Dive"
                labelColor={oldColors.FONT_COLOR_GREY}
                content={currentSet}
                contentColor={colors.primary900}
              />

              <InfoBlock
                label="Targeting"
                labelColor={oldColors.FONT_COLOR_GREY}
                content={targeting}
                contentColor={colors.primary900}
                isTimestamp
              />

              <InfoBlock
                label="Spent Time"
                labelColor={oldColors.FONT_COLOR_GREY}
                content={spentTime > 0 ? spentTime : 0}
                contentColor={colors.primary900}
                isTimestamp
              />
            </>
          )}
        </Stack>
      </Surface>
    </Spacer>
  );
};

export default LiveCounter;

import React, { FC } from 'react';
import { FONT_COLOR_GREY, FONT_COLOR_LIGHT } from '../../../../commonStyles';
import InfoBlock from '../../../../components/InfoBlock/InfoBlock';
import { TableTypeEnum } from '../../../editor/enums';
import { CronoSetType, CronoStateType } from '../../cronoTypes';

import { Spacer, Stack } from '../../../../components/Layout';
import Surface from '../../../../components/Layout/Surface.styled';
import { TypographyType } from '../../../../components/Typography/Typography';
import { SurfaceColorsEnum } from '../../../../darkTheme';
import useSetCalculations from '../../hooks/useSetCalculations';

type LiveCounterProps = {
  crono: CronoStateType;
  set?: CronoSetType;
};

const LiveCounter: FC<LiveCounterProps> = ({
  crono: {
    trainingTable: { type: tableTypeEnum },
    running: { clock: spentTime, countdown: totalTime = 0 },
    sets,
  },
  set,
}) => {
  const {
    setNumber,
    spent,
    status: { isDiving },
  } = useSetCalculations(set || sets[0]);

  // set data
  const pos = set ? set.pos : 0;
  const currentSet = pos <= 1 ? 1 : pos / 2 + 1;
  const targeting = spentTime > 0 ? spentTime + totalTime : totalTime;

  return (
    <Spacer xAxis={2} top={1} bottom={3}>
      <Surface elevation={SurfaceColorsEnum.ELEVATION_03} radius>
        <Spacer yAxis={3}>
          {/* STATIC */}
          {TableTypeEnum.TABLE_TYPE_ENDURANCE !== tableTypeEnum && (
            <Stack spaceAround horizontal>
              <InfoBlock
                label="Table duration"
                labelColor={FONT_COLOR_GREY}
                labelType={TypographyType.SUBTITLE_2}
                content={totalTime}
                contentColor={FONT_COLOR_LIGHT}
                contentType={TypographyType.H5}
                isTimestamp
              />

              {set ? (
                <InfoBlock
                  label={isDiving ? `Hold (${setNumber})` : `Recovery (${setNumber})`}
                  labelColor={FONT_COLOR_GREY}
                  labelType={TypographyType.SUBTITLE_2}
                  content={spent}
                  contentColor={FONT_COLOR_LIGHT}
                  contentType={TypographyType.H5}
                  isTimestamp
                />
              ) : undefined}

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
            </Stack>
          )}

          {/* ENDURANCE */}
          {/* TODO: CLEAN UP FOR ENDURANCE */}
          {TableTypeEnum.TABLE_TYPE_ENDURANCE === tableTypeEnum && (
            <Stack spaceAround horizontal>
              <InfoBlock
                label="Current Dive"
                labelColor={FONT_COLOR_GREY}
                content={currentSet}
                contentColor={FONT_COLOR_LIGHT}
              />

              <InfoBlock
                label="Targeting"
                labelColor={FONT_COLOR_GREY}
                content={targeting}
                contentColor={FONT_COLOR_LIGHT}
                isTimestamp
              />

              <InfoBlock
                label="Spent Time"
                labelColor={FONT_COLOR_GREY}
                content={spentTime > 0 ? spentTime : 0}
                contentColor={FONT_COLOR_LIGHT}
                isTimestamp
              />
            </Stack>
          )}
        </Spacer>
      </Surface>
    </Spacer>
  );
};

export default LiveCounter;

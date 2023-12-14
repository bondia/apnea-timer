import React, { FC, useMemo } from 'react';
import styled from 'styled-components/native';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL, FONT_COLOR_GREY, FONT_SIZE } from '../../../../commonStyles';
import InfoBlock from '../../../../components/InfoBlock';
import { CronoSetType, CronoStateType } from '../../cronoTypes';
import { SetModeEnum, SetTypeEnum, TableTypeEnum } from '../../../editor/enums';
import generateTimestamp from '../../../../utils/time/generateTimestamp';

const LiveCounterWrapper = styled.View`
  flex: 1.25;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

type LiveCounterProps = {
  crono: CronoStateType;
  set: CronoSetType;
};

const LiveCounter: FC<LiveCounterProps> = props => {
  const {
    crono: {
      trainingTable: { type: tableTypeEnum },
      running: { clock: spentTime, countdown: totalTime, contractions },
    },
    set,
  } = props;

  // set data
  const setType = set ? set.type : null;
  const mode = set ? set.running.mode : null;
  const startTimestamp = set ? set.running.startTimestamp : null;

  const currentTimestamp = generateTimestamp();
  const endTimestamp = set ? set.running.endTimestamp || currentTimestamp : currentTimestamp;
  const spent = useMemo(
    () => (startTimestamp > 0 && endTimestamp > 0 ? Math.round((endTimestamp - startTimestamp) / 1000) : 0),
    [startTimestamp, endTimestamp],
  );

  const countdown = set ? set.running.countdown : null;
  const pos = set ? set.pos : 0;
  const currentSet = pos <= 1 ? 1 : Math.floor(pos / 2) + 1;
  const targeting = spentTime > 0 ? spentTime + totalTime : totalTime;
  const currentSetHeader = SetTypeEnum.SET_TYPE_HOLD === setType ? 'Breath Hold' : 'Breath Up';
  const currentSetColor = SetTypeEnum.SET_TYPE_HOLD === setType ? COLOR_RED_NORMAL : COLOR_GREEN_NORMAL;

  return (
    <LiveCounterWrapper>
      {set && mode !== SetModeEnum.SET_MODE_FINISHED && (
        <>
          <InfoBlock
            title={currentSetHeader}
            timeContent={spent}
            textColor={currentSetColor}
            textSize={FONT_SIZE.FONT_SIZE_XL}
          />
          <InfoBlock title="Countdown" timeContent={countdown} textSize={FONT_SIZE.FONT_SIZE_XL} />
        </>
      )}

      {TableTypeEnum.TABLE_TYPE_ENDURANCE === tableTypeEnum && (
        <>
          <InfoBlock title="Targeting" timeContent={targeting} />
          <InfoBlock title="Spent Time" timeContent={spentTime > 0 ? spentTime : 0} />
          <InfoBlock title="Current Dive" rawContent={currentSet} />
        </>
      )}

      {TableTypeEnum.TABLE_TYPE_ENDURANCE !== tableTypeEnum && (
        <>
          <InfoBlock
            title="Remaining Time"
            timeContent={totalTime}
            textColor={FONT_COLOR_GREY}
            textSize={FONT_SIZE.FONT_SIZE_XL}
          />
          <InfoBlock
            title="Contractions"
            timeContent={contractions}
            textColor={FONT_COLOR_GREY}
            textSize={FONT_SIZE.FONT_SIZE_XL}
          />
        </>
      )}
    </LiveCounterWrapper>
  );
};

export default LiveCounter;

import React, { FC } from 'react';
import { FONT_COLOR_LIGHT, FONT_SIZE } from '../../../../commonStyles';
import InfoBlock from '../../../../components/InfoBlock';
import { CronoSetType, CronoStateType } from '../../cronoTypes';
import { TableTypeEnum } from '../../../editor/enums';

import * as SC from './LiveCounter.styled';

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
  const pos = set ? set.pos : 0;
  const currentSet = pos <= 1 ? 1 : pos / 2 + 1;
  const targeting = spentTime > 0 ? spentTime + totalTime : totalTime;

  return (
    <SC.LiveCounterWrapper>
      {TableTypeEnum.TABLE_TYPE_ENDURANCE !== tableTypeEnum && (
        <InfoBlock
          title="Time Left"
          timeContent={totalTime}
          textColor={FONT_COLOR_LIGHT}
          labelTextSize={FONT_SIZE.FONT_SIZE_S}
          textSize={FONT_SIZE.FONT_SIZE_L}
        />
      )}

      {TableTypeEnum.TABLE_TYPE_ENDURANCE !== tableTypeEnum && (
        <InfoBlock
          title="Contractions"
          timeContent={contractions}
          textColor={FONT_COLOR_LIGHT}
          labelTextSize={FONT_SIZE.FONT_SIZE_S}
          textSize={FONT_SIZE.FONT_SIZE_L}
        />
      )}

      {TableTypeEnum.TABLE_TYPE_ENDURANCE === tableTypeEnum && (
        <>
          <InfoBlock title="Targeting" timeContent={targeting} width="33%" />
          <InfoBlock title="Spent Time" timeContent={spentTime > 0 ? spentTime : 0} width="33%" />
          <InfoBlock title="Current Dive" rawContent={currentSet} width="33%" />
        </>
      )}
    </SC.LiveCounterWrapper>
  );
};

export default LiveCounter;

import React, { FC, useMemo } from 'react';
import styled from 'styled-components/native';
import InfoBlock from '../../../common/components/InfoBlock';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL, FONT_COLOR_GREY, FONT_SIZE } from '../../../common/styles/commonStyles';
import generateTimestamp from '../../../common/utils/time/generateTimestamp';
import { SetMode, SetType, TableType } from '../../../editor/enums';
import { ImmutableJSCronoType, ImmutableJSSetType } from '../../redux/CronoTypes';

const LiveCounterWrapper = styled.View`
  flex: 1.25;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

interface LiveCounterProps {
  crono: ImmutableJSCronoType;
  set: ImmutableJSSetType;
}

const LiveCounter: FC<LiveCounterProps> = props => {
  const { crono, set } = props;
  const tableType = crono.getIn(['trainingTable', 'type']);
  const spentTime = crono.getIn(['running', 'clock']);
  const totalTime = crono.getIn(['running', 'countdown']);
  const contractions = crono.getIn(['running', 'contractions']);

  // set data
  const setType = set ? set.get('type') : null;
  const mode = set ? set.getIn(['running', 'mode']) : null;
  const startTimestamp = set.getIn(['running', 'startTimestamp']);
  const currentTimestamp = generateTimestamp();
  const endTimestamp = set.getIn(['running', 'endTimestamp']) || currentTimestamp;
  const spent = useMemo(
    () => (startTimestamp > 0 && endTimestamp > 0 ? Math.round((endTimestamp - startTimestamp) / 1000) : 0),
    [startTimestamp, endTimestamp],
  );

  const countdown = set ? set.getIn(['running', 'countdown']) : null;
  const pos = set ? set.get('pos') : 0;
  const currentSet = pos <= 1 ? 1 : Math.floor(pos / 2) + 1;
  const targeting = spentTime > 0 ? spentTime + totalTime : totalTime;
  const currentSetHeader = SetType.SET_TYPE_HOLD === setType ? 'Breath Hold' : 'Breath Up';
  const currentSetColor = SetType.SET_TYPE_HOLD === setType ? COLOR_RED_NORMAL : COLOR_GREEN_NORMAL;

  return (
    <LiveCounterWrapper>
      {set && mode !== SetMode.SET_MODE_FINISHED && (
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
      {TableType.TABLE_TYPE_ENDURANCE === tableType && (
        <>
          <InfoBlock title="Targeting" timeContent={targeting} />
          <InfoBlock title="Spent Time" timeContent={spentTime > 0 ? spentTime : 0} />
          <InfoBlock title="Current Dive" rawContent={currentSet} />
        </>
      )}

      {TableType.TABLE_TYPE_ENDURANCE !== tableType && (
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

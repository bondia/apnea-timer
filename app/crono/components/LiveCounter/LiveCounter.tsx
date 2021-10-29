import React, { FC } from 'react';
import styled from 'styled-components/native';
import InfoBlock from '../../../common/components/InfoBlock';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL } from '../../../common/styles/commonStyles';
import { SetMode, SetType, TableType } from '../../../editor/enums';
import { ImmutableJSCronoType, ImmutableJSSetType } from '../../redux/CronoTypes';

const LiveCounterWrapper = styled.View`
  flex: 1;
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
  const countdown = set ? set.getIn(['running', 'countdown']) : null;
  const pos = set ? set.get('pos') : 0;
  const currentSet = pos <= 1 ? 1 : Math.floor(pos / 2) + 1;
  const targeting = spentTime > 0 ? spentTime + totalTime : totalTime;
  const currentSetHeader = SetType.SET_TYPE_HOLD === setType ? 'Breath Hold' : 'Breath Up';
  const currentSetColor = SetType.SET_TYPE_HOLD === setType ? COLOR_RED_NORMAL : COLOR_GREEN_NORMAL;

  return (
    <LiveCounterWrapper>
      {TableType.TABLE_TYPE_ENDURANCE === tableType && (
        <>
          <InfoBlock title="Targeting" timeContent={targeting} />
          <InfoBlock title="Spent Time" timeContent={spentTime > 0 ? spentTime : 0} />
          <InfoBlock title="Current Dive" rawContent={currentSet} />
        </>
      )}

      {TableType.TABLE_TYPE_ENDURANCE !== tableType && (
        <>
          <InfoBlock title="Remaining Time" timeContent={totalTime} />
          <InfoBlock title="Contractions" timeContent={contractions} />
        </>
      )}

      {set && mode !== SetMode.SET_MODE_FINISHED && (
        <InfoBlock title={currentSetHeader} timeContent={countdown} textColor={currentSetColor} />
      )}
    </LiveCounterWrapper>
  );
};

export default LiveCounter;

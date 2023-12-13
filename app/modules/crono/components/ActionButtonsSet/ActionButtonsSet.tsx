import React, { FC } from 'react';
import { CronoSetType, CronoStateType } from '../../redux/CronoTypes';
import { CronoModeEnum, SetTypeEnum, TableTypeEnum } from '../../../editor/enums';

import ActionButton from './Buttons/ActionButton';
import SkipButton from './Buttons/SkipButton';
import findRunningSet from '../../helpers/findRunningSet';
import ContractionButton from './Buttons/ContractionButon';

import * as SC from './ActionButtonsSet.styled';

const canTrackContractions = (crono: CronoStateType, current: CronoSetType): boolean => {
  // no contractions tracking for endurance tables
  const tableTypeEnum = crono?.trainingTable?.type;
  if (TableTypeEnum.TABLE_TYPE_ENDURANCE === tableTypeEnum) {
    return false;
  }
  // get current active set
  if (current == null) {
    return false;
  }
  // decide if can track
  return current && SetTypeEnum.SET_TYPE_HOLD === current.type;
};

type CronoButtonSetProps = {
  crono: CronoStateType;
  start: (mode: CronoModeEnum) => void;
  end: () => void;
};

const CronoButtonSet: FC<CronoButtonSetProps> = props => {
  const { crono, start, end } = props;
  const clock = crono?.running?.clock;
  const tableType = crono?.trainingTable?.type;
  const tableMode = crono?.running.mode;
  const current: CronoSetType = findRunningSet(crono.sets);
  const showContractionsButton = canTrackContractions(crono, current);
  return (
    <SC.ButtonSetWrapper>
      {clock < 0 && TableTypeEnum.TABLE_TYPE_ENDURANCE !== tableType && (
        <ActionButton title="Auto" action={() => start(CronoModeEnum.CRONO_MODE_AUTO)} />
      )}
      {clock < 0 && <ActionButton title="Coach" action={() => start(CronoModeEnum.CRONO_MODE_COACH)} />}
      {clock >= 0 && CronoModeEnum.CRONO_MODE_FINISHED !== tableMode && <SkipButton set={current} />}
      {clock >= 0 && showContractionsButton && <ContractionButton />}
      {CronoModeEnum.CRONO_MODE_FINISHED === tableMode && <ActionButton title="Finish" action={end} />}
    </SC.ButtonSetWrapper>
  );
};

export default CronoButtonSet;

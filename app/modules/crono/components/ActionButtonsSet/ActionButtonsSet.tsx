import React, { FC } from 'react';
import { useAppDispatch } from '../../../../redux/hooks';
import { CronoSetType, CronoStateType } from '../../redux/CronoTypes';
import { CronoModeEnum, SetTypeEnum, TableTypeEnum } from '../../../editor/enums';
import trackContractionAction from '../../redux/actions/composed/trackContractionAction';

import ActionButton from './Buttons/ActionButton';
import SkipButton from './Buttons/SkipButton';
import findRunningSet from '../../helpers/findRunningSet';

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
  const dispatch = useAppDispatch();
  const { crono, start, end } = props;
  const {
    running: { clock, mode },
    trainingTable: { type },
  } = crono;

  const current: CronoSetType = findRunningSet(crono.sets);
  const isEndurance = TableTypeEnum.TABLE_TYPE_ENDURANCE === type;
  const isFinished = CronoModeEnum.CRONO_MODE_FINISHED === mode;

  const startAuto = () => start(CronoModeEnum.CRONO_MODE_AUTO);
  const startCoach = () => start(CronoModeEnum.CRONO_MODE_COACH);

  const showContractionsButton = canTrackContractions(crono, current);
  const trackContraction = () => dispatch(trackContractionAction());

  return (
    <SC.ButtonSetWrapper>
      {clock < 0 && !isEndurance && <ActionButton title="Auto" action={startAuto} />}
      {clock < 0 && <ActionButton title="Coach" action={startCoach} />}
      {clock >= 0 && !isFinished && <SkipButton set={current} />}
      {clock >= 0 && showContractionsButton && <ActionButton title="1st Cont" action={trackContraction} />}
      {isFinished && <ActionButton title="Finish" action={end} />}
    </SC.ButtonSetWrapper>
  );
};

export default CronoButtonSet;

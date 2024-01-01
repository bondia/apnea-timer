import React, { FC } from 'react';
import { CronoModeEnum, SetTypeEnum, TableTypeEnum } from '../../../editor/enums';
import { CronoSetType, CronoStateType } from '../../cronoTypes';

import findRunningSet from '../../helpers/findRunningSet';
import SkipButton from './SkipButton';

import { Spacer, Stack } from '../../../../components/Layout';
import LongTouchButton from '../../../../components/LongTouchButton';
import { useAppDispatch } from '../../../../redux/hooks';
import trackContractionAction from '../../redux/actions/composed/trackContractionAction';

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

  const current = findRunningSet(crono.sets);
  const isEndurance = TableTypeEnum.TABLE_TYPE_ENDURANCE === type;
  const isFinished = CronoModeEnum.CRONO_MODE_FINISHED === mode;

  const startAuto = () => start(CronoModeEnum.CRONO_MODE_AUTO);
  const startCoach = () => start(CronoModeEnum.CRONO_MODE_COACH);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const showContractionsButton = current && canTrackContractions(crono, current);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const trackContraction = () => dispatch(trackContractionAction());

  return (
    <Spacer height="55px">
      <Stack horizontal>
        {clock < 0 && !isEndurance && <LongTouchButton title="Auto" onPressStart={startAuto} />}
        {clock < 0 && <LongTouchButton title="Coach" onPressStart={startCoach} />}
        {current && clock >= 0 && !isFinished && <SkipButton set={current} />}
        {/* {clock >= 0 && showContractionsButton && <LongTouchButton title="1st Cont" onPressStart={trackContraction} />} */}
        {isFinished && <LongTouchButton title="Finish" onPressStart={end} />}
      </Stack>
    </Spacer>
  );
};

export default CronoButtonSet;

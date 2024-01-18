import { now, round } from 'lodash';
import { useMemo } from 'react';
import { CronoSetType } from '../modules/crono/cronoTypes';
import { SetModeEnum, SetTypeEnum } from '../modules/editor/enums';
import calculateSetCountdown from '../utils/crono/calculateSetCountdown';
import isSetFinished from '../utils/crono/isSetFinished';
import milisecondsToTimeString from '../utils/time/milisecondsToTimeString';

const isActive = (mode: SetModeEnum) =>
  SetModeEnum.SET_MODE_RUNNING === mode ||
  mode === SetModeEnum.SET_MODE_INITIAL;

type SetCalculations = {
  setNumber: number;
  position: number;
  countdownText: string;
  countupText: string;
  status: {
    isDiving: boolean;
    isRunning: boolean;
    isFinished: boolean;
  };
};

const useCronoSetCalculations = (set: CronoSetType): SetCalculations => {
  const {
    pos,
    type,
    running: { mode, startTimestamp, endTimestamp },
  } = set;

  const start = startTimestamp;
  const end = isActive(mode) ? now() : endTimestamp;

  const countdown = calculateSetCountdown(set);
  const countdownText = useMemo(
    () => milisecondsToTimeString(countdown),
    [countdown],
  );

  const countup = start === -1 || end === -1 ? 0 : end - start;
  const countupText = useMemo(
    () => milisecondsToTimeString(countup),
    [countup],
  );

  const setNumber = pos >= 0 ? round((pos + 1) / 2) : -1;
  const position = pos >= 0 ? pos + 1 : -1;
  const isDiving = type === SetTypeEnum.SET_TYPE_HOLD;
  const isRunning = SetModeEnum.SET_MODE_RUNNING === mode;
  const isFinished = isSetFinished(set);

  return {
    setNumber,
    position,
    countdownText,
    countupText,
    status: {
      isDiving,
      isRunning,
      isFinished,
    },
  };
};

export default useCronoSetCalculations;

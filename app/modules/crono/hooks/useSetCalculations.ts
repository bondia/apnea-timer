import { now, round } from 'lodash';
import { useMemo } from 'react';
import milisecondsToTimeString from '../../../utils/time/milisecondsToTimeString';
import { SetModeEnum, SetTypeEnum } from '../../editor/enums';
import { CronoSetType } from '../cronoTypes';

const isActive = (mode: SetModeEnum) =>
  SetModeEnum.SET_MODE_RUNNING === mode ||
  mode === SetModeEnum.SET_MODE_INITIAL;

const calculateCountdown = (
  startTimestamp: number,
  endTimestamp: number,
  targetEndTimestamp: number,
  originalDurationMiliseconds: number,
): number => {
  if (startTimestamp > -1 && endTimestamp > -1) {
    return 0;
  }
  if (targetEndTimestamp > -1) {
    const currentTimestamp = now();
    return targetEndTimestamp - currentTimestamp;
  }
  return originalDurationMiliseconds || 0;
};

type SetCalculations = {
  setNumber: number;
  position: number;
  durationText: string;
  spentText: string;
  status: {
    isDiving: boolean;
    isRunning: boolean;
    isFinished: boolean;
  };
};

const useSetCalculations = (set: CronoSetType): SetCalculations => {
  const {
    pos,
    type,
    running: {
      mode,
      startTimestamp,
      endTimestamp,
      targetEndTimestamp,
      originalDurationMiliseconds,
    },
  } = set;

  const start = startTimestamp;
  const end = isActive(mode) ? now() : endTimestamp;

  const duration = calculateCountdown(
    startTimestamp,
    endTimestamp,
    targetEndTimestamp,
    originalDurationMiliseconds,
  );
  const durationText = useMemo(
    () => milisecondsToTimeString(duration),
    [duration],
  );

  const spent = start === -1 || end === -1 ? 0 : end - start;
  const spentText = useMemo(() => milisecondsToTimeString(spent), [spent]);

  const setNumber = pos >= 0 ? round((pos + 1) / 2) : -1;
  const position = pos >= 0 ? pos + 1 : -1;
  const isDiving = type === SetTypeEnum.SET_TYPE_HOLD;
  const isRunning = SetModeEnum.SET_MODE_RUNNING === mode;
  const isFinished =
    mode &&
    [SetModeEnum.SET_MODE_FINISHED, SetModeEnum.SET_MODE_SKIPED].indexOf(
      mode,
    ) !== -1;

  return {
    setNumber,
    position,
    durationText,
    spentText,
    status: {
      isDiving,
      isRunning,
      isFinished,
    },
  };
};

export default useSetCalculations;

import { round } from 'lodash';
import { useMemo } from 'react';
import generateTimestamp from '../../../utils/time/generateTimestamp';
import secondsToTimeString from '../../../utils/time/secondsToTimeString';
import { SetModeEnum, SetTypeEnum } from '../../editor/enums';
import { CronoSetType } from '../cronoTypes';

const useSetCalculations = (set?: CronoSetType) => {
  const pos = set?.pos;
  const type = set?.type;
  const mode = set?.running?.mode;
  const countdown = set?.running?.countdown || -1;
  const startTimestamp = set?.running?.startTimestamp || -1;
  const endTimestamp = set?.running?.endTimestamp || -1;

  const currentTimestamp = generateTimestamp();
  const active = SetModeEnum.SET_MODE_RUNNING === mode || mode === SetModeEnum.SET_MODE_INITIAL;
  const ended = active ? currentTimestamp : endTimestamp;
  const started = startTimestamp || 0;

  const duration = countdown;
  const durationText = useMemo(() => secondsToTimeString(duration), [duration]);

  const spent = useMemo(() => (started > 0 && ended > 0 ? round((ended - started) / 1000, 2) : 0), [ended, started]);
  const spentText = useMemo(() => secondsToTimeString(spent), [spent]);

  return {
    setNumber: pos ? round((pos + 1) / 2) : -1,
    position: pos ? pos + 1 : -1,
    duration,
    durationText,
    spent,
    spentText,
    status: {
      isDiving: type === SetTypeEnum.SET_TYPE_HOLD,
      isRunning: SetModeEnum.SET_MODE_RUNNING === mode,
      isFinished: mode && [SetModeEnum.SET_MODE_FINISHED, SetModeEnum.SET_MODE_SKIPED].indexOf(mode) !== -1,
    },
  };
};

export default useSetCalculations;

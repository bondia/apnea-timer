import { CronoModeEnum, SetModeEnum } from '../../editor/enums';
import playSound, { A2, C3, F2 } from '../../../utils/playSound';
import { CronoStateType } from '../redux/CronoTypes';

const skipSet = (state: CronoStateType, step: number, setMode: string, currentTimestamp: number) => {
  const newState = state;
  let newStep = step;
  // change set mode
  if (SetModeEnum.SET_MODE_SKIPED !== setMode) {
    newState.sets[newStep].running.endTimestamp = currentTimestamp;
    newState.sets[newStep].running.mode = SetModeEnum.SET_MODE_FINISHED;
  }

  // decide next step
  newStep = newStep >= newState.sets.length - 1 ? -1 : newStep + 1;
  newState.running.step = newStep;

  // update next set
  if (newStep >= 0) {
    newState.sets[newStep].running.startTimestamp = currentTimestamp;
    newState.sets[newStep].running.mode = SetModeEnum.SET_MODE_RUNNING;
  }

  return newState;
};

const playNotificationSound = (countdown: number): void => {
  switch (countdown) {
    case 30:
    case 20:
      playSound(F2);
      break;
    case 10:
    case 5:
      playSound(A2);
      break;
    case 0:
      playSound(C3);
      break;
    default:
      break;
  }
};

// TODO: Decouple state mutation
const decideCurrentSet = (state: CronoStateType, currentTimestamp: number) => {
  const {
    sets,
    running: { step, mode: cronoMode },
  } = state;

  const {
    running: { countdown, mode: setMode },
  } = sets[step];

  playNotificationSound(countdown);

  // handle explicit skiped sets
  if (SetModeEnum.SET_MODE_SKIPED === setMode) {
    return skipSet(state, step, setMode, currentTimestamp);
  }

  // do not change current set if not skiped and stil countdown available
  if (countdown <= 0 && CronoModeEnum.CRONO_MODE_AUTO === cronoMode) {
    return skipSet(state, step, setMode, currentTimestamp);
  }

  return state;
};

export default decideCurrentSet;

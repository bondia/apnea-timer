import { CronoMode, SetMode } from '../../editor/enums';
import playSound, { A2, C3, F2 } from '../../../utils/playSound';
import { CronoStateType } from '../redux/CronoTypes';

function skipSet(state: CronoStateType, step: number, setMode: string, currentTimestamp: number) {
  const newState = state;
  let newStep = step;
  // change set mode
  if (SetMode.SET_MODE_SKIPED !== setMode) {
    newState.sets[newStep].running.endTimestamp = currentTimestamp;
    newState.sets[newStep].running.mode = SetMode.SET_MODE_FINISHED;
  }

  // decide next step
  newStep = newStep >= newState.sets.length - 1 ? -1 : newStep + 1;
  newState.running.step = newStep;

  // update next set
  if (newStep >= 0) {
    newState.sets[newStep].running.startTimestamp = currentTimestamp;
    newState.sets[newStep].running.mode = SetMode.SET_MODE_RUNNING;
  }

  return newState;
}

function playNotificationSound(countdown: number): void {
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
}

// TODO: This is tight coupled with the newState.
export default function decideCurrentSet(state: CronoStateType, currentTimestamp: number) {
  const { step } = state.running;
  const { countdown } = state.sets[step].running;
  const setMode: string = state.sets[step].running.mode;

  playNotificationSound(countdown);

  // handle explicit skiped sets
  if (SetMode.SET_MODE_SKIPED === setMode) {
    return skipSet(state, step, setMode, currentTimestamp);
  }

  // do not change current set if not skiped and stil countdown available
  const cronoMode: string = state.running.mode;
  if (countdown <= 0 && CronoMode.CRONO_MODE_AUTO === cronoMode) {
    return skipSet(state, step, setMode, currentTimestamp);
  }

  return state;
}

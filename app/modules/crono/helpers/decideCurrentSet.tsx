import { CronoModeEnum, SetModeEnum } from '../../editor/enums';
import playSound, { A2, C3, F2 } from '../../../utils/playSound';
import { CronoSetListType, CronoSetType, CronoStateType } from '../redux/CronoTypes';

const mapSet = (
  set: CronoSetType,
  step: number,
  newStep: number,
  setMode: SetModeEnum,
  currentTimestamp: number,
): CronoSetType => {
  const { pos, running } = set;

  // skip current set if needed
  if (SetModeEnum.SET_MODE_SKIPED !== setMode && pos === step) {
    return {
      ...set,
      running: {
        ...running,
        endTimestamp: currentTimestamp,
        mode: SetModeEnum.SET_MODE_FINISHED,
      },
    };
  }

  // start new set
  if (newStep >= 0 && pos === newStep) {
    return {
      ...set,
      running: {
        ...running,
        startTimestamp: currentTimestamp,
        mode: SetModeEnum.SET_MODE_RUNNING,
      },
    };
  }

  return set;
};

const skipSet = (
  state: CronoStateType,
  step: number,
  setMode: SetModeEnum,
  currentTimestamp: number,
): CronoStateType => {
  const { sets } = state;
  const newStep = step >= sets.length - 1 ? -1 : step + 1;

  // update sets
  const newSets: CronoSetListType = sets.map(set => mapSet(set, step, newStep, setMode, currentTimestamp));

  return {
    ...state,
    running: {
      ...state.running,
      // update new step
      step: newStep,
    },
    sets: newSets,
  };
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

  if (step < 0) {
    return state;
  }

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

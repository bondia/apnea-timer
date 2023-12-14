import { CronoModeEnum, SetModeEnum } from '../../editor/enums';
import { CronoSetType, CronoStateType } from '../redux/CronoTypes';
import playNotificationSound from './playNotificationSound';

const mutateSet = (set: CronoSetType, mode: SetModeEnum, startTimestamp: number, endTimestamp: number) => ({
  ...set,
  running: {
    ...set.running,
    mode,
    startTimestamp,
    endTimestamp,
  },
});

const decideModeForSet = (
  set: CronoSetType,
  step: number,
  nextStep: number,
  setMode: SetModeEnum,
  currentTimestamp: number,
): CronoSetType => {
  const { pos, running } = set;

  // skip set logic
  if (SetModeEnum.SET_MODE_SKIPED === setMode && pos === step) {
    return mutateSet(set, SetModeEnum.SET_MODE_SKIPED, running.startTimestamp, currentTimestamp);
  }

  // finish set
  if (SetModeEnum.SET_MODE_SKIPED !== setMode && pos === step) {
    return mutateSet(set, SetModeEnum.SET_MODE_FINISHED, running.startTimestamp, currentTimestamp);
  }

  // start new set
  if (nextStep >= 0 && pos === nextStep) {
    return mutateSet(set, SetModeEnum.SET_MODE_RUNNING, currentTimestamp, running.endTimestamp);
  }

  return set;
};

const mutateSets = (
  state: CronoStateType,
  step: number,
  setMode: SetModeEnum,
  currentTimestamp: number,
): CronoStateType => {
  const { sets } = state;
  const newStep = step >= sets.length - 1 ? -1 : step + 1;
  return {
    ...state,
    running: {
      ...state.running,
      // update new step
      step: newStep,
    },
    sets: sets.map(set => decideModeForSet(set, step, newStep, setMode, currentTimestamp)),
  };
};

/**
 * TODO: Decouple state mutation
 *
 * Handles the decision about which sets should be skipped, finished or started.
 *
 * @param state: state to be mutatted
 * @param currentTimestamp
 * @param forceSkipStep: forces to skip a set at a specific `pos`
 * @returns CronoStateType
 */
const decideCurrentSet = (
  state: CronoStateType,
  currentTimestamp: number,
  forceSkipStep: number = -1,
): CronoStateType => {
  const {
    sets,
    running: { step, mode: cronoMode },
  } = state;

  if (forceSkipStep < 0 && step < 0) {
    return state;
  }

  // handle force skipping sets
  if (forceSkipStep >= 0) {
    return mutateSets(state, forceSkipStep, SetModeEnum.SET_MODE_SKIPED, currentTimestamp);
  }

  const {
    running: { countdown, mode: setMode },
  } = sets[step];

  playNotificationSound(countdown);

  // do not change current set if not skiped and stil countdown available
  if (countdown <= 0 && CronoModeEnum.CRONO_MODE_AUTO === cronoMode) {
    return mutateSets(state, step, setMode, currentTimestamp);
  }

  return state;
};

export default decideCurrentSet;

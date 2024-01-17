import { CronoSetType } from '../../modules/crono/cronoTypes';
import { SetModeEnum } from '../../modules/editor/enums';

const finishedModes = [
  SetModeEnum.SET_MODE_FINISHED,
  SetModeEnum.SET_MODE_SKIPED,
];

const isSetFinished = (set: CronoSetType): boolean => {
  const {
    running: { mode },
  } = set;
  return mode && finishedModes.indexOf(mode) !== -1;
};

export default isSetFinished;

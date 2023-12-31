import { SetModeEnum } from '../../editor/enums';
import { CronoSetType } from '../cronoTypes';

const findRunningSet = (sets: CronoSetType[]): CronoSetType | null => {
  const current = sets.find(e => e.running.mode === SetModeEnum.SET_MODE_RUNNING);
  return current || null;
};

export default findRunningSet;

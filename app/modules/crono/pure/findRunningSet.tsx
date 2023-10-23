import { SetModeEnum } from '../../editor/enums';
import { CronoSetType } from '../redux/CronoTypes';

export default function findRunningSet(sets: CronoSetType[]): CronoSetType {
  const current: CronoSetType = sets.find(e => e.running.mode === SetModeEnum.SET_MODE_RUNNING);
  return current || null;
}

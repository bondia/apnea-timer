import { SetMode } from '../../editor/enums';
import { CronoSetType } from '../redux/cronoTypes';

export default function findRunningSet(sets: CronoSetType[]): CronoSetType {
  const current: CronoSetType = sets.find(e => e.running.mode === SetMode.SET_MODE_RUNNING);
  return current || null;
}

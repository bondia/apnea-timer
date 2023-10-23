import { CronoSetType } from '../../../crono/redux/CronoTypes';
import { SetModeEnum } from '../../enums';

function getSingleSetDuration(set: CronoSetType) {
  // use running wrapper if exists
  // it means the table is running
  const running = set.get('running');
  if (running) {
    const countdown = running.get('countdown');
    return running.get('mode') !== SetModeEnum.SET_MODE_SKIPED && countdown > 0 ? countdown : 0;
  }

  // do not include zombie sets
  const zombie = set.get('zombie');
  return zombie === true ? 0 : set.get('duration');
}

const reducer = (prev: number, next: CronoSetType) => prev + getSingleSetDuration(next);

const calculateTableDuration = (sets: CronoSetType[] = null): number => {
  if (!sets) {
    return 0;
  }

  return sets.reduce(reducer, 0);
};

export default calculateTableDuration;

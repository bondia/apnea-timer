import { ImmutableJSType } from '../../../../redux/types';
import { CronoSetType } from '../../../crono/redux/CronoTypes';
import { SetModeEnum } from '../../enums';

const getSingleSetDuration = (set: CronoSetType) => {
  // use running wrapper if exists
  // it means the table is running
  const running = set.get<ImmutableJSType>('running');
  if (running) {
    const countdown = running.get<number>('countdown');
    return running.get<SetModeEnum>('mode') !== SetModeEnum.SET_MODE_SKIPED && countdown > 0 ? countdown : 0;
  }

  // do not include zombie sets
  const zombie = set.get<boolean>('zombie');
  return zombie === true ? 0 : set.get<number>('duration');
};

const reducer = (prev: number, next: CronoSetType) => prev + getSingleSetDuration(next);

const calculateTableDuration = (sets: CronoSetType[] = null): number => {
  if (!sets) {
    return 0;
  }
  return sets.reduce(reducer, 0);
};

export default calculateTableDuration;

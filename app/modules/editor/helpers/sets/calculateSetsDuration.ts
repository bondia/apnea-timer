import { CronoSetListType, CronoSetType } from '../../../crono/cronoTypes';
import { TableSetListType, TableSetType } from '../../editorTypes';
import { SetModeEnum } from '../../enums';

const getSingleSetDuration = (set: TableSetType | CronoSetType) => {
  // use running wrapper if exists
  // it means the table is running
  if ('running' in set) {
    const {
      running: { countdown, mode },
    } = set;
    return mode !== SetModeEnum.SET_MODE_SKIPED && countdown > 0
      ? countdown
      : 0;
  }
  // do not include zombie sets
  const { zombie, duration } = set;
  return zombie === true ? 0 : duration;
};

const calculateTableDuration = (
  sets?: TableSetListType | CronoSetListType,
): number => {
  if (!sets) {
    return 0;
  }
  return sets
    .map<number>((item: TableSetType | CronoSetType) =>
      getSingleSetDuration(item),
    )
    .reduce((prev, current) => prev + current, 0);
};

export default calculateTableDuration;

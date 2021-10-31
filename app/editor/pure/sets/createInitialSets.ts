import Immutable from 'immutable';
import { SetType, TableType } from '../../enums';

const getBHTimeForSet = (type: TableType, index: number, base: number): number => {
  if (TableType.TABLE_TYPE_O2 !== type) {
    return base;
  }
  return 60 + 10 * (index / 2);
};

const getBUTimeForSet = (type: TableType, index: number, base: number): number => {
  if (TableType.TABLE_TYPE_CO2 !== type) {
    return base;
  }
  return 120 - 10 * (index / 2);
};

export default function createInitialSets(base = 5, tableType = TableType.TABLE_TYPE_CO2) {
  let sets = Immutable.List();
  for (let i = 0; i < 16; i += 2) {
    sets = sets.push(
      Immutable.fromJS({
        duration: getBUTimeForSet(tableType, i, base),
        type: SetType.SET_TYPE_PREPARE,
        pos: i,
      }),
    );
    sets = sets.push(
      Immutable.fromJS({
        duration: getBHTimeForSet(tableType, i, base),
        type: SetType.SET_TYPE_HOLD,
        pos: i + 1,
      }),
    );
  }
  return sets;
}

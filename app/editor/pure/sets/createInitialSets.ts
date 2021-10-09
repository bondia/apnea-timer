import Immutable from 'immutable';
import { SetType, TableType } from '../../enums';

export default function createInitialSets(
  base = 5,
  tableType = TableType.TABLE_TYPE_CO2
) {
  let sets = Immutable.List();
  for (var i = 0; i < 16; i += 2) {
    const prepTime =
      tableType === TableType.TABLE_TYPE_CO2 ? 150 - 15 * (i / 2) : base;
    const holdTime =
      tableType === TableType.TABLE_TYPE_O2 ? 60 + 10 * (i / 2) : base;
    const prepSet = Immutable.fromJS({
      duration: prepTime,
      type: SetType.SET_TYPE_PREPARE,
      pos: i
    });
    const holdSet = Immutable.fromJS({
      duration: holdTime,
      type: SetType.SET_TYPE_HOLD,
      pos: i + 1
    });
    sets = sets.push(prepSet);
    sets = sets.push(holdSet);
  }
  return sets;
}

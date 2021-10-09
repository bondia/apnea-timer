import Immutable from 'immutable';
import { SetType } from '../../enums';

export default function createEnduranceSets(
  base = 5,
  baseBreaks = 5,
  laps = 16
) {
  let sets = Immutable.List();
  for (var i = 0; i < laps * 2; i += 2) {
    const holdSet = Immutable.fromJS({
      duration: base,
      type: SetType.SET_TYPE_HOLD,
      pos: i
    });
    sets = sets.push(holdSet);
    if (i < laps * 2 - 2) {
      const prepSet = Immutable.fromJS({
        duration: baseBreaks,
        type: SetType.SET_TYPE_PREPARE,
        pos: i + 1
      });
      sets = sets.push(prepSet);
    }
  }
  return sets;
}

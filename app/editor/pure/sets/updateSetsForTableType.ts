import { SetType, TableType } from '../../enums';
import createInitialSets from './createInitialSets';

export default function updateSetsForTableType(
  sets = null,
  base = 5,
  baseBreaks = null,
  tableType = TableType.TABLE_TYPE_CO2,
) {
  // no initial sets
  if (sets === null) {
    return createInitialSets(base, tableType);
  }
  // update sets for co2
  if (TableType.TABLE_TYPE_CO2 === tableType) {
    return sets.map(s => (s.get('type') === SetType.SET_TYPE_HOLD ? s.set('duration', base) : s));
  }
  // update sets for o2
  if (TableType.TABLE_TYPE_O2 === tableType) {
    return sets.map(s => (s.get('type') === SetType.SET_TYPE_PREPARE ? s.set('duration', base) : s));
  }
  // update sets for endurance
  if (TableType.TABLE_TYPE_ENDURANCE === tableType) {
    return sets.map(s =>
      s.get('type') === SetType.SET_TYPE_HOLD ? s.set('duration', base) : s.set('duration', baseBreaks),
    );
  }
  return sets;
}

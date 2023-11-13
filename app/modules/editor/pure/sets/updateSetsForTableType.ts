import { FixMe } from '../../../../types';
import { ImmutableJSTableSetType } from '../../editorTypes';
import { SetTypeEnum, TableTypeEnum } from '../../enums';
import createInitialSets from '../../helpers/sets/createInitialSets';

export default function updateSetsForTableType(
  sets: ImmutableJSTableSetType[] = null,
  base = 5,
  baseBreaks = null,
  tableType = TableTypeEnum.TABLE_TYPE_CO2,
) {
  // no initial sets
  if (sets === null) {
    return createInitialSets(base, tableType);
  }
  // update sets for co2
  if (TableTypeEnum.TABLE_TYPE_CO2 === tableType) {
    return sets.map(s => (s.get('type') === SetTypeEnum.SET_TYPE_HOLD ? s.set('duration', base) : s));
  }
  // update sets for o2
  if (TableTypeEnum.TABLE_TYPE_O2 === tableType) {
    return sets.map((s: FixMe) => (s.get('type') === SetTypeEnum.SET_TYPE_PREPARE ? s.set('duration', base) : s));
  }
  // update sets for endurance
  if (TableTypeEnum.TABLE_TYPE_ENDURANCE === tableType) {
    return sets.map((s: FixMe) =>
      s.get('type') === SetTypeEnum.SET_TYPE_HOLD ? s.set('duration', base) : s.set('duration', baseBreaks),
    );
  }
  return sets;
}

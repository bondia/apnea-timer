import { TableSetListType } from '../../editorTypes';
import { SetTypeEnum, TableTypeEnum } from '../../enums';
import createInitialSets from './createInitialSets';

const updateSetsForTableType = (
  sets: TableSetListType,
  base: number = 5,
  baseBreaks: number = 5,
  tableType: TableTypeEnum = TableTypeEnum.TABLE_TYPE_CO2,
): TableSetListType => {
  // no initial sets
  if (sets === null) {
    return createInitialSets(base, tableType);
  }
  // update sets for co2
  if (TableTypeEnum.TABLE_TYPE_CO2 === tableType) {
    return sets.map(s => (s.type === SetTypeEnum.SET_TYPE_HOLD ? { ...s, duration: base } : s));
  }
  // update sets for o2
  if (TableTypeEnum.TABLE_TYPE_O2 === tableType) {
    return sets.map(s => (s.type === SetTypeEnum.SET_TYPE_PREPARE ? { ...s, duration: base } : s));
  }
  // update sets for endurance
  if (TableTypeEnum.TABLE_TYPE_ENDURANCE === tableType) {
    return sets.map(s =>
      s.type === SetTypeEnum.SET_TYPE_HOLD ? { ...s, duration: base } : { ...s, duration: baseBreaks },
    );
  }
  return sets;
};

export default updateSetsForTableType;

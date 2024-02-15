import { MillisecondsType } from '../../../../types';
import { TableSetListType } from '../../editorTypes';
import { SetTypeEnum, TableTypeEnum } from '../../enums';
import createInitialSets from './createInitialSets';

const updateSetsForTableType = (
  sets: TableSetListType,
  base: MillisecondsType,
  baseBreaks: MillisecondsType,
  tableType: TableTypeEnum,
): TableSetListType => {
  // no initial sets
  if (sets === null) {
    return createInitialSets(base, tableType);
  }
  // update sets for co2
  if (TableTypeEnum.TABLE_TYPE_CO2 === tableType) {
    return sets.map(s =>
      s.type === SetTypeEnum.SET_TYPE_HOLD ? { ...s, duration: base } : s,
    );
  }
  // update sets for o2
  if (TableTypeEnum.TABLE_TYPE_O2 === tableType) {
    return sets.map(s =>
      s.type === SetTypeEnum.SET_TYPE_PREPARE ? { ...s, duration: base } : s,
    );
  }
  // update sets for endurance
  if (TableTypeEnum.TABLE_TYPE_ENDURANCE === tableType) {
    return sets.map(s =>
      s.type === SetTypeEnum.SET_TYPE_HOLD
        ? { ...s, duration: base }
        : { ...s, duration: baseBreaks },
    );
  }
  return sets;
};

export default updateSetsForTableType;

import { SetTypeEnum, TableTypeEnum } from '../../enums';
import { TableSetType } from '../../editorTypes';

const getBHTimeForSet = (type: TableTypeEnum, index: number, base: number): number => {
  return TableTypeEnum.TABLE_TYPE_O2 !== type ? base : 60 + 10 * (index / 2);
};

const getBUTimeForSet = (type: TableTypeEnum, index: number, base: number): number => {
  return TableTypeEnum.TABLE_TYPE_CO2 !== type ? base : 120 - 10 * (index / 2);
};

const createInitialSets = (base = 5, tableType = TableTypeEnum.TABLE_TYPE_CO2): TableSetType[] => {
  const sets = [];

  for (let i = 0; i < 16; i += 2) {
    sets.push({
      duration: getBUTimeForSet(tableType, i, base),
      type: SetTypeEnum.SET_TYPE_PREPARE,
      pos: i,
    });

    sets.push({
      duration: getBHTimeForSet(tableType, i, base),
      type: SetTypeEnum.SET_TYPE_HOLD,
      pos: i + 1,
    });
  }

  return sets;
};

export default createInitialSets;

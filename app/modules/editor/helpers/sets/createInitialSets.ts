import { MillisecondsType } from '../../../../types';
import { TableSetListType } from '../../editorTypes';
import { SetTypeEnum, TableTypeEnum } from '../../enums';

const getBHTimeForSet = (
  type: TableTypeEnum,
  index: number,
  base: MillisecondsType,
): number => {
  if (TableTypeEnum.TABLE_TYPE_O2 !== type) {
    return base;
  }
  return 60000 + 10 * (index / 2);
};

const getBUTimeForSet = (
  type: TableTypeEnum,
  index: number,
  base: MillisecondsType,
): number => {
  if (TableTypeEnum.TABLE_TYPE_CO2 !== type) {
    return base;
  }
  return 120000 - 10 * (index / 2);
};

const createInitialSets = (
  base = 5000,
  tableType = TableTypeEnum.TABLE_TYPE_CO2,
): TableSetListType => {
  const sets: TableSetListType = [];

  for (let i = 0; i < 16; i += 2) {
    sets.push({
      duration: getBUTimeForSet(tableType, i, base),
      type: SetTypeEnum.SET_TYPE_PREPARE,
      pos: i,
      zombie: false,
    });

    sets.push({
      duration: getBHTimeForSet(tableType, i, base),
      type: SetTypeEnum.SET_TYPE_HOLD,
      pos: i + 1,
      zombie: false,
    });
  }

  return sets;
};

export default createInitialSets;

import { TableSetListType } from '../../editorTypes';
import { SetTypeEnum, TableTypeEnum } from '../../enums';

const getBHTimeForSet = (
  type: TableTypeEnum,
  index: number,
  baseMilliseconds: number,
): number => {
  if (TableTypeEnum.TABLE_TYPE_O2 !== type) {
    return baseMilliseconds;
  }
  return 60000 + 10 * (index / 2);
};

const getBUTimeForSet = (
  type: TableTypeEnum,
  index: number,
  baseMilliseconds: number,
): number => {
  if (TableTypeEnum.TABLE_TYPE_CO2 !== type) {
    return baseMilliseconds;
  }
  return 120000 - 10 * (index / 2);
};

const createInitialSets = (
  baseMilliseconds = 5000,
  tableType = TableTypeEnum.TABLE_TYPE_CO2,
): TableSetListType => {
  const sets: TableSetListType = [];

  for (let i = 0; i < 16; i += 2) {
    sets.push({
      duration: getBUTimeForSet(tableType, i, baseMilliseconds),
      type: SetTypeEnum.SET_TYPE_PREPARE,
      pos: i,
      zombie: false,
    });

    sets.push({
      duration: getBHTimeForSet(tableType, i, baseMilliseconds),
      type: SetTypeEnum.SET_TYPE_HOLD,
      pos: i + 1,
      zombie: false,
    });
  }

  return sets;
};

export default createInitialSets;

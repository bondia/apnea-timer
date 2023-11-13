import { TableSetListType, TableSetType } from '../../editorTypes';
import { SetTypeEnum, TableTypeEnum } from '../../enums';

const decideSetDuration = (
  tableType: TableTypeEnum,
  item: TableSetType,
  key: number,
  newDuration: number,
): TableSetType => {
  const { type, pos, duration } = item;

  // never less than 0
  if (newDuration < 0) {
    return item;
  }

  // UPDATE FOR O2 TABLES
  if (TableTypeEnum.TABLE_TYPE_O2 === tableType && SetTypeEnum.SET_TYPE_HOLD === type) {
    if ((pos < key && duration > newDuration) || pos === key || (pos > key && duration < newDuration)) {
      return { ...item, duration: newDuration };
    }
  }

  // UPDATE FOR CO2 TABLES
  if (TableTypeEnum.TABLE_TYPE_CO2 === tableType && SetTypeEnum.SET_TYPE_PREPARE === type) {
    if ((pos < key && duration < newDuration) || pos === key || (pos > key && duration > newDuration)) {
      return { ...item, duration: newDuration };
    }
  }

  // UPDATE FOR FREE TABLES
  return pos === key ? { ...item, duration: newDuration } : item;
};

const findZombies = (sets: TableSetListType): TableSetListType =>
  sets.map((item, key) => {
    const { duration, type } = item;
    const siblingKey = SetTypeEnum.SET_TYPE_HOLD === type ? key - 1 : key + 1;
    return { ...item, zombie: duration <= 0 || sets[siblingKey].duration <= 0 };
  });

const updateSetDurationForKey = (
  sets: TableSetListType,
  tableType: TableTypeEnum,
  key: number,
  newDuration: number,
) => {
  let newSets = sets.map(i => decideSetDuration(tableType, i, key, newDuration));
  newSets = findZombies(newSets);
  return newSets;
};

export default updateSetDurationForKey;

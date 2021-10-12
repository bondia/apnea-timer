import { SetType, TableType } from '../../enums';

function decideSetDuration(tableType, item, key, duration) {
  // never less than 0
  if (duration < 0) {
    return item;
  }

  const type = item.get('type');

  // UPDATE FOR O2 TABLES
  if (TableType.TABLE_TYPE_O2 === tableType && SetType.SET_TYPE_HOLD === type) {
    if (
      (item.get('pos') < key && item.get('duration') > duration) ||
      item.get('pos') === key ||
      (item.get('pos') > key && item.get('duration') < duration)
    ) {
      return item.set('duration', duration);
    }
  }

  // UPDATE FOR CO2 TABLES
  if (TableType.TABLE_TYPE_CO2 === tableType && SetType.SET_TYPE_PREPARE === type) {
    if (
      (item.get('pos') < key && item.get('duration') < duration) ||
      item.get('pos') === key ||
      (item.get('pos') > key && item.get('duration') > duration)
    ) {
      return item.set('duration', duration);
    }
  }

  // UPDATE FOR FREE TABLES
  return item.get('pos') === key ? item.set('duration', duration) : item;
}

function findZombies(sets) {
  let newSets = sets;
  newSets.forEach((item, key) => {
    const duration = item.get('duration');
    const type = item.get('type');

    let relationKey = null;
    let isZombie = duration <= 0;

    if (SetType.SET_TYPE_PREPARE === type) {
      relationKey = key + 1;
    }

    if (SetType.SET_TYPE_HOLD === type) {
      relationKey = key - 1;
      isZombie = isZombie || newSets.getIn([relationKey, 'zombie']) === true;
    }

    newSets = newSets.setIn([key, 'zombie'], isZombie);
    newSets = newSets.setIn([relationKey, 'zombie'], isZombie);
  });
  return newSets;
}

export default function updateSetDurationForKey(sets, tableType, key, newDuration) {
  let newSets = sets.map(i => decideSetDuration(tableType, i, key, newDuration));
  newSets = findZombies(newSets);
  return newSets;
}

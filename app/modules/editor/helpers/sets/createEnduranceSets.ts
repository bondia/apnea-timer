import { TableSetListType } from '../../editorTypes';
import { SetTypeEnum } from '../../enums';

const createEnduranceSets = (
  base = 5,
  baseBreaks = 5,
  laps = 16,
): TableSetListType => {
  const sets: TableSetListType = [];

  for (let i = 0; i < laps * 2; i += 2) {
    sets.push({
      duration: base,
      type: SetTypeEnum.SET_TYPE_HOLD,
      pos: i,
      zombie: false,
    });

    if (i < laps * 2 - 2) {
      sets.push({
        duration: baseBreaks,
        type: SetTypeEnum.SET_TYPE_PREPARE,
        pos: i + 1,
        zombie: false,
      });
    }
  }

  return sets;
};

export default createEnduranceSets;

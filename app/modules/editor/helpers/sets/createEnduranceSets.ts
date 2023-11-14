import { SetTypeEnum } from '../../enums';
import { TableSetType } from '../../editorTypes';

const createEnduranceSets = (base = 5, baseBreaks = 5, laps = 16): TableSetType[] => {
  const sets = [];

  for (let i = 0; i < laps * 2; i += 2) {
    sets.push({
      duration: base,
      type: SetTypeEnum.SET_TYPE_HOLD,
      pos: i,
    });

    if (i < laps * 2 - 2) {
      const prepSet = {
        duration: baseBreaks,
        type: SetTypeEnum.SET_TYPE_PREPARE,
        pos: i + 1,
      };
      sets.push(prepSet);
    }
  }

  return sets;
};

export default createEnduranceSets;

import { Action } from 'redux';
import { CronoSetType } from '../CronoTypes';

export const CRONO_REPLACE_SET = 'CRONO_REPLACE_SET';

type ReplaceSetAction = Action & {
  set: CronoSetType;
};

const replaceSetAction = (set: CronoSetType): ReplaceSetAction => {
  return { type: CRONO_REPLACE_SET, set };
};

export default replaceSetAction;

import { Action } from 'redux';
import { ImmutableJSType } from '../../../../redux/types';

export const CRONO_REPLACE_SET = 'CRONO_REPLACE_SET';

type ReplaceSetAction = Action & {
  set: ImmutableJSType;
};

const replaceSetAction = (set: ImmutableJSType): ReplaceSetAction => {
  return { type: CRONO_REPLACE_SET, set };
};

export default replaceSetAction;

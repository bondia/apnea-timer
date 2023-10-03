import { Action } from 'redux';
import * as reduxActions from '../../../redux/actions';
import { CronoSetType } from '../CronoTypes';

type ReplaceSetAction = Action & {
  set: CronoSetType;
};

const replaceSetAction = (set: CronoSetType): ReplaceSetAction => {
  return { type: reduxActions.CRONO_REPLACE_SET, set };
};

export default replaceSetAction;

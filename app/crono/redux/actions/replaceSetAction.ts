import { Action } from 'redux';
import * as reduxActions from '../../../main/enums/reduxActions';
import { CronoSetType } from '../cronoTypes';

interface ReplaceSetAction extends Action {
  set: CronoSetType;
}

const replaceSetAction = (set: CronoSetType): ReplaceSetAction => {
  return { type: reduxActions.CRONO_REPLACE_SET, set };
};

export default replaceSetAction;

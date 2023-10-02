import { Action } from 'redux';
import * as reduxActions from '../../../redux/actions';
import { CronoSetType } from '../CronoTypes';

interface ReplaceSetAction extends Action {
  set: CronoSetType;
}

const replaceSetAction = (set: CronoSetType): ReplaceSetAction => {
  return { type: reduxActions.CRONO_REPLACE_SET, set };
};

export default replaceSetAction;

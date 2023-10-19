import { Action } from 'redux';
import { CronoMode } from '../../../editor/enums';
import * as reduxActions from '../../../../redux/actions';

type SetCronoModeAction = Action & {
  mode: CronoMode;
};

const setCronoModeAction = (mode: CronoMode): SetCronoModeAction => {
  return { type: reduxActions.CRONO_SET_RUNNING_MODE, mode };
};

export default setCronoModeAction;

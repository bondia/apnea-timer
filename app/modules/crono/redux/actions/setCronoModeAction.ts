import { Action } from 'redux';
import { CronoModeEnum } from '../../../editor/enums';
import * as reduxActions from '../../../../redux/actions';

type SetCronoModeAction = Action & {
  mode: CronoModeEnum;
};

const setCronoModeAction = (mode: CronoModeEnum): SetCronoModeAction => {
  return { type: reduxActions.CRONO_SET_RUNNING_MODE, mode };
};

export default setCronoModeAction;

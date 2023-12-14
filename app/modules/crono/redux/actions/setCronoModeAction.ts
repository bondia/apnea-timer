import { Action } from 'redux';
import { CronoModeEnum } from '../../../editor/enums';

export const CRONO_SET_RUNNING_MODE = 'CRONO_SET_RUNNING_MODE';

type SetCronoModeAction = Action & {
  mode: CronoModeEnum;
};

const setCronoModeAction = (mode: CronoModeEnum): SetCronoModeAction => {
  return { type: CRONO_SET_RUNNING_MODE, mode };
};

export default setCronoModeAction;

import { StoreThunkAction } from '../../../../../redux/types';
import { CronoModeEnum, SetModeEnum } from '../../../../editor/enums';
import setCronoModeAction from '../setCronoModeAction';

export type HandleFinishTableAction = () => StoreThunkAction;

const pendingModes = [SetModeEnum.SET_MODE_INITIAL, SetModeEnum.SET_MODE_RUNNING];

const handleFinishTableAction: HandleFinishTableAction = () => (dispatch, getState) => {
  const { crono } = getState();
  if (!crono) {
    return;
  }
  const { sets } = crono;

  // check if there are some sets still in initial mode
  const found = sets.filter(({ running: { mode } }) => pendingModes.indexOf(mode) !== -1);
  if (found.length !== 0) {
    return;
  }
  dispatch(setCronoModeAction(CronoModeEnum.CRONO_MODE_FINISHED));
};

export default handleFinishTableAction;

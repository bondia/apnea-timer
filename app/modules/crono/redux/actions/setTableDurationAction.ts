import { Action } from 'redux';

export const CRONO_SET_RUNNING_TABLE_DURATION = 'CRONO_SET_RUNNING_TABLE_DURATION';

export type SetTableDurationAction = Action & {
  duration: number;
};

const setTableDurationAction = (duration: number): SetTableDurationAction => {
  return { type: CRONO_SET_RUNNING_TABLE_DURATION, duration };
};

export default setTableDurationAction;

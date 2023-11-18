import { Action } from 'redux';

export const CRONO_SET_START_TIMESTAMP = 'CRONO_SET_START_TIMESTAMP';

type SetCronoStartTimestampAction = Action & {
  startTimestamp: number;
};

const setCronoStartTimestampAction = (startTimestamp: number): SetCronoStartTimestampAction => {
  return { type: CRONO_SET_START_TIMESTAMP, startTimestamp };
};

export default setCronoStartTimestampAction;

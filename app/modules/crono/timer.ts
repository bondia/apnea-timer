import handleTick from './redux/actions/handleTick';
import { StoreThunkAction } from '../../redux/types';

let timer = null;

const TIMER_REFRESH = 200;

export const stopTimer = () => {
  if (timer === null) {
    return;
  }
  clearInterval(timer);
  timer = null;
};

export const startTimer = (): StoreThunkAction => dispatch => {
  timer = setInterval(() => dispatch(handleTick()), TIMER_REFRESH);
};

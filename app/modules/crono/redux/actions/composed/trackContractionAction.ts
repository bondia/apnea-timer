import { StoreThunkAction } from '../../../../../redux/types';
import calculateSetCountdown from '../../../../../utils/crono/calculateSetCountdown';
import { CronoSetType } from '../../../cronoTypes';
import findRunningSet from '../../../helpers/findRunningSet';
import replaceSetAction from '../replaceSetAction';
import updateContractionsAverageAction from './updateContractionsAverageAction';

type TrackContractionType = () => StoreThunkAction;

const trackContractionAction: TrackContractionType = () => {
  return (dispatch, getState) => {
    const { crono } = getState();
    if (!crono) {
      return;
    }
    const { sets } = crono;

    const current = findRunningSet(sets);
    if (!current) {
      return;
    }

    const { duration } = current;
    const countdown = calculateSetCountdown(current);
    const contraction = duration - countdown;

    const newSet: CronoSetType = {
      ...current,
      running: {
        ...current.running,
        contraction,
      },
    };

    dispatch(replaceSetAction(newSet));
    dispatch(updateContractionsAverageAction());
  };
};

export default trackContractionAction;

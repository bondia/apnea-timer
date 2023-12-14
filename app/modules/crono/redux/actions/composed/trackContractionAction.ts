import { StoreThunkAction } from '../../../../../redux/types';
import findRunningSet from '../../../helpers/findRunningSet';
import replaceSetAction from '../replaceSetAction';
import { CronoSetType } from '../../CronoTypes';
import updateContractionsAverageAction from './updateContractionsAverageAction';

export type TrackContractionType = () => StoreThunkAction;

const trackContractionAction: TrackContractionType = () => {
  return (dispatch, getState) => {
    const {
      crono: { sets },
    } = getState();

    const current: CronoSetType = findRunningSet(sets);
    const {
      duration,
      running: { countdown },
    } = current;
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

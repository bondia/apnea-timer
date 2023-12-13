import Immutable from 'immutable';
import { ImmutableJSType, StoreThunkAction } from '../../../../../redux/types';
import findRunningSet from '../../../helpers/findRunningSet';
import replaceSetAction from '../replaceSetAction';
import { CronoSetType } from '../../CronoTypes';
import updateContractionsAverageAction from './updateContractionsAverageAction';

export type TrackContractionType = () => StoreThunkAction;

// TODO: Remove Immutable js
const trackContractionAction: TrackContractionType = () => {
  return (dispatch, getState) => {
    const { crono } = getState();
    const sets = crono.get<ImmutableJSType>('sets').toJS<CronoSetType[]>();

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

    dispatch(replaceSetAction(Immutable.fromJS(newSet)));
    dispatch(updateContractionsAverageAction());
  };
};

export default trackContractionAction;

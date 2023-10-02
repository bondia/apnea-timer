import Immutable from 'immutable';
import { StoreThunkAction } from '../../../redux/types';
import findRunningSet from '../../pure/findRunningSet';
import replaceSetAction from '../actions/replaceSetAction';
import updateContractionsAverageAction from './updateContractionsAverageAction';
import { CronoSetType } from '../CronoTypes';

export type TrackContractionType = () => StoreThunkAction;

const trackContractionAction: TrackContractionType = () => {
  return (dispatch, getState) => {
    const { crono } = getState();

    const sets: CronoSetType[] = crono.get('sets').toJS() as CronoSetType[];
    const current: CronoSetType = findRunningSet(sets);
    let immutableCurrentSet = Immutable.fromJS(current);

    const duration = immutableCurrentSet.get('duration');
    const countdown = immutableCurrentSet.getIn(['running', 'countdown']);
    immutableCurrentSet = immutableCurrentSet.setIn(['running', 'contraction'], duration - countdown);
    dispatch(replaceSetAction(immutableCurrentSet));
    dispatch(updateContractionsAverageAction());
  };
};

export default trackContractionAction;

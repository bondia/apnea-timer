import Immutable from 'immutable';
import { ImmutableJSType, StoreThunkAction } from '../../../../redux/types';
import findRunningSet from '../../helpers/findRunningSet';
import replaceSetAction from '../actions/replaceSetAction';
import { CronoSetType } from '../CronoTypes';
import updateContractionsAverageAction from './updateContractionsAverageAction';

export type TrackContractionType = () => StoreThunkAction;

const trackContractionAction: TrackContractionType = () => {
  return (dispatch, getState) => {
    const { crono } = getState();

    const sets = crono.get<ImmutableJSType>('sets').toJS<CronoSetType[]>();
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

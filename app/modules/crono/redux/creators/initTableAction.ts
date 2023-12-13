import Immutable from 'immutable';
import { EditorStateType } from '../../../editor/editorTypes';
import { ImmutableJSType, StoreThunkAction } from '../../../../redux/types';
import editorToCrono from '../../helpers/editorToCrono';
import setInitialStateAction from '../actions/setInitialStateAction';
import { updateTableDurationBySetsAction } from '../actions/composed/updateTableDurationBySetsAction';
import { CronoSetListType } from '../CronoTypes';

/**
 * Prepare initial crono
 */
export type InitTableAction = (data: EditorStateType) => StoreThunkAction;

const initTableAction: InitTableAction = trainingTable => {
  return dispatch => {
    // convert traning table to a crono table
    const crono = editorToCrono(trainingTable);
    const immutableCronno: ImmutableJSType = Immutable.fromJS(crono);
    dispatch(setInitialStateAction(immutableCronno));
    // make sure all durations are correctly calculated
    const sets = immutableCronno.get<ImmutableJSType>('sets');
    dispatch(updateTableDurationBySetsAction(sets.toJS<CronoSetListType>()));
  };
};

export default initTableAction;

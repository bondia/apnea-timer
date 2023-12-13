import Immutable from 'immutable';
import { EditorStateType } from '../../../editor/editorTypes';
import { ImmutableJSType, StoreThunkAction } from '../../../../redux/types';
import editorToCrono from '../../helpers/editorToCrono';
import setInitialStateAction from '../actions/setInitialStateAction';
import updateTableDurationBySetsAction from '../actions/composed/updateTableDurationBySetsAction';

/**
 * Prepare initial crono
 */
export type InitTableAction = (data: EditorStateType) => StoreThunkAction;

// TODO: Remove Immutable js
const initTableAction: InitTableAction = trainingTable => {
  return dispatch => {
    // convert traning table to a crono table
    const crono = editorToCrono(trainingTable);
    const immutableCronno: ImmutableJSType = Immutable.fromJS(crono);
    dispatch(setInitialStateAction(immutableCronno));
    // make sure all durations are correctly calculated
    dispatch(updateTableDurationBySetsAction());
  };
};

export default initTableAction;

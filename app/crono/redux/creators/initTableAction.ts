import Immutable from 'immutable';
import { Dispatch } from 'redux';
import { EditorStateType } from '../../../editor/redux/editorTypes';
import editorToCrono from '../../pure/editorToCrono';
import setInitialStateAction from '../actions/setInitialStateAction';
import updateTableDurationBySetsAction from './updateTableDurationBySetsAction';

/**
 * Prepare initial crono
 */
export type InitTableAction = (
  data: EditorStateType
) => (dispatch: Dispatch) => void;

const initTableAction: InitTableAction = (trainingTable) => {
  return (dispatch) => {
    // convert traning table to a crono table
    const crono = editorToCrono(trainingTable);
    const immutableCronno = Immutable.fromJS(crono);
    dispatch(setInitialStateAction(immutableCronno));
    // make sure all durations are correctly calculated
    const sets = immutableCronno.get('sets');
    dispatch(updateTableDurationBySetsAction(sets));
  };
};

export default initTableAction;

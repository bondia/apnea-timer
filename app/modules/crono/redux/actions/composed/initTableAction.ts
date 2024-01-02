import { StoreThunkAction } from '../../../../../redux/types';
import { EditorStateType } from '../../../../editor/editorTypes';
import editorToCrono from '../../../helpers/editorToCrono';
import setInitialStateAction from '../setInitialStateAction';
import updateTableDurationBySetsAction from './updateTableDurationBySetsAction';

/**
 * Prepare initial crono
 */
type InitTableAction = (data: EditorStateType) => StoreThunkAction;

const initTableAction: InitTableAction = trainingTable => {
  return dispatch => {
    // convert traning table to a crono table
    const crono = editorToCrono(trainingTable);
    dispatch(setInitialStateAction(crono));
    // make sure all durations are correctly calculated
    dispatch(updateTableDurationBySetsAction());
  };
};

export default initTableAction;

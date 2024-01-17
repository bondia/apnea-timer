import { StoreThunkAction } from '../../../../../redux/types';
import createCronoFromEditor from '../../../../../utils/crono/createCronoFromEditor';
import { EditorStateType } from '../../../../editor/editorTypes';
import setInitialStateAction from '../setInitialStateAction';
import updateTableDurationBySetsAction from './updateTableDurationBySetsAction';

/**
 * Prepare initial crono
 */
type InitTableAction = (data: EditorStateType) => StoreThunkAction;

const initTableAction: InitTableAction = trainingTable => {
  return dispatch => {
    // convert traning table to a crono table
    const crono = createCronoFromEditor(trainingTable);
    dispatch(setInitialStateAction(crono));
    // make sure all durations are correctly calculated
    dispatch(updateTableDurationBySetsAction());
  };
};

export default initTableAction;

import { StoreThunkAction } from '../../../../../redux/types';
import { EnduranceTrainingTableType } from '../../../editorTypes';
import updateSetsForTableType from '../../../helpers/sets/updateSetsForTableType';
import replaceEditorSets from '../replaceEditorSets';
import setEditorTableBaseAction from '../setEditorTableBase';
import { updateTableDurationBySetsAction } from './updateTableDurationBySetsAction';

export type EditorChangeTableBaseAction = (value: number) => StoreThunkAction;

export const changeTableBase: EditorChangeTableBaseAction = value => (dispatch, getState) => {
  const {
    editor: { trainingTable, sets },
  } = getState();
  const { baseBreaks, type: tableType } = trainingTable as EnduranceTrainingTableType;

  // change table base
  const base = value < 5 ? 5 : value;
  dispatch(setEditorTableBaseAction(base));

  // update sets with new base
  const newSets = updateSetsForTableType([...sets], base, baseBreaks, tableType);
  dispatch(replaceEditorSets(newSets));

  // update table duration
  dispatch(updateTableDurationBySetsAction(newSets));
};

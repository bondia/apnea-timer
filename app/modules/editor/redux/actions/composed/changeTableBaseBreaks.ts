import { StoreThunkAction } from '../../../../../redux/types';
import updateSetsForTableType from '../../../helpers/sets/updateSetsForTableType';
import replaceEditorSets from '../replaceEditorSets';
import setEditorTableBaseBreakAction from '../setEditorTableBaseBreakAction';
import { updateTableDurationBySets } from './updateTableDurationBySets';

export type ChangeTableBaseBreaksType = (amount: number) => StoreThunkAction;

export const changeTableBaseBreaks: ChangeTableBaseBreaksType = value => (dispatch, getState) => {
  const {
    editor: {
      trainingTable: { base, type: tableType },
      sets,
    },
  } = getState();

  // change table base breaks
  const baseBreaks = value < 5 ? 5 : value;
  dispatch(setEditorTableBaseBreakAction(baseBreaks));

  // update sets with new base
  const newSets = updateSetsForTableType([...sets], base, baseBreaks, tableType);
  dispatch(replaceEditorSets(newSets));

  // update table duration
  dispatch(updateTableDurationBySets(newSets));
};

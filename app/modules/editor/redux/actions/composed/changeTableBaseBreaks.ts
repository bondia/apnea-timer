import { StoreThunkAction } from '../../../../../redux/types';
import updateSetsForTableType from '../../../helpers/sets/updateSetsForTableType';
import replaceEditorSetsAction from '../replaceEditorSetsAction';
import setEditorTableBaseBreakAction from '../setEditorTableBaseBreakAction';
import updateTableDurationBySetsAction from './updateTableDurationBySetsAction';

export type ChangeTableBaseBreaksType = (amount: number) => StoreThunkAction;

export const changeTableBaseBreaks: ChangeTableBaseBreaksType =
  value => (dispatch, getState) => {
    const {
      editor: {
        trainingTable: { baseMilliseconds, type: tableType },
        sets,
      },
    } = getState();

    // change table base breaks
    const baseBreaks = value < 5 ? 5 : value;
    dispatch(setEditorTableBaseBreakAction(baseBreaks));

    // update sets with new base
    const newSets = updateSetsForTableType(
      [...sets],
      baseMilliseconds / 1000,
      baseBreaks,
      tableType,
    );
    dispatch(replaceEditorSetsAction(newSets));

    // update table duration
    dispatch(updateTableDurationBySetsAction(newSets));
  };

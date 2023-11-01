import { StoreThunkAction } from '../../../../redux/types';
import updateSetsForTableType from '../../pure/sets/updateSetsForTableType';
import replaceEditorSets from '../actions/replaceEditorSets';
import setEditorTableBaseBreakAction from '../actions/setEditorTableBaseBreakAction';
import { updateTableDurationBySets } from '../editorActions';

export type ChangeTableBaseBreaksType = (amount: number) => StoreThunkAction;

export const changeTableBaseBreaks: ChangeTableBaseBreaksType = value => {
  return (dispatch, getState) => {
    const { editor } = getState();
    const base = editor.getIn(['trainingTable', 'base']);

    // change table base breaks
    const baseBreaks = value < 5 ? 5 : value;
    dispatch(setEditorTableBaseBreakAction(baseBreaks));

    // update sets with new base
    const tableType = editor.getIn(['trainingTable', 'type']);
    let sets = editor.get('sets');
    sets = updateSetsForTableType(sets, base, baseBreaks, tableType);
    dispatch(replaceEditorSets(sets));

    // update table duration
    dispatch(updateTableDurationBySets(sets));
  };
};

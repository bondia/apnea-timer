import Immutable from 'immutable';
import { StoreThunkAction } from '../../../../../redux/types';
import updateSetsForTableType from '../../../helpers/sets/updateSetsForTableType';
import replaceEditorSets from '../replaceEditorSets';
import setEditorTableBaseBreakAction from '../setEditorTableBaseBreakAction';
import { updateTableDurationBySets } from './updateTableDurationBySets';

export type ChangeTableBaseBreaksType = (amount: number) => StoreThunkAction;

export const changeTableBaseBreaks: ChangeTableBaseBreaksType = value => (dispatch, getState) => {
  const { editor } = getState();
  const base = editor.getIn(['trainingTable', 'base']);

  // change table base breaks
  const baseBreaks = value < 5 ? 5 : value;
  dispatch(setEditorTableBaseBreakAction(baseBreaks));

  // update sets with new base
  const tableType = editor.getIn(['trainingTable', 'type']);
  const newSets = updateSetsForTableType(editor.get('sets').toJS(), base, baseBreaks, tableType);
  const immutableSets = Immutable.fromJS(newSets);
  dispatch(replaceEditorSets(immutableSets));

  // update table duration
  dispatch(updateTableDurationBySets(immutableSets));
};

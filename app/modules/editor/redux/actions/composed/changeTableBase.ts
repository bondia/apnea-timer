import Immutable from 'immutable';
import { ImmutableJSType, StoreThunkAction } from '../../../../../redux/types';
import updateSetsForTableType from '../../../helpers/sets/updateSetsForTableType';
import replaceEditorSets from '../replaceEditorSets';
import setEditorTableBaseAction from '../setEditorTableBase';
import { updateTableDurationBySets } from './updateTableDurationBySets';
import { TableTypeEnum } from '../../../enums';

export type EditorChangeTableBaseAction = (value: number) => StoreThunkAction;

export const changeTableBase: EditorChangeTableBaseAction = value => (dispatch, getState) => {
  const { editor } = getState();
  const baseBreaks = editor.getIn(['trainingTable', 'baseBreaks']);

  // change table base
  const base = value < 5 ? 5 : value;
  dispatch(setEditorTableBaseAction(base));

  // update sets with new base
  const tableType = editor.getIn<TableTypeEnum>(['trainingTable', 'type']);
  const newSets = updateSetsForTableType(editor.get<ImmutableJSType>('sets').toJS(), base, baseBreaks, tableType);
  const immutableSets = Immutable.fromJS(newSets);
  dispatch(replaceEditorSets(immutableSets));

  // update table duration
  dispatch(updateTableDurationBySets(immutableSets));
};

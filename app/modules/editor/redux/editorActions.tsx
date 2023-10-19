import { TableTypeEnum } from '../enums';
import createTable from '../pure/createTable';
import calculateSetsDuration from '../pure/sets/calculateSetsDuration';
import updateSetDurationForKey from '../pure/sets/updateSetDurationForKey';
import updateSetsForTableType from '../pure/sets/updateSetsForTableType';
import replaceEditorSets from './actions/replaceEditorSets';
import setEditorInitialStateAction, { SetEditorInitialStateAction } from './actions/setEditorInitialStateAction';
import setEditorTableBaseAction from './actions/setEditorTableBase';
import setEditorTableBaseBreakAction from './actions/setEditorTableBaseBreakAction';
import setEditorTableDuration from './actions/setEditorTableDuration';
import { ImmutableJSEditorSetType } from './editorTypes';

/**
 * Given some sets alculate table duration and update it.
 */
function updateTableDurationBySets(sets) {
  const duration = calculateSetsDuration(sets);
  return setEditorTableDuration(duration);
}

/**
 * Create Endurance table
 */
export type CreateEnduranceTableType = (base: number, baseBreaks: number, laps?: number) => SetEditorInitialStateAction;
export const createEnduranceTable: CreateEnduranceTableType = (base, baseBreaks, laps = 6) => {
  const newState = createTable(base, baseBreaks, TableTypeEnum.TABLE_TYPE_ENDURANCE, laps);
  return setEditorInitialStateAction(newState);
};

/**
 * Change table type action
 */
export type ChangeTableTypeType = (base: number, tableType: string) => SetEditorInitialStateAction;
export const changeTableType: ChangeTableTypeType = (base, tableType) => {
  const newState = createTable(base, null, tableType, 6);
  return setEditorInitialStateAction(newState);
};

/**
 * Change table endurance laps
 */
export type ChangeEnduranceLapsType = (amount: number) => void;
export const changeEnduranceLaps: ChangeEnduranceLapsType = laps => {
  return (dispatch, getState) => {
    const { editor } = getState();
    const base = editor.getIn(['trainingTable', 'base']);
    const baseBreaks = editor.getIn(['trainingTable', 'baseBreaks']);
    const newState = createTable(base, baseBreaks, TableTypeEnum.TABLE_TYPE_ENDURANCE, laps);
    return dispatch(setEditorInitialStateAction(newState));
  };
};

/**
 * Change table base action
 */
export type ChangeTableBaseType = (amount: number) => void;
export const changeTableBase: ChangeTableBaseType = (value: number) => {
  return (dispatch, getState) => {
    const { editor } = getState();
    const baseBreaks = editor.getIn(['trainingTable', 'baseBreaks']);

    // change table base
    const base = value < 5 ? 5 : value;
    dispatch(setEditorTableBaseAction(base));

    // update sets with new base
    const tableType = editor.getIn(['trainingTable', 'type']);
    let sets = editor.get('sets');
    sets = updateSetsForTableType(sets, base, baseBreaks, tableType);
    dispatch(replaceEditorSets(sets));

    // update table duration
    dispatch(updateTableDurationBySets(sets));
  };
};

/**
 * Change table base breaks action
 */
export type ChangeTableBaseBreaksType = (amount: number) => void;
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

/**
 * Changing sets times
 */
function changeTimeItem(key: number, amount: number) {
  return (dispatch, getState) => {
    const { editor } = getState();

    // find item
    const item = editor.getIn(['sets']).find((set: ImmutableJSEditorSetType) => set.get('pos') === key);

    if (!item) {
      return;
    }

    // decide new duration
    const duration = amount + item.get('duration');
    const tableType = editor.getIn(['trainingTable', 'type']);
    const sets = updateSetDurationForKey(editor.get('sets'), tableType, key, duration);
    dispatch(replaceEditorSets(sets));

    // update table duration
    dispatch(updateTableDurationBySets(sets));
  };
}

export const increaseTimeItem = (key: number, amount: number) => changeTimeItem(key, amount);
export const decreaseTimeItem = (key: number, amount: number) => changeTimeItem(key, -amount);

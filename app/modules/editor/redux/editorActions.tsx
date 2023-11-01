import { StoreThunkAction } from '../../../redux/types';
import { TableTypeEnum } from '../enums';
import createTable from '../pure/createTable';
import calculateSetsDuration from '../pure/sets/calculateSetsDuration';
import updateSetsForTableType from '../pure/sets/updateSetsForTableType';
import replaceEditorSets from './actions/replaceEditorSets';
import setEditorInitialStateAction, { SetEditorInitialStateAction } from './actions/setEditorInitialStateAction';
import setEditorTableBaseAction from './actions/setEditorTableBase';
import setEditorTableDuration from './actions/setEditorTableDuration';

/**
 * Given some sets alculate table duration and update it.
 */
export const updateTableDurationBySets = sets => {
  const duration = calculateSetsDuration(sets);
  return setEditorTableDuration(duration);
};

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
export type ChangeEnduranceLapsType = (amount: number) => StoreThunkAction;
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
export const changeTableBase = (value: number): StoreThunkAction => {
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
export type EditorChangeTableBaseAction = typeof changeTableBase;

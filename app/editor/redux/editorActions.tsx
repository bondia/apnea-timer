import * as reduxActions from '../../main/enums/reduxActions';
import { TableType } from '../enums';
import createTable from '../pure/createTable';
import calculateSetsDuration from '../pure/sets/calculateSetsDuration';
import updateSetDurationForKey from '../pure/sets/updateSetDurationForKey';
import updateSetsForTableType from '../pure/sets/updateSetsForTableType';
import { ImmutableJSType } from './editorTypes';

function setInitialState(state) {
  return { type: reduxActions.EDITOR_SET_INITIAL_STATE, state };
}

function setTableBase(base) {
  return { type: reduxActions.EDITOR_SET_TABLE_BASE, base };
}

function setTableBaseBreak(baseBreaks) {
  return { type: reduxActions.EDITOR_SET_TABLE_BASE_BREAKS, baseBreaks };
}

function setTableDuration(duration) {
  return { type: reduxActions.EDITOR_SET_TABLE_DURATION, duration };
}

function replaceSets(sets) {
  return { type: reduxActions.EDITOR_REPLACE_SETS, sets };
}

/**
 * Due some sets, calculatetable duration and update it
 * @param  {[type]} sets [description]
 * @return {[type]}      [description]
 */
function updateTableDurationBySets(sets) {
  const duration = calculateSetsDuration(sets);
  return setTableDuration(duration);
}

/**
 * Create Endurance table
 */
export type CreateEnduranceTableType = (base: number, baseBreaks: number, laps?: number) => object;
export const createEnduranceTable: CreateEnduranceTableType = (base, baseBreaks, laps = 6) => {
  const newState = createTable(base, baseBreaks, TableType.TABLE_TYPE_ENDURANCE, laps);
  return setInitialState(newState);
};

/**
 * Change table type action
 */
export type ChangeTableTypeType = (base: number, tableType: string) => object;
export const changeTableType: ChangeTableTypeType = (base, tableType) => {
  const newState = createTable(base, null, tableType, 6);
  return setInitialState(newState);
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
    const newState = createTable(base, baseBreaks, TableType.TABLE_TYPE_ENDURANCE, laps);
    return dispatch(setInitialState(newState));
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
    dispatch(setTableBase(base));

    // update sets with new base
    const tableType = editor.getIn(['trainingTable', 'type']);
    let sets = editor.get('sets');
    sets = updateSetsForTableType(sets, base, baseBreaks, tableType);
    dispatch(replaceSets(sets));

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
    dispatch(setTableBaseBreak(baseBreaks));

    // update sets with new base
    const tableType = editor.getIn(['trainingTable', 'type']);
    let sets = editor.get('sets');
    sets = updateSetsForTableType(sets, base, baseBreaks, tableType);
    dispatch(replaceSets(sets));

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
    const item = editor.getIn(['sets']).find((set: ImmutableJSType) => set.get('pos') === key);

    if (!item) {
      return;
    }

    // decide new duration
    const duration = amount + item.get('duration');
    const tableType = editor.getIn(['trainingTable', 'type']);
    const sets = updateSetDurationForKey(editor.get('sets'), tableType, key, duration);
    dispatch(replaceSets(sets));

    // update table duration
    dispatch(updateTableDurationBySets(sets));
  };
}

export type IncreaseTimeItemType = (key: number, amount: number) => void;
export const increaseTimeItem: IncreaseTimeItemType = (key, amount) => {
  return changeTimeItem(key, amount);
};

export type DecreaseTimeItemType = (key: number, amount: number) => void;
export const decreaseTimeItem: DecreaseTimeItemType = (key, amount) => {
  return changeTimeItem(key, -amount);
};

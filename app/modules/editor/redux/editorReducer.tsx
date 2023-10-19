import { AnyAction } from 'redux';
import { SET_EDITOR_INITIAL_STATE } from './actions/setEditorInitialStateAction';
import { ImmutableJSEditorType } from './editorTypes';
import { defaultEmptyAction } from '../../../redux/actions';
import { SET_EDITOR_TABLE_BASE } from './actions/setEditorTableBase';
import { SET_EDITOR_TABLE_BASE_BREAKS } from './actions/setEditorTableBaseBreakAction';
import { SET_EDITOR_TABLE_DURATION } from './actions/setEditorTableDuration';
import { REPLACE_EDITOR_SETS } from './actions/replaceEditorSets';

export default function editorReducer(
  state: ImmutableJSEditorType = null,
  action: AnyAction = defaultEmptyAction,
): ImmutableJSEditorType {
  // set initial state
  if (action.type === SET_EDITOR_INITIAL_STATE) {
    return action.state;
  }

  // set type
  if (action.type === SET_EDITOR_INITIAL_STATE) {
    return state.setIn(['trainingTable', 'type'], action.type);
  }

  // set base
  if (action.type === SET_EDITOR_TABLE_BASE) {
    return state.setIn(['trainingTable', 'base'], action.base);
  }

  // set base breaks
  if (action.type === SET_EDITOR_TABLE_BASE_BREAKS) {
    return state.setIn(['trainingTable', 'baseBreaks'], action.baseBreaks);
  }

  // set duration
  if (action.type === SET_EDITOR_TABLE_DURATION) {
    return state.setIn(['trainingTable', 'duration'], action.duration);
  }

  // set sets
  if (action.type === REPLACE_EDITOR_SETS) {
    return state.setIn(['sets'], action.sets);
  }

  return state;
}

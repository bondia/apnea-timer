import { AnyAction } from 'redux';
import { SET_EDITOR_INITIAL_STATE } from './actions/setInitialStateAction';
import { ImmutableJSEditorType } from './editorTypes';
import {
  EDITOR_REPLACE_SETS,
  EDITOR_SET_TABLE_BASE,
  EDITOR_SET_TABLE_BASE_BREAKS,
  EDITOR_SET_TABLE_DURATION,
  EDITOR_SET_TABLE_TYPE,
  defaultEmptyAction,
} from '../../redux/actions';

export default function editorReducer(
  state: ImmutableJSEditorType = null,
  action: AnyAction = defaultEmptyAction,
): ImmutableJSEditorType {
  // set initial state
  if (action.type === SET_EDITOR_INITIAL_STATE) {
    return action.state;
  }

  // set type
  if (action.type === EDITOR_SET_TABLE_TYPE) {
    return state.setIn(['trainingTable', 'type'], action.type);
  }

  // set base
  if (action.type === EDITOR_SET_TABLE_BASE) {
    return state.setIn(['trainingTable', 'base'], action.base);
  }

  // set base breaks
  if (action.type === EDITOR_SET_TABLE_BASE_BREAKS) {
    return state.setIn(['trainingTable', 'baseBreaks'], action.baseBreaks);
  }

  // set duration
  if (action.type === EDITOR_SET_TABLE_DURATION) {
    return state.setIn(['trainingTable', 'duration'], action.duration);
  }

  // set sets
  if (action.type === EDITOR_REPLACE_SETS) {
    return state.setIn(['sets'], action.sets);
  }

  return state;
}

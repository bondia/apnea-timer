import * as reduxActions from '../../main/enums/reduxActions';
import { ImmutableJSEditorType } from './editorTypes';

export default function editorReducer(state = null, action): ImmutableJSEditorType {
  // set initial state
  if (action.type === reduxActions.EDITOR_SET_INITIAL_STATE) {
    return action.state;
  }

  // set type
  if (action.type === reduxActions.EDITOR_SET_TABLE_TYPE) {
    return state.setIn(['trainingTable', 'type'], action.type);
  }

  // set base
  if (action.type === reduxActions.EDITOR_SET_TABLE_BASE) {
    return state.setIn(['trainingTable', 'base'], action.base);
  }

  // set base breaks
  if (action.type === reduxActions.EDITOR_SET_TABLE_BASE_BREAKS) {
    return state.setIn(['trainingTable', 'baseBreaks'], action.baseBreaks);
  }

  // set duration
  if (action.type === reduxActions.EDITOR_SET_TABLE_DURATION) {
    return state.setIn(['trainingTable', 'duration'], action.duration);
  }

  // set sets
  if (action.type === reduxActions.EDITOR_REPLACE_SETS) {
    return state.setIn(['sets'], action.sets);
  }

  return state;
}

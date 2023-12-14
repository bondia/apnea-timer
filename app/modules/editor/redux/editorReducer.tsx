import { AnyAction } from 'redux';
import { defaultEmptyAction } from '../../../redux/types';
import { EditorStateType } from '../editorTypes';
import {
  SET_EDITOR_INITIAL_STATE,
  SetEditorInitialStateAction,
  reduceSetEditorInitialStateAction,
} from './actions/setEditorInitialStateAction';
import {
  SET_EDITOR_TABLE_BASE,
  SetEditorTableBaseAction,
  reduceSetEditorTableBaseAction,
} from './actions/setEditorTableBaseAction';
import {
  SET_EDITOR_TABLE_BASE_BREAKS,
  SetEditorTableBaseBreakAction,
  reduceSetEditorTableBaseBreakAction,
} from './actions/setEditorTableBaseBreakAction';
import {
  SET_EDITOR_TABLE_DURATION,
  SetEditorTableDurationAction,
  reduceSetEditorTableDurationAction,
} from './actions/setEditorTableDurationAction';
import {
  REPLACE_EDITOR_SETS,
  ReplaceEditorSetsAction,
  reduceReplaceEditorSetsAction,
} from './actions/replaceEditorSetsAction';

const editorReducer = (state: EditorStateType = null, action: AnyAction = defaultEmptyAction): EditorStateType => {
  // set initial state
  if (action.type === SET_EDITOR_INITIAL_STATE) {
    return reduceSetEditorInitialStateAction(state, action as SetEditorInitialStateAction);
  }

  // set base
  if (action.type === SET_EDITOR_TABLE_BASE) {
    return reduceSetEditorTableBaseAction(state, action as SetEditorTableBaseAction);
  }

  // set base breaks
  if (action.type === SET_EDITOR_TABLE_BASE_BREAKS) {
    return reduceSetEditorTableBaseBreakAction(state, action as SetEditorTableBaseBreakAction);
  }

  // set duration
  if (action.type === SET_EDITOR_TABLE_DURATION) {
    return reduceSetEditorTableDurationAction(state, action as SetEditorTableDurationAction);
  }

  // set sets
  if (action.type === REPLACE_EDITOR_SETS) {
    return reduceReplaceEditorSetsAction(state, action as ReplaceEditorSetsAction);
  }

  return state;
};

export default editorReducer;

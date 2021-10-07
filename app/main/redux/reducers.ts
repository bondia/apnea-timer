import { combineReducers } from 'redux';
import cronoReducer from '../../crono/redux/cronoReducer';
import editorReducer from '../../editor/redux/editorReducer';

const initReducers = () => {
  return combineReducers({
    editor: editorReducer,
    crono: cronoReducer
  });
};

export { initReducers };

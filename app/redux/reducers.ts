import { combineReducers } from 'redux';
import cronoReducer from '../crono/redux/cronoReducer';
import editorReducer from '../editor/redux/editorReducer';
import { RootState } from './types';

const initReducers = () => {
  return combineReducers<RootState>({
    editor: editorReducer,
    crono: cronoReducer,
  });
};

export default initReducers;

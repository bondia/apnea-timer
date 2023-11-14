import { combineReducers } from 'redux';
import cronoReducer from '../modules/crono/redux/cronoReducer';
import editorReducer from '../modules/editor/redux/editorReducer';
import { RootState } from './types';

const initReducers = () =>
  combineReducers<RootState>({
    editor: editorReducer,
    crono: cronoReducer,
  });

export default initReducers;

import { configureStore } from '@reduxjs/toolkit';
import initReducers from './reducers';

const configureAppStore = () => {
  const reducers = initReducers();
  const store = configureStore({
    reducer: reducers,
    // preloadedState,
    // devTools: config.NODE_ENV === 'development',
  });

  return store;
};

export default configureAppStore;

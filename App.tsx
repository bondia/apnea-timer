import React, { FC } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import initReducers from './app/redux/reducers';
import Router from './app/Router';

export const configureAppStore = () => {
  const reducers = initReducers();
  const store = configureStore({
    reducer: reducers,
    // preloadedState,
    // devTools: config.NODE_ENV === 'development',
  });

  return store;
};

const store = configureAppStore();

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
export type AppDispatch = typeof store.dispatch;

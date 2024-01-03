import React, { FC } from 'react';
import { Provider } from 'react-redux';
import Router from './app/Router';
import configureAppStore from './app/redux/configureAppStore';

const store = configureAppStore();

const App: FC = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
export type AppDispatch = typeof store.dispatch;

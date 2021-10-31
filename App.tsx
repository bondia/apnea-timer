import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import initReducers from './app/redux/reducers';
import Router from './app/Router';

const enhancer = compose(applyMiddleware(thunk));
const store = createStore(initReducers(), enhancer);

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;

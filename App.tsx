import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import initReducers from './app/redux/reducers';
// import devTools from 'remote-redux-devtools';
import Router from './app/Router';

const enhancer = compose(
  applyMiddleware(thunk),
  // devTools({
  //   name: Platform.OS,
  //   hostname: 'localhost',
  //   port: 5678,
  // }),
);
const store = createStore(initReducers(), enhancer);

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;

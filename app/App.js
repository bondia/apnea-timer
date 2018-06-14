import React from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

import { initReducers } from './main/redux/reducers';
import Router from './Router';

const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
        name: Platform.OS,
        hostname: 'localhost',
        port: 5678
    })
);
const store = createStore(initReducers(), enhancer);

export default class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

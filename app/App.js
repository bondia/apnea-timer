import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { initReducers } from './main/redux/reducers';
import Router from './Router';

const store = createStore(initReducers(), applyMiddleware(thunk));

export default class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store} >
                <Router />
            </Provider>
        );
    }
}

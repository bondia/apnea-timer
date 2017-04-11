import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { appReducers } from './main'
import Router from './Router'

const store = createStore(appReducers, applyMiddleware(thunk))

export default class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store} >
                <Router />
            </Provider>
        )
    }
}

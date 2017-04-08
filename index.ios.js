import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './app/reducers'
import Navigation from './app/components/Navigation/Navigation.js'

const store = createStore(reducers, applyMiddleware(thunk))

export default class TimerApp extends Component {
    render() {
        return (
            <Provider store={store} >
                <Navigation />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('timer', () => TimerApp)

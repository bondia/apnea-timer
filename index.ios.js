import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './app/reducers'

import TrainingTable from './app/components/TrainingTable/TrainingTable.js'

const store = createStore(reducers, applyMiddleware(thunk))

export default class TimerApp extends Component {
    render() {
        return (
            <Provider store={store} >
                <TrainingTable />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('timer', () => TimerApp)

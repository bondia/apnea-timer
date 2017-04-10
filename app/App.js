import React from 'react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Scene, Router} from 'react-native-router-flux'

import MainScene from './main/components/MainScene'
import TrainingTable from './creator/components/TrainingTable'

import { appReducers, routesEnum } from './main'

const store = createStore(appReducers, applyMiddleware(thunk))

export default class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store} >
                <Router>
                    <Scene key={routesEnum.ROOT}>

                        <Scene  key={routesEnum.MAIN_SCENE}
                                component={MainScene}
                                title="My App"
                                initial={true}
                                />

                        <Scene  key={routesEnum.CONFIGURE_SCENE}
                                component={TrainingTable}
                                title="Train"
                                />

                    </Scene>
                </Router>
            </Provider>
        )
    }
}

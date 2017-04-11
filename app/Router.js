import React from 'react'

import { Router, Scene } from 'react-native-router-flux'
import { routesEnum } from './main'

import MainScene from './main/components/MainScene'
import TrainingTable from './creator/components/TrainingTable'

export default class AppRouter extends React.PureComponent {
    render() {
        return (
            <Router>
                <Scene key={routesEnum.ROOT}>

                    <Scene  key={routesEnum.MAIN_SCENE}
                            component={MainScene}
                            title="My App"
                            initial={true}
                            />

                    <Scene  key={routesEnum.CONFIGURE_SCENE}
                            component={TrainingTable}
                            title="Training Table Creator"
                            />

                </Scene>
            </Router>
        )
    }
}

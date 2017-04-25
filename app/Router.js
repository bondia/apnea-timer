import React from 'react'

import { Router, Scene, ActionConst } from 'react-native-router-flux'
import { routesEnum } from './main'

import MainScene from './main/components/MainScene'
import EditorScene from './editor/components/EditorScene'
import CronoScene from './crono/components/CronoScene'

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

                    <Scene  key={routesEnum.CREATE_TABLE_SCENE}
                            component={EditorScene}
                            title="Training Table Editor"
                            />

                    <Scene  key={routesEnum.CRONO_SCENE}
                            component={CronoScene}
                            title="Crono"
                            type={ActionConst.REPLACE}
                            hideNavBar
                            />

                </Scene>
            </Router>
        )
    }
}

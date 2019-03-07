import React from 'react';

import { Router, Scene, ActionConst } from 'react-native-router-flux';
import { routesEnum } from './main/enums/routes';

import MainScene from './main/components/MainScene';
import EditorScene from './editor/components/EditorScene';
import EditorEnduranceScene from './editor/components/EditorEnduranceScene';
import CronoScene from './crono/components/CronoScene';

export default class AppRouter extends React.PureComponent {
    render() {
        return (
            <Router>
                <Scene key={routesEnum.ROOT}>

                    <Scene  key={routesEnum.MAIN_SCENE}
                            component={MainScene}
                            title="Apnea"
                            initial
                            />

                    <Scene  key={routesEnum.CREATE_TABLE_SCENE}
                            component={EditorScene}
                            title="CO2/O2"
                            />

                    <Scene  key={routesEnum.CRONO_SCENE}
                            component={CronoScene}
                            title="Crono"
                            type={ActionConst.REPLACE}
                            hideNavBar
                            />

                    <Scene  key={routesEnum.ENDURANCE_TABLE_SCENE}
                            component={EditorEnduranceScene}
                            title="16x60m"
                            />
                </Scene>
            </Router>
        );
    }
}

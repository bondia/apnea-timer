import React from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';

import * as routesEnum from './main/enums/routes';

import MainScene from './main/components/MainScene';
import StaticEditorScene from './editor-static/components/StaticEditorScene';
import EditorEnduranceScene from './editor-endurance/components/EditorEnduranceScene';
import CronoScene from './crono/components/CronoScene';

interface AppRouterProps { }

export default function AppRouter(props: AppRouterProps): JSX.Element {
    return (
        <Router>
            <Scene key={routesEnum.ROOT}>
                <Scene
                    key={routesEnum.MAIN_SCENE}
                    component={MainScene}
                    title="Apnea"
                    initial
                />

                <Scene
                    key={routesEnum.CREATE_TABLE_SCENE}
                    component={StaticEditorScene}
                    title="CO2/O2"
                />

                <Scene
                    key={routesEnum.CRONO_SCENE}
                    component={CronoScene}
                    title="Crono"
                    type={ActionConst.REPLACE}
                    hideNavBar
                />

                <Scene
                    key={routesEnum.ENDURANCE_TABLE_SCENE}
                    component={EditorEnduranceScene}
                    title="Endurance"
                />

                <Scene
                    key={routesEnum.SCHEDULE_SCENE}
                    component={EditorEnduranceScene}
                    title="Schedule"
                />
            </Scene>
        </Router>
    );
}

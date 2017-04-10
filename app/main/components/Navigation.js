import React, { Component } from 'react'
import { View, Text, Navigator, TouchableHighlight } from 'react-native'

import TrainingTable from 'app/components/TrainingTable/TrainingTable'
import MainScene, { mainSceneRoute } from './MainScene'

export default class Navigation extends Component {

    render() {
        return (
            <Navigator
                initialRoute={mainSceneRoute}
                // initialRouteStack={routes}
                navigationBar={this.renderNavigationBar()}
                configureScene={this.configureScene}
                renderScene={this.renderScene.bind(this)}
                />
        )
    }

    //--------------------------------
    //  NAVIGATION BAR
    //--------------------------------

    renderNavigationBar() {
        return (
            <Navigator.NavigationBar
                routeMapper={{
                    Title: this.renderTitle,
                    LeftButton: this.renderLeftButton,
                    RightButton: this.renderRightButton,
                }}
                style={{
                    backgroundColor: 'powderblue',
             }}
                />
        )
    }

    renderTitle(route, navigator, index, navState) {
        return (
            <View style={{ paddingTop: 6 }}>
                <Text style={{ fontFamily: 'futura', fontSize: 20 }}>
                    {route.title}
                </Text>
            </View>
        )
    }

    renderLeftButton(route, navigator, index, navState) {
        if (navigator.getCurrentRoutes().length <= 1) {
            return null;
        }
        return (
            <TouchableHighlight style={{ paddingTop: 8 }}
                                onPress={() => navigator.pop()}
                                >
                <Text>Back</Text>
            </TouchableHighlight>
        )
    }

    renderRightButton(route, navigator, index, navState) {
        // return <View style={{ paddingTop: 12, paddingRight: 20 }}><Text>Done</Text></View>
        return null;
    }

    //--------------------------------
    //  SCENE
    //--------------------------------

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight
    }

    renderScene(route, navigator) {
        const RouteComponent = route.component
        return (
            <View style={{ flex: 1, marginTop: 64 }}>
                <RouteComponent navigator={navigator} />
            </View>
        )
                // <TouchableHighlight
                //     onPress={() => {
                //         if (route.index === 0) {
                //             navigator.push(routes[1])
                //         } else {
                //             navigator.pop()
                //         }
                //     }}
                //     >
                //     <Text>route</Text>
                // </TouchableHighlight>
    }
}

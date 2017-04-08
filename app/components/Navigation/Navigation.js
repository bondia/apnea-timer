import React, { Component } from 'react'
import { View, Text, Navigator, TouchableHighlight } from 'react-native'

import TrainingTable from '../TrainingTable/TrainingTable.js'

export default class Navigation extends Component {

    getRoutes() {
        return [
            { index: 0, getComponent: () => TrainingTable },
            { index: 1, getComponent: () => TrainingTable },
        ]
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight
    }

    render() {
        const routes = this.getRoutes()

        return (
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                navigationBar={this.renderNavigationBar()}
                configureScene={this.configureScene}
                renderScene={this.renderScene.bind(this)}
                />
        )
    }

    renderNavigationBar() {
        return (
            <Navigator.NavigationBar
                routeMapper={{
                    Title: this.renderTitle,
                    LeftButton: this.renderLeftButton,
                    RightButton: this.renderRightButton,
                }}
                style={{
                    backgroundColor: 'powderblue'
                }}
                />
        )
    }

    renderTitle(route, navigator, index, navState) {
        return (<Text>Bon dia</Text>)
    }

    renderLeftButton(route, navigator, index, navState) {
        if (route.index === 0) {
            return null
        } else {
            return (
                <TouchableHighlight onPress={() => navigator.pop()}>
                    <Text>Back</Text>
                </TouchableHighlight>
            )
        }
    }

    renderRightButton(route, navigator, index, navState) {
        return (<Text>Done</Text>)
    }

    renderScene(route, navigator) {
        const routes = this.getRoutes()
        const RouteComponent = route.getComponent()
        return (
            <View style={{
                    flex: 1,
                    marginTop: 64
                  }}>
                <RouteComponent />
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

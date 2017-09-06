import React from 'react'
import { View, StyleSheet } from 'react-native'

import { routesEnum } from '../enums/routes'
import { Actions } from 'react-native-router-flux'
import { COLOR_LIGHT, COLOR_NORMAL, COLOR_DARK } from 'app/common/styles/commonStyles'

import MenuItem from './MenuItem'

// http://www.colourlovers.com/palette/459707/brightly_to_nightly
class Menu extends React.PureComponent {

    handleNavigate(type) {
        if (Actions[type]) {
            Actions[type]()
        }
    }

    render() {
        const { style } = this.props
        return (
            <View style={[ style, styles.mainStyles ]}>

                <MenuItem   title="Training Table Editor"
                            type={routesEnum.CREATE_TABLE_SCENE}
                            onPress={this.handleNavigate.bind(this)}
                            style={{ backgroundColor: COLOR_LIGHT }}
                            />

                <MenuItem   title="My Tables"
                            type={routesEnum.MY_TABLES_SCENE}
                            onPress={this.handleNavigate.bind(this)}
                            style={{ backgroundColor: COLOR_NORMAL }}
                            />

                <MenuItem   title="History"
                            type={routesEnum.HISTORY_SCENE}
                            onPress={this.handleNavigate.bind(this)}
                            style={{ backgroundColor: COLOR_DARK }}
                            />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainStyles: {
        flex: 1
    },

    rowStyles: {
        flex: 1
    }
})

export default Menu

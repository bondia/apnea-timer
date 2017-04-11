import React from 'react'
import { View, ScrollView } from 'react-native'

import { routesEnum } from '../enums/routes'
import { Actions } from 'react-native-router-flux'

import MenuItem from './MenuItem'

// http://www.colourlovers.com/palette/459707/brightly_to_nightly
class Menu extends React.PureComponent {

    handleNavigate(type) {
        if (Actions[type]) {
            Actions[type]()
        }
    }

    render() {
        return (
            <View style={{ ...this.props.style, ...paneStyles }}>
                <ScrollView>
                    <View style={rowStyles}>

                        <MenuItem   title="Training Table Creator"
                                    type="CONFIGURE_SCENE"
                                    onPress={this.handleNavigate.bind(this)}
                                    style={{ backgroundColor: '#008EE6' }}
                                    />

                        <MenuItem   title="My Tables"
                                    type="MY_TABLES_SCENE"
                                    onPress={this.handleNavigate.bind(this)}
                                    style={{ backgroundColor: '#0084D6' }}
                                    />

                        <MenuItem   title="History"
                                    type="HISTORY_SCENE"
                                    onPress={this.handleNavigate.bind(this)}
                                    style={{ backgroundColor: '#0070B5' }}
                                    />

                    </View>
                </ScrollView>
            </View>
        )
    }
}
const paneStyles = {
    flex: 1,
}

const rowStyles = {
    flex: 1,
    backgroundColor: 'red'
}

export default Menu

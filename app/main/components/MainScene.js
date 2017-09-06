import React from 'react'
import { StyleSheet } from 'react-native'

import { routesEnum } from '../enums/routes'
import { HEADER_HEIGHT } from '../styles/commonStyles'

import Menu from './Menu'

class MainScene extends React.PureComponent {

    render() {
        return (
            <Menu style={styles.main} />
        )
    }
}

const styles = StyleSheet.create({
    main: {
        marginTop: HEADER_HEIGHT,
    }
})

export default MainScene

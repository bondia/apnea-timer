import React from 'react'
import { StyleSheet } from 'react-native'

import CronoPane from './CronoPane'
import { HEADER_HEIGHT } from 'app/common/styles/commonStyles'

export default class CreatorScene extends React.PureComponent {

    render() {
        const { crono } = this.props
        return (
            <CronoPane  crono={crono}
                        style={styles.main}
                        />
        )
    }
}

const styles = StyleSheet.create({
    main: {
        padding: 10,
        height: '100%'
    }
})

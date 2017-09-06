import React from 'react'
import { StyleSheet } from 'react-native'

import TrainingTable from './TrainingTable'

import { HEADER_HEIGHT } from 'app/common/styles/commonStyles'

export default class CreatorScene extends React.PureComponent {

    render() {
        return (
            <TrainingTable style={styles} {...this.props} />
        )
    }
}

const styles = StyleSheet.create({
    marginTop: HEADER_HEIGHT,
    flex: 1,
    padding: 2,
})

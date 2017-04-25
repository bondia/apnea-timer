import React from 'react'

import { ScrollView } from 'react-native'
import TrainingTable from './TrainingTable'

export default class CreatorScene extends React.PureComponent {

    render() {
        return (
            <TrainingTable {...this.props} />
        )
    }
}


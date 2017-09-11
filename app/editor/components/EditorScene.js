import React from 'react'
import { StyleSheet } from 'react-native'

import EditorPane from './EditorPane'
import { HEADER_HEIGHT } from 'app/common/styles/commonStyles'

export default class EditorScene extends React.PureComponent {

    render() {
        return (
            <EditorPane style={styles.main} />
        )
    }
}

const styles = StyleSheet.create({
    main: {
        marginTop: HEADER_HEIGHT,
        padding: 10,
        height: '100%'
    }
})

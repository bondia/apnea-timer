import React from 'react'
import { Text, StyleSheet } from 'react-native'

import * as common from 'app/main/styles/commonStyles'

export default class TextComponent extends React.PureComponent {

    render() {
        return (
            <Text { ...this.props } style={[ styles.text, this.props.style]}>
                {this.props.children}
            </Text>
        )
    }

}

const styles = StyleSheet.create({

    text: {
        fontSize: common.FONT_SIZE_M,
        fontFamily: common.FONT_FAMILY,
    }

})

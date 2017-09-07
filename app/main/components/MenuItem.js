import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableHighlight, StyleSheet } from 'react-native'
import TextComponent from 'app/common/components/TextComponent'
import { FONT_COLOR_LIGHT } from 'app/common/styles/commonStyles'

class MenuItem extends React.PureComponent {

    static propTypes = {
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
    }

    render() {
        const { title, type, onPress, style } = this.props
        return (
            <TouchableHighlight onPress={() => onPress(type)}
                                style={[ style, styles.touchableStyles ]}
                                >
                <View>
                    <TextComponent style={ styles.baseStyles }>
                        {title}
                    </TextComponent>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    touchableStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    baseStyles: {
        fontSize: 30,
        color: FONT_COLOR_LIGHT,
        textAlign: 'center',
        alignItems:'center'
    }
})


export default MenuItem

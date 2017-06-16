import React from 'react'
import { Text, TouchableHighlight } from 'react-native'

class MenuItem extends React.PureComponent {

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        onPress: React.PropTypes.func.isRequired,
    }

    render() {
        const { title, type, onPress, style } = this.props
        return (
            <TouchableHighlight onPress={() => onPress(type)}
                                style={{ ...style, ...touchableStyles }}
                                >
                <Text style={ baseStyles }>
                    {title}
                </Text>
            </TouchableHighlight>
        )
    }
}

const touchableStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height: '100%'
}

const baseStyles = {
    fontSize: 30,
    color: 'azure',
    textAlign: 'center',
    fontFamily: 'futura',
    alignItems:'center'
}

export default MenuItem

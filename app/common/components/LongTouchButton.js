import React from 'react'
import { StyleSheet, Animated, View, Text, TouchableWithoutFeedback } from 'react-native'

export default class LongTouchButton extends React.PureComponent {

    static propTypes = {
        title: React.PropTypes.string.isRequired,
    };

    static defaultProps = {
        title: 'Press Me',
    };

    componentWillMount() {
        this.timer = null;
    }

    handlePressIn() {
        this.timer = setInterval(this.handleInterval.bind(this), 500)
    }

    handleInterval() {
        this.props.onPressLong();
        clearInterval(this.timer);
        this.timer = setInterval(this.handleInterval.bind(this), 200)
    }

    handlePressOut() {
        clearInterval(this.timer);
        this.timer = null;
        this.props.onPress();
    }

    render() {
        const { title } = this.props
        return (
            <View style={[ this.props.style, styles.container ]}>

                <TouchableWithoutFeedback   onPressIn={this.handlePressIn.bind(this)}
                                            onPressOut={this.handlePressOut.bind(this)}
                                            >

                    <View style={styles.button}>
                        <Text style={styles.text}>
                            {title}
                        </Text>
                    </View>

                </TouchableWithoutFeedback>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: { },
    button: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#111',
        margin: 5
    },
    text: {
        backgroundColor: 'transparent',
        color: '#111',
        textAlign: 'center',
        fontSize: 20
    }
});


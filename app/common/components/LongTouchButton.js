import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { FONT_CLOLR_GREY_LIGHT, COLOR_LIGHT } from 'app/common/styles/commonStyles';

export default class LongTouchButton extends React.PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        active: PropTypes.bool
    };

    static defaultProps = {
        title: 'Press Me',
        active: false
    };

    componentWillMount() {
        this.timer = null;
    }

    handlePressIn() {
        this.props.onPress();
    }

    handleLongPress() {
        // handle press
        this.props.onPressLong();
        // init new interval
        clearInterval(this.timer);
        this.timer = setInterval(this.handleLongPress.bind(this), 100);
    }

    handlePressOut() {
        // clear interval
        clearInterval(this.timer);
        this.timer = null;
    }

    render() {
        const { title, active } = this.props;
        return (
            <View style={[this.props.style, baseStyles.container]}>
                <TouchableHighlight
                    onPressIn={this.handlePressIn.bind(this)}
                    onLongPress={this.handleLongPress.bind(this)}
                    onPressOut={this.handlePressOut.bind(this)}
                    underlayColor={FONT_CLOLR_GREY_LIGHT}
                >
                    <View style={active ? [baseStyles.button, baseStyles.active] : baseStyles.button}>
                        <Text style={baseStyles.text}>{title}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const baseStyles = StyleSheet.create({
    container: {},
    button: {
        padding: 20,
        backgroundColor: FONT_CLOLR_GREY_LIGHT,
        borderRadius: 3,
        margin: 5
    },
    text: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 20
    },
    active: {
        backgroundColor: COLOR_LIGHT
    }
});

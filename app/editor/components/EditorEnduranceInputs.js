import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { bindActionCreators } from 'redux';

import * as editorActions from '../redux/editorActions';

import {
    FONT_COLOR_GREY,
    FONT_SIZE_L,
    COLOR_LIGHT,
} from 'app/common/styles/commonStyles';
import secondsToTimeString from 'app/common/utils/time/secondsToTimeString';

import TextComponent from 'app/common/components/TextComponent';
import LongTouchButton from 'app/common/components/LongTouchButton';

class EditorEnduranceInputs extends React.PureComponent {
    static propTypes = {
        editor: ImmutablePropTypes.map.isRequired
    };

    handleBaseDecrease(amount) {
        const { editor, editorActions } = this.props;
        editorActions.changeTableBase(editor.getIn(['trainingTable', 'base']) - amount);
    }

    handleBaseIncrease(amount) {
        const { editor, editorActions } = this.props;
        editorActions.changeTableBase(editor.getIn(['trainingTable', 'base']) + amount);
    }

    handleBaseBreakDecrease(amount) {
        const { editor, editorActions } = this.props;
        editorActions.changeTableBaseBreaks(editor.getIn(['trainingTable', 'baseBreaks']) - amount);
    }

    handleBaseBreakIncrease(amount) {
        const { editor, editorActions } = this.props;
        editorActions.changeTableBaseBreaks(editor.getIn(['trainingTable', 'baseBreaks']) + amount);
    }

    render() {
        const self = this;
        const { editor } = this.props;
        const base = editor.getIn(['trainingTable', 'base']);
        const baseBreaks = editor.getIn(['trainingTable', 'baseBreaks']);
        const totalTime = editor.getIn(['trainingTable', 'duration']);

        return (
            <View
                style={[
                    this.props.style,
                    baseStyles.wrapper
                ]}
            >
                <View style={baseStyles.headerBlock}>
                    <TextComponent style={baseStyles.headerLabel}>Announced Performance</TextComponent>
                    <View style={baseStyles.container}>
                        <TextComponent style={baseStyles.headerText}>{secondsToTimeString(totalTime)}</TextComponent>
                    </View>
                </View>

                <View style={baseStyles.headerBlock}>
                    <TextComponent style={baseStyles.headerLabel}>Dive Time</TextComponent>
                    <View style={baseStyles.container}>
                        <LongTouchButton
                            title="-"
                            onPress={() => self.handleBaseDecrease(1)}
                            onPressLong={() => self.handleBaseDecrease(5)}
                            style={baseStyles.button}
                        />

                        <TextComponent style={baseStyles.headerText}>{secondsToTimeString(base)}</TextComponent>

                        <LongTouchButton
                            title="+"
                            onPress={() => self.handleBaseIncrease(1)}
                            onPressLong={() => self.handleBaseIncrease(5)}
                            style={baseStyles.button}
                        />
                    </View>
                </View>


                <View style={baseStyles.headerBlock}>
                    <TextComponent style={baseStyles.headerLabel}>Breaks</TextComponent>
                    <View style={baseStyles.container}>
                        <LongTouchButton
                            title="-"
                            onPress={() => self.handleBaseBreakDecrease(1)}
                            onPressLong={() => self.handleBaseBreakDecrease(5)}
                            style={baseStyles.button}
                        />

                        <TextComponent style={baseStyles.headerText}>{secondsToTimeString(baseBreaks)}</TextComponent>

                        <LongTouchButton
                            title="+"
                            onPress={() => self.handleBaseBreakIncrease(1)}
                            onPressLong={() => self.handleBaseBreakIncrease(5)}
                            style={baseStyles.button}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const baseStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-start',
    },

    headerBlock: {
        height: 150,
            justifyContent: 'center',
    },

    headerLabel: {
        textAlign: 'center',
        color: FONT_COLOR_GREY
    },

    headerText: {
        textAlign: 'center',
        fontSize: FONT_SIZE_L,
        color: COLOR_LIGHT,
        flex: 2,
        paddingTop: 20,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%'
    },

    button: {
        flex: 1
    },
});

const dispatchToProps = dispatch => {
    return { editorActions: bindActionCreators(editorActions, dispatch) };
};

export default connect(null, dispatchToProps)(EditorEnduranceInputs);


import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import * as enums from '../enums';
import * as editorActions from '../redux/editorActions';

import LongTouchButton from 'app/common/components/LongTouchButton';

class TableTypeInput extends React.PureComponent {
    static propTypes = {
        editorActions: PropTypes.object.isRequired,
        editor: ImmutablePropTypes.map.isRequired
    };

    handleO2() {
        const { editor, editorActions } = this.props;
        const type = editor.getIn(['trainingTable', 'type']);
        const base = editor.getIn(['trainingTable', 'base']);
        if (type !== enums.TABLE_TYPE_O2) {
            editorActions.changeTableType(base, enums.TABLE_TYPE_O2);
        }
    }

    handleCO2() {
        const { editor, editorActions } = this.props;
        const type = editor.getIn(['trainingTable', 'type']);
        const base = editor.getIn(['trainingTable', 'base']);
        if (type !== enums.TABLE_TYPE_CO2) {
            editorActions.changeTableType(base, enums.TABLE_TYPE_CO2);
        }
    }

    handleFree() {
        const { editor, editorActions } = this.props;
        const type = editor.getIn(['trainingTable', 'type']);
        const base = editor.getIn(['trainingTable', 'base']);
        if (type !== enums.TABLE_TYPE_FREE) {
            editorActions.changeTableType(base, enums.TABLE_TYPE_FREE);
        }
    }

    render() {
        const self = this;
        const { editor } = this.props;
        const type = editor.getIn(['trainingTable', 'type']);
        return (
            <View style={[this.props.style, baseStyles.container]}>
                <LongTouchButton
                    title="CO2"
                    onPressStart={() => self.handleCO2()}
                    active={enums.TABLE_TYPE_CO2 === type}
                    style={baseStyles.button}
                />

                <LongTouchButton
                    title="O2"
                    onPressStart={() => self.handleO2()}
                    active={enums.TABLE_TYPE_O2 === type}
                    style={baseStyles.button}
                />

                <LongTouchButton
                    title="Free"
                    onPressStart={() => self.handleFree()}
                    active={enums.TABLE_TYPE_FREE === type}
                    style={baseStyles.button}
                />
            </View>
        );
    }
}

const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    button: {
        flex: 1
    }
});

const stateToProps = state => {
    return { editor: state.editor };
};

const dispatchToProps = dispatch => {
    return { editorActions: bindActionCreators(editorActions, dispatch) };
};

export default connect(stateToProps, dispatchToProps)(TableTypeInput);

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { bindActionCreators } from 'redux';

import * as editorActions from '../../redux/editorActions';

import EditorEnduranceInputs from './EditorEnduranceInputs';
import StartButton from '../Common/StartButton';

class EditorEndurancePane extends React.PureComponent {
    static propTypes = {
        editor: ImmutablePropTypes.map
    };

    componentDidMount() {
        const { editor, editorActions } = this.props;
        if (editor === null) {
            editorActions.createEnduranceTable(35, 35, 8);
        }
    }

    render() {
        const { editor } = this.props;
        if (editor === null) {
            return null;
        }
        const crono = editor.update('sets', sets => sets.filter(s => !s.get('zombie')));

        return (
            <View style={baseStyles.main}>
                <EditorEnduranceInputs editor={editor} />
                <StartButton data={crono} />
            </View>
        );
    }
}

const baseStyles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10
    }
});

const stateToProps = state => {
    return {
        editor: state.editor
    };
};

const dispatchToProps = dispatch => {
    return { editorActions: bindActionCreators(editorActions, dispatch) };
};

export default connect(
    stateToProps,
    dispatchToProps
)(EditorEndurancePane);

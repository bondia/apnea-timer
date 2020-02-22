import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/native';

import * as editorActions from '../../editor/redux/editorActions';
import { ImmutableJSEditorType, ImmutableJSEditorSetType, EditorActionsTypes } from '../../editor/redux/editorTypes';
import EnduranceForm from './EnduranceForm';
import StartButton from '../../editor/components/Common/StartButton';

interface EditorEnudrancePaneProps {
    editor: ImmutableJSEditorType;
    editorActions: EditorActionsTypes;
}

function EditorEndurancePane(props: EditorEnudrancePaneProps): JSX.Element {
    const { editor, editorActions } = props;

    useEffect(() => {
        if (editor === null) {
            editorActions.createEnduranceTable(35, 35, 8);
        }
    }, [ editor, editorActions ]);

    if (editor === null) {
        return null;
    }

    const crono = editor.update('sets',
        (sets: ImmutableJSEditorSetType[]) => sets.filter(s => !s.get('zombie'))
    );

    return (
        <Wrapper>
            <EnduranceForm editor={editor} />
            <StartButton data={crono} />
        </Wrapper>
    );
}

// STYLES

export const Wrapper = styled.View`
    flex: 1;
    padding: 10px;
`;

// REDUX

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

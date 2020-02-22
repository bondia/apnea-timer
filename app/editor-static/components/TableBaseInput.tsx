import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import * as editorActions from '../../editor/redux/editorActions';

import LongTouchButton from '../../common/components/LongTouchButton';

interface TableBaseInputProps {
    editor: ImmutableJSEditor;
    editorActions: EditorActions;
}

function TableBaseInput(props: TableBaseInputProps): JSX.Element {
    const {
        editor,
        editorActions
    } = props;

    const base = editor.getIn(['trainingTable', 'base']);
    const { changeTableBase } = editorActions;

    return (
        <ButtonsSet>
            <LongTouchButton
                title="-"
                onPressStart={() => changeTableBase(base - 1)}
                onPressInterval={() => changeTableBase(base - 5)}
            />
            <LongTouchButton
                title="+"
                onPressStart={() => changeTableBase(base + 1)}
                onPressInterval={() => changeTableBase(base + 5)}
            />
        </ButtonsSet>
    );
}

export const ButtonsSet = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const ButtonWrapper = styled.View`
    flex: 1;
`;

/**
 * TODO: Remove immutable js
 */
interface ImmutableJSEditor {
    getIn: (stack: string[]) => any;
}

type changeTableBase = (amount: number) => void;
interface EditorActions {
    changeTableBase: changeTableBase;
}

const stateToProps = state => {
    return { editor: state.editor };
};

const dispatchToProps = dispatch => {
    return { editorActions: bindActionCreators(editorActions, dispatch) };
};

export default connect(stateToProps, dispatchToProps)(TableBaseInput);

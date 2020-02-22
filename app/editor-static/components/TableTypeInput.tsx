import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import * as enums from '../../editor/enums';
import * as editorActions from '../../editor/redux/editorActions';

import LongTouchButton from '../../common/components/LongTouchButton';

interface TableBaseInputProps {
    editor: ImmutableJSEditor;
    editorActions: EditorActions;
}

function TableTypeInput(props: TableBaseInputProps): JSX.Element {
    const {
        editor,
        editorActions
    } = props;

    const {
        changeTableType,
    } = editorActions;
    const type = editor.getIn(['trainingTable', 'type']);
    const base = editor.getIn(['trainingTable', 'base']);

    const changeType = (newType: string) => {
        if (type !== newType) {
            changeTableType(base, newType);
        }
    }

    return (
        <ButtonsSetWrapper>
            <LongTouchButton
                title="CO2"
                onPressStart={() => changeType(enums.TABLE_TYPE_CO2)}
                active={enums.TABLE_TYPE_CO2 === type}
            />

            <LongTouchButton
                title="O2"
                onPressStart={() => changeType(enums.TABLE_TYPE_O2)}
                active={enums.TABLE_TYPE_O2 === type}
            />

            <LongTouchButton
                title="Free"
                onPressStart={() => changeType(enums.TABLE_TYPE_FREE)}
                active={enums.TABLE_TYPE_FREE === type}
            />
        </ButtonsSetWrapper>
    );
}

/**
 * TYPES
 * TODO: Remove immutable js
 */

interface ImmutableJSEditor {
    getIn: (stack: string[]) => any;
}

type ChangeTableType = (base: number, type: string) => void;
interface EditorActions {
    changeTableType: ChangeTableType;
}

/**
 * STYLES
 */

export const ButtonsSetWrapper = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

/**
 * REDUX
 */

const stateToProps = state => {
    return { editor: state.editor };
};

const dispatchToProps = dispatch => {
    return { editorActions: bindActionCreators(editorActions, dispatch) };
};

export default connect(stateToProps, dispatchToProps)(TableTypeInput);

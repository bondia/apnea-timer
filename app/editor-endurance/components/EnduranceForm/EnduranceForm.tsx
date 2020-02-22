import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as editorActions from '../../../editor/redux/editorActions';
import { ImmutableJSEditorType, EditorActionsTypes } from '../../../editor/redux/editorTypes';
import secondsToTimeString from '../../../common/utils/time/secondsToTimeString';

import * as SC from './EnduranceForm.styled';
import { FONT_COLOR_GREY, FONT_SIZE_L, COLOR_LIGHT } from '../../../common/styles/commonStyles';
import TextComponent from '../../../common/components/TextComponent';
import LongTouchButton from '../../../common/components/LongTouchButton';

interface EditorEnduranceProps {
    editor: ImmutableJSEditorType;
    editorActions: EditorActionsTypes;
}

function EditorEnduranceInputs(props: EditorEnduranceProps): JSX.Element {
    const { editor, editorActions } = props;
    const enduranceLaps = editor.getIn(['trainingTable', 'enduranceLaps']);
    const base = editor.getIn(['trainingTable', 'base']);
    const baseBreaks = editor.getIn(['trainingTable', 'baseBreaks']);
    const totalTime = editor.getIn(['trainingTable', 'duration']);
    return (
        <SC.MainWrapper>
            <SC.Block>
                <TextComponent style={baseStyles.headerLabel}>
                    Announced Performance
                </TextComponent>
                <SC.RowContainer>
                    <TextComponent style={baseStyles.headerText}>
                        {secondsToTimeString(totalTime)}
                    </TextComponent>
                </SC.RowContainer>
            </SC.Block>

            <ScrollView>
                <SC.Block>
                    <TextComponent style={baseStyles.headerLabel}>Laps</TextComponent>

                    <SC.RowContainer>
                        <LongTouchButton
                            title="-"
                            onPressStart={() => handleAction({
                                original: enduranceLaps,
                                increase: -1,
                                dispatchAction: editorActions.changeEnduranceLaps,
                            })}
                        />

                        <TextComponent style={baseStyles.headerText}>{enduranceLaps}</TextComponent>

                        <LongTouchButton
                            title="+"
                            onPressStart={() => handleAction({
                                original: enduranceLaps,
                                increase: 1,
                                dispatchAction: editorActions.changeEnduranceLaps,
                            })}
                            />
                    </SC.RowContainer>
                </SC.Block>

                <SC.Block>
                    <TextComponent style={baseStyles.headerLabel}>Dive Time</TextComponent>
                    <SC.RowContainer>
                        <LongTouchButton
                            title="-"
                            onPressStart={() => handleAction({
                                original: base,
                                increase: -1,
                                dispatchAction: editorActions.changeTableBase,
                            })}
                            onPressInterval={() => handleAction({
                                original: base,
                                increase: -5,
                                dispatchAction: editorActions.changeTableBase,
                            })}
                            />

                        <TextComponent style={baseStyles.headerText}>
                            {secondsToTimeString(base)}
                        </TextComponent>

                        <LongTouchButton
                            title="+"
                            onPressStart={() => handleAction({
                                original: base,
                                increase: 1,
                                dispatchAction: editorActions.changeTableBase,
                            })}
                            onPressInterval={() => handleAction({
                                original: base,
                                increase: 5,
                                dispatchAction: editorActions.changeTableBase,
                            })}
                            />
                    </SC.RowContainer>
                </SC.Block>

                <SC.Block>
                    <TextComponent style={baseStyles.headerLabel}>Breaks</TextComponent>
                    <SC.RowContainer>
                        <LongTouchButton
                            title="-"
                            onPressStart={() => handleAction({
                                original: baseBreaks,
                                increase: -1,
                                dispatchAction: editorActions.changeTableBaseBreaks,
                            })}
                            onPressInterval={() => handleAction({
                                original: baseBreaks,
                                increase: -5,
                                dispatchAction: editorActions.changeTableBaseBreaks,
                            })}
                        />

                        <TextComponent style={baseStyles.headerText}>
                            {secondsToTimeString(baseBreaks)}
                        </TextComponent>

                        <LongTouchButton
                            title="+"
                            onPressStart={() => handleAction({
                                original: baseBreaks,
                                increase: 1,
                                dispatchAction: editorActions.changeTableBaseBreaks,
                            })}
                            onPressInterval={() => handleAction({
                                original: baseBreaks,
                                increase: 5,
                                dispatchAction: editorActions.changeTableBaseBreaks,
                            })}
                        />
                    </SC.RowContainer>
                </SC.Block>
            </ScrollView>
        </SC.MainWrapper>
    );
}

/**
 * Handle action to dispatch
 */

interface HandleActionParams {
    original: number;
    increase: number;
    dispatchAction:
        editorActions.ChangeEnduranceLapsType |
        editorActions.ChangeTableBaseType |
        editorActions.ChangeTableBaseBreaksType;
}

function handleAction(params: HandleActionParams): void {
    const { original, increase, dispatchAction } = params;
    const newValue = original + increase;
    newValue > 0 && dispatchAction(newValue);
}

/**
 * TODO: Style sheets to be replaced
 */
const baseStyles = StyleSheet.create({
    headerLabel: {
        textAlign: 'center',
        color: FONT_COLOR_GREY,
    },

    headerText: {
        textAlign: 'center',
        fontSize: FONT_SIZE_L,
        color: COLOR_LIGHT,
        flex: 2,
        paddingTop: 20,
    },
});

/**
 * REDUX STORE
 */

const dispatchToProps = dispatch => {
    return { editorActions: bindActionCreators(editorActions, dispatch) };
};

export default connect(
    null,
    dispatchToProps
)(EditorEnduranceInputs);

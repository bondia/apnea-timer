import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { COLOR_LIGHT, FONT_COLOR_GREY, FONT_SIZE } from '../../../../commonStyles';
import LongTouchButton from '../../../../components/LongTouchButton';
import TextComponent from '../../../../components/TextComponent/TextComponent';
import * as editorActions from '../../../../editor/redux/editorActions';
import { EditorActionsTypes, ImmutableJSEditorType } from '../../../../editor/redux/editorTypes';
import secondsToTimeString from '../../../../utils/time/secondsToTimeString';
import * as SC from './EnduranceForm.styled';

/**
 * Handle action to dispatch
 */

interface HandleActionParams {
  original: number;
  increase: number;
  dispatchAction:
    | editorActions.ChangeEnduranceLapsType
    | editorActions.ChangeTableBaseType
    | editorActions.ChangeTableBaseBreaksType;
}

function handleAction(params: HandleActionParams): void {
  const { original, increase, dispatchAction } = params;
  const newValue = original + increase;
  if (newValue > 0) {
    dispatchAction(newValue);
  }
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
    fontSize: FONT_SIZE.FONT_SIZE_L,
    color: COLOR_LIGHT,
    flex: 2,
    paddingTop: 20,
  },
});
interface EditorEnduranceProps {
  editor: ImmutableJSEditorType;
  actions: EditorActionsTypes;
}

const EditorEnduranceInputs: FC<EditorEnduranceProps> = props => {
  const { editor, actions } = props;
  const enduranceLaps = editor.getIn(['trainingTable', 'enduranceLaps']);
  const base = editor.getIn(['trainingTable', 'base']);
  const baseBreaks = editor.getIn(['trainingTable', 'baseBreaks']);
  const totalTime = editor.getIn(['trainingTable', 'duration']);
  return (
    <SC.MainWrapper>
      <SC.Block>
        <TextComponent style={baseStyles.headerLabel}>Announced Performance</TextComponent>
        <SC.RowContainer>
          <TextComponent style={baseStyles.headerText}>{secondsToTimeString(totalTime)}</TextComponent>
        </SC.RowContainer>
      </SC.Block>

      <ScrollView>
        <SC.Block>
          <TextComponent style={baseStyles.headerLabel}>Laps</TextComponent>

          <SC.RowContainer>
            <LongTouchButton
              title="-"
              onPressStart={() =>
                handleAction({
                  original: enduranceLaps,
                  increase: -1,
                  dispatchAction: actions.changeEnduranceLaps,
                })
              }
            />

            <TextComponent style={baseStyles.headerText}>{enduranceLaps}</TextComponent>

            <LongTouchButton
              title="+"
              onPressStart={() =>
                handleAction({
                  original: enduranceLaps,
                  increase: 1,
                  dispatchAction: actions.changeEnduranceLaps,
                })
              }
            />
          </SC.RowContainer>
        </SC.Block>

        <SC.Block>
          <TextComponent style={baseStyles.headerLabel}>Dive Time</TextComponent>
          <SC.RowContainer>
            <LongTouchButton
              title="-"
              onPressStart={() =>
                handleAction({
                  original: base,
                  increase: -1,
                  dispatchAction: actions.changeTableBase,
                })
              }
              onPressInterval={() =>
                handleAction({
                  original: base,
                  increase: -5,
                  dispatchAction: actions.changeTableBase,
                })
              }
            />

            <TextComponent style={baseStyles.headerText}>{secondsToTimeString(base)}</TextComponent>

            <LongTouchButton
              title="+"
              onPressStart={() =>
                handleAction({
                  original: base,
                  increase: 1,
                  dispatchAction: actions.changeTableBase,
                })
              }
              onPressInterval={() =>
                handleAction({
                  original: base,
                  increase: 5,
                  dispatchAction: actions.changeTableBase,
                })
              }
            />
          </SC.RowContainer>
        </SC.Block>

        <SC.Block>
          <TextComponent style={baseStyles.headerLabel}>Breaks</TextComponent>
          <SC.RowContainer>
            <LongTouchButton
              title="-"
              onPressStart={() =>
                handleAction({
                  original: baseBreaks,
                  increase: -1,
                  dispatchAction: actions.changeTableBaseBreaks,
                })
              }
              onPressInterval={() =>
                handleAction({
                  original: baseBreaks,
                  increase: -5,
                  dispatchAction: actions.changeTableBaseBreaks,
                })
              }
            />

            <TextComponent style={baseStyles.headerText}>{secondsToTimeString(baseBreaks)}</TextComponent>

            <LongTouchButton
              title="+"
              onPressStart={() =>
                handleAction({
                  original: baseBreaks,
                  increase: 1,
                  dispatchAction: actions.changeTableBaseBreaks,
                })
              }
              onPressInterval={() =>
                handleAction({
                  original: baseBreaks,
                  increase: 5,
                  dispatchAction: actions.changeTableBaseBreaks,
                })
              }
            />
          </SC.RowContainer>
        </SC.Block>
      </ScrollView>
    </SC.MainWrapper>
  );
};

/**
 * REDUX STORE
 */

const dispatchToProps = dispatch => {
  return { editorActions: bindActionCreators(editorActions, dispatch) };
};

export default connect(null, dispatchToProps)(EditorEnduranceInputs);

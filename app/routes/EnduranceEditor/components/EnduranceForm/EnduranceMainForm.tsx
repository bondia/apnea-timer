import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { COLOR_LIGHT, FONT_COLOR_GREY, FONT_SIZE } from '../../../../commonStyles';
import LongTouchButton from '../../../../components/LongTouchButton';
import TextComponent from '../../../../components/TextComponent/OldTextComponent';
import { ImmutableJSEditorType } from '../../../../modules/editor/redux/editorTypes';
import secondsToTimeString from '../../../../utils/time/secondsToTimeString';
import * as SC from './EnduranceForm.styled';
import {
  ChangeTableBaseBreaksType,
  changeTableBaseBreaks,
} from '../../../../modules/editor/redux/actions/composed/changeTableBaseBreaks';
import { useAppDispatch } from '../../../../redux/hooks';
import { AppDispatch } from '../../../../../App';
import {
  EditorChangeTableBaseAction,
  changeTableBase,
} from '../../../../modules/editor/redux/actions/composed/changeTableBase';
import {
  ChangeEnduranceLapsType,
  changeEnduranceLaps,
} from '../../../../modules/editor/redux/actions/composed/changeEnduranceLaps';

/**
 * Handle action to dispatch
 */

type HandleActionParams = {
  original: number;
  increase: number;
  action: ChangeTableBaseBreaksType | ChangeEnduranceLapsType | EditorChangeTableBaseAction;
};

const handleAction =
  (dispatch: AppDispatch) =>
  (params: HandleActionParams): void => {
    const { original, increase, action } = params;
    const newValue = original + increase;
    if (newValue > 0) {
      dispatch(action(newValue));
    }
  };

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
type EditorEnduranceProps = {
  editor: ImmutableJSEditorType;
};

const EditorEnduranceInputs: FC<EditorEnduranceProps> = props => {
  const dispatch = useAppDispatch();
  const actionHandler = handleAction(dispatch);
  const { editor } = props;
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
                actionHandler({
                  original: enduranceLaps,
                  increase: -1,
                  action: changeEnduranceLaps,
                })
              }
            />

            <TextComponent style={baseStyles.headerText}>{enduranceLaps}</TextComponent>

            <LongTouchButton
              title="+"
              onPressStart={() =>
                actionHandler({
                  original: enduranceLaps,
                  increase: 1,
                  action: changeEnduranceLaps,
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
                actionHandler({
                  original: base,
                  increase: -1,
                  action: changeTableBase,
                })
              }
              onPressInterval={() =>
                actionHandler({
                  original: base,
                  increase: -5,
                  action: changeTableBase,
                })
              }
            />

            <TextComponent style={baseStyles.headerText}>{secondsToTimeString(base)}</TextComponent>

            <LongTouchButton
              title="+"
              onPressStart={() =>
                actionHandler({
                  original: base,
                  increase: 1,
                  action: changeTableBase,
                })
              }
              onPressInterval={() =>
                actionHandler({
                  original: base,
                  increase: 5,
                  action: changeTableBase,
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
                actionHandler({
                  original: baseBreaks,
                  increase: -1,
                  action: changeTableBaseBreaks,
                })
              }
              onPressInterval={() =>
                actionHandler({
                  original: baseBreaks,
                  increase: -5,
                  action: changeTableBaseBreaks,
                })
              }
            />

            <TextComponent style={baseStyles.headerText}>{secondsToTimeString(baseBreaks)}</TextComponent>

            <LongTouchButton
              title="+"
              onPressStart={() =>
                actionHandler({
                  original: baseBreaks,
                  increase: 1,
                  action: changeTableBaseBreaks,
                })
              }
              onPressInterval={() =>
                actionHandler({
                  original: baseBreaks,
                  increase: 5,
                  action: changeTableBaseBreaks,
                })
              }
            />
          </SC.RowContainer>
        </SC.Block>
      </ScrollView>
    </SC.MainWrapper>
  );
};

export default EditorEnduranceInputs;

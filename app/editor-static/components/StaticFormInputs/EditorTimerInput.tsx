import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL, FONT_COLOR_GREY } from '../../../commonStyles';
import LongTouchButton from '../../../components/LongTouchButton';
import TextComponent from '../../../components/TextComponent/OldTextComponent';
import { SetType } from '../../../editor/enums';
import * as editorActions from '../../../editor/redux/editorActions';
import { EditorActionsTypes } from '../../../editor/redux/editorTypes';
import secondsToTimeString from '../../../utils/time/secondsToTimeString';
import * as SC from './EditorTimerInput.styled';

interface EditorTimerInputProps {
  index: number;
  duration?: number;
  type?: string;
  setNumber?: number;
  zombie?: boolean;
  actions: EditorActionsTypes;
}

const EditorTimerInput: FC<EditorTimerInputProps> = props => {
  const { index, duration = 0, type = SetType.SET_TYPE_PREPARE, setNumber = 0, zombie = false, actions } = props;

  let clockColor = SetType.SET_TYPE_PREPARE === type ? COLOR_GREEN_NORMAL : COLOR_RED_NORMAL;
  clockColor = zombie ? FONT_COLOR_GREY : clockColor;

  // TODO: Move to styled with text component
  const styles = StyleSheet.create({
    setNumber: {
      flex: 1,
      textAlign: 'left',
      paddingTop: 33,
      lineHeight: 15,
      fontSize: 15,
      color: FONT_COLOR_GREY,
    },
    clock: {
      paddingTop: 25,
      flex: 3,
      color: clockColor,
      fontSize: 30,
      lineHeight: 30,
      textAlign: 'center',
    },
  });

  return (
    <SC.Container>
      <SC.ButtonWrapper>
        <LongTouchButton
          title="-"
          onPressStart={() => actions.decreaseTimeItem(index, 5)}
          onPressInterval={() => actions.decreaseTimeItem(index, 5)}
        />
      </SC.ButtonWrapper>

      <TextComponent style={styles.clock}>{secondsToTimeString(duration)}</TextComponent>

      <TextComponent style={styles.setNumber}>({setNumber})</TextComponent>

      <SC.ButtonWrapper>
        <LongTouchButton
          title="+"
          onPressStart={() => actions.increaseTimeItem(index, 5)}
          onPressInterval={() => actions.increaseTimeItem(index, 5)}
        />
      </SC.ButtonWrapper>
    </SC.Container>
  );
};

const dispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(editorActions, dispatch),
  };
};

export default connect(null, dispatchToProps)(EditorTimerInput);

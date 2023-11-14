import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL, FONT_COLOR_GREY } from '../../../../commonStyles';
import LongTouchButton from '../../../../components/LongTouchButton';
import TextComponent from '../../../../components/TextComponent/OldTextComponent';
import { SetTypeEnum } from '../../enums';
import secondsToTimeString from '../../../../utils/time/secondsToTimeString';
import * as SC from './EditorTimerInput.styled';
import { useAppDispatch } from '../../../../redux/hooks';
import { decreaseTimeItem, increaseTimeItem } from '../../redux/actions/composed/changeTimeItem';

type EditorTimerInputProps = {
  index: number;
  duration?: number;
  type?: string;
  setNumber?: number;
  zombie?: boolean;
};

const EditorTimerInput: FC<EditorTimerInputProps> = props => {
  const dispatch = useAppDispatch();

  const { index, duration = 0, type = SetTypeEnum.SET_TYPE_PREPARE, setNumber = 0, zombie = false } = props;

  const increase = () => dispatch(increaseTimeItem(index, 5));
  const decrease = () => dispatch(decreaseTimeItem(index, 5));

  let clockColor = SetTypeEnum.SET_TYPE_PREPARE === type ? COLOR_GREEN_NORMAL : COLOR_RED_NORMAL;
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
        <LongTouchButton title="-" onPressStart={decrease} onPressInterval={decrease} />
      </SC.ButtonWrapper>

      <TextComponent style={styles.clock}>{secondsToTimeString(duration)}</TextComponent>

      <TextComponent style={styles.setNumber}>({setNumber})</TextComponent>

      <SC.ButtonWrapper>
        <LongTouchButton title="+" onPressStart={increase} onPressInterval={increase} />
      </SC.ButtonWrapper>
    </SC.Container>
  );
};

export default EditorTimerInput;

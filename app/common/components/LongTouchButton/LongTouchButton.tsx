import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';
import * as SC from './LongTouchButton.styled';
import useLongTouchHandling from './useLongTouchHandling';

interface LongTouchButtonProps {
  title?: string;
  active?: boolean;
  enabled?: boolean;
  onPressStart?: () => void;
  onShortPressEnd?: () => void;
  onLongPressStart?: () => void;
  onLongPressEnd?: () => void;
  onPressInterval?: () => void;
  pressIntervalRefresh?: number;
}

const LongTouchButton: FC<LongTouchButtonProps> = props => {
  // default props
  const {
    title = '-- --',
    active = false,
    enabled = true,
    onPressStart,
    onShortPressEnd,
    onLongPressStart,
    onLongPressEnd,
    onPressInterval,
    pressIntervalRefresh,
  } = props;

  // Attatch Hook for handling long touches
  const { onPressIn, onLongPress, onPressOut } = useLongTouchHandling({
    enabled,
    onPressStart,
    onShortPressEnd,
    onLongPressStart,
    onLongPressEnd,
    onPressInterval,
    pressIntervalRefresh,
  });

  return (
    <SC.LongTouchButtonContainer>
      <TouchableHighlight
        onPressIn={onPressIn}
        onLongPress={onLongPress}
        onPressOut={onPressOut}
        underlayColor="transparent"
      >
        <SC.ButtonWrapper active={active}>
          <SC.ButtonText>{title}</SC.ButtonText>
        </SC.ButtonWrapper>
      </TouchableHighlight>
    </SC.LongTouchButtonContainer>
  );
};

export default LongTouchButton;

import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';
import { Stack } from '../Layout';
import Typography, { TypographyType } from '../Typography/Typography';
import * as SC from './LongTouchButton.styled';
import useLongTouchHandling from './useLongTouchHandling';

type LongTouchButtonProps = {
  title?: string;
  active?: boolean;
  enabled?: boolean;
  onPressStart?: () => void;
  onShortPressEnd?: () => void;
  onLongPressStart?: () => void;
  onLongPressEnd?: () => void;
  onPressInterval?: () => void;
  pressIntervalRefresh?: number;
};

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
    <Stack>
      <TouchableHighlight
        onPressIn={onPressIn}
        onLongPress={onLongPress}
        onPressOut={onPressOut}
        underlayColor="transparent"
      >
        <SC.ButtonWrapper active={active}>
          <Typography type={TypographyType.BUTTON} centered>
            {title}
          </Typography>
        </SC.ButtonWrapper>
      </TouchableHighlight>
    </Stack>
  );
};

export default LongTouchButton;

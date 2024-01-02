import React, { FC } from 'react';
import { Stack } from '../Flow';
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
    <Stack grow={0} shrink={1} fullWidth centered style={{ height: 45 }}>
      <SC.ButtonWrapper
        onPressIn={onPressIn}
        onLongPress={onLongPress}
        onPressOut={onPressOut}
        underlayColor="transparent"
        active={active}
      >
        <Stack grow={1} centered>
          <Typography type={TypographyType.BUTTON} centered>
            {title}
          </Typography>
        </Stack>
      </SC.ButtonWrapper>
    </Stack>
  );
};

export default LongTouchButton;

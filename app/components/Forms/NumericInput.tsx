import React, { FC, PropsWithChildren } from 'react';
import { COLOR_DARK } from '../../commonStyles';
import { Spacer, Stack } from '../Layout';
import LongTouchButton from '../LongTouchButton';
import Typography, { TypographyType } from '../Typography/Typography';

type NumericInputProps = PropsWithChildren<{
  headline?: string;
  increase: () => void;
  increaseInterval?: () => void;
  decrease: () => void;
  decreaseInterval?: () => void;
}>;

const NumericInput: FC<NumericInputProps> = ({
  children,
  headline,
  increase,
  increaseInterval,
  decrease,
  decreaseInterval,
}) => {
  return (
    <Stack>
      {headline ? (
        <>
          <Typography type={TypographyType.H5} color={COLOR_DARK} centered>
            {headline}
          </Typography>
          <Spacer yAxis={2} />
        </>
      ) : null}

      <Stack horizontal>
        <Stack grow={1} shrink={0} basis="0">
          <LongTouchButton title="-" onPressStart={decrease} onPressInterval={decreaseInterval} />
        </Stack>

        <Stack grow={2.5} shrink={0} basis="0">
          {children}
        </Stack>

        <Stack grow={1} shrink={0} basis="0">
          <LongTouchButton title="+" onPressStart={increase} onPressInterval={increaseInterval} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NumericInput;

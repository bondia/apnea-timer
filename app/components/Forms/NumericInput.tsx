import React, { FC, PropsWithChildren } from 'react';
import useAppTheme from '../../providers/AppThemeProvider/useAppTheme';
import { Spacer, Stack } from '../Flow';
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
  const {
    colors: { secondary500 },
  } = useAppTheme();
  return (
    <Stack>
      {headline ? (
        <>
          <Typography type={TypographyType.H5} color={secondary500} centered>
            {headline}
          </Typography>
          <Spacer spacing={4} />
        </>
      ) : null}

      <Stack horizontal>
        <Stack grow={1} shrink={0} basis="0" centered>
          <LongTouchButton
            title="-"
            onPressStart={decrease}
            onPressInterval={decreaseInterval}
          />
        </Stack>

        <Stack grow={2.5} shrink={0} basis="0" centered>
          {children}
        </Stack>

        <Stack grow={1} shrink={0} basis="0" centered>
          <LongTouchButton
            title="+"
            onPressStart={increase}
            onPressInterval={increaseInterval}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NumericInput;

import React, { FC } from 'react';
import { Spacer, Stack } from '../../../../components/Flow';
import NumericInput from '../../../../components/Forms/NumericInput';
import Typography, {
  TypographyType,
} from '../../../../components/Typography/Typography';
import useAppTheme from '../../../../hooks/useAppTheme';
import { useAppDispatch } from '../../../../redux/hooks';
import millisecondsToTimeString from '../../../../utils/time/milisecondsToTimeString';
import { SetTypeEnum } from '../../enums';
import {
  decreaseTimeItem,
  increaseTimeItem,
} from '../../redux/actions/composed/changeTimeItem';

type EditorTimerInputProps = {
  index: number;
  duration?: number;
  type?: string;
  setNumber?: number;
  zombie?: boolean;
};

const EditorTimerInput: FC<EditorTimerInputProps> = ({
  index,
  duration = 0,
  type = SetTypeEnum.SET_TYPE_PREPARE,
  setNumber = 0,
  zombie = false,
}) => {
  const dispatch = useAppDispatch();
  const { colors } = useAppTheme();

  const clockColorByType =
    SetTypeEnum.SET_TYPE_PREPARE === type ? colors.primary900 : colors.error;
  const clockColor = zombie ? colors.inverted900 : clockColorByType;

  const increase = () => dispatch(increaseTimeItem(index, 5000));
  const decrease = () => dispatch(decreaseTimeItem(index, 5000));

  return (
    <Spacer yAxis={1}>
      <NumericInput
        decrease={decrease}
        decreaseInterval={decrease}
        increase={increase}
        increaseInterval={increase}
      >
        <Stack centered horizontal>
          <Typography type={TypographyType.H3} color={clockColor}>
            {millisecondsToTimeString(duration)}
          </Typography>
          <Typography color={colors.inverted900} centered>
            ({setNumber})
          </Typography>
        </Stack>
      </NumericInput>
    </Spacer>
  );
};

export default EditorTimerInput;

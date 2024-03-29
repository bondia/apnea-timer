import React, { FC } from 'react';
import { AppDispatch } from '../../../../../App';
import { Spacer, Stack } from '../../../../components/Flow';
import NumericInput from '../../../../components/Forms/NumericInput';
import Typography, {
  TypographyType,
} from '../../../../components/Typography/Typography';
import useAppTheme from '../../../../hooks/useAppTheme';
import { useAppDispatch } from '../../../../redux/hooks';
import millisecondsToTimeString from '../../../../utils/time/milisecondsToTimeString';
import { EditorStateType, EnduranceTrainingTableType } from '../../editorTypes';
import {
  ChangeEnduranceLapsType,
  changeEnduranceLaps,
} from '../../redux/actions/composed/changeEnduranceLaps';
import {
  EditorChangeTableBaseAction,
  changeTableBase,
} from '../../redux/actions/composed/changeTableBase';
import {
  ChangeTableBaseBreaksType,
  changeTableBaseBreaks,
} from '../../redux/actions/composed/changeTableBaseBreaks';

type HandleActionParams = {
  original: number;
  increase: number;
  action:
    | ChangeTableBaseBreaksType
    | ChangeEnduranceLapsType
    | EditorChangeTableBaseAction;
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

type EditorEnduranceProps = {
  editor: EditorStateType;
};

const EditorEnduranceInputs: FC<EditorEnduranceProps> = props => {
  const dispatch = useAppDispatch();
  const actionHandler = handleAction(dispatch);
  const { colors } = useAppTheme();

  const {
    editor: { trainingTable },
  } = props;

  const {
    enduranceLaps,
    base,
    baseBreaks,
    duration: totalTime,
  } = trainingTable as EnduranceTrainingTableType;

  return (
    <Stack spaceAround grow={1}>
      <Typography type={TypographyType.H1} color={colors.primary900} centered>
        {millisecondsToTimeString(totalTime)}
      </Typography>

      <Stack>
        <NumericInput
          headline="Laps"
          decrease={() =>
            actionHandler({
              original: enduranceLaps,
              increase: -1,
              action: changeEnduranceLaps,
            })
          }
          increase={() =>
            actionHandler({
              original: enduranceLaps,
              increase: 1,
              action: changeEnduranceLaps,
            })
          }
        >
          <Typography
            type={TypographyType.H3}
            color={colors.inverted900}
            centered
          >
            {enduranceLaps}
          </Typography>
        </NumericInput>

        <Spacer spacing={6} />

        <NumericInput
          headline="Dive Time"
          decrease={() =>
            actionHandler({
              original: base,
              increase: -1000,
              action: changeTableBase,
            })
          }
          decreaseInterval={() =>
            actionHandler({
              original: base,
              increase: -5000,
              action: changeTableBase,
            })
          }
          increase={() =>
            actionHandler({
              original: base,
              increase: 1000,
              action: changeTableBase,
            })
          }
          increaseInterval={() =>
            actionHandler({
              original: base,
              increase: 5000,
              action: changeTableBase,
            })
          }
        >
          <Typography
            type={TypographyType.H3}
            color={colors.inverted900}
            centered
          >
            {millisecondsToTimeString(base)}
          </Typography>
        </NumericInput>

        <Spacer spacing={6} />

        <NumericInput
          headline="Breaks"
          decrease={() =>
            actionHandler({
              original: baseBreaks,
              increase: -1000,
              action: changeTableBaseBreaks,
            })
          }
          decreaseInterval={() =>
            actionHandler({
              original: baseBreaks,
              increase: -5000,
              action: changeTableBaseBreaks,
            })
          }
          increase={() =>
            actionHandler({
              original: baseBreaks,
              increase: 1000,
              action: changeTableBaseBreaks,
            })
          }
          increaseInterval={() =>
            actionHandler({
              original: baseBreaks,
              increase: 5000,
              action: changeTableBaseBreaks,
            })
          }
        >
          <Typography
            type={TypographyType.H3}
            color={colors.inverted900}
            centered
          >
            {millisecondsToTimeString(baseBreaks)}
          </Typography>
        </NumericInput>
      </Stack>
    </Stack>
  );
};

export default EditorEnduranceInputs;

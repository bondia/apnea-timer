import React, { FC } from 'react';
import { AppDispatch } from '../../../../../App';
import { COLOR_GREEN_NORMAL, FONT_COLOR_GREY } from '../../../../commonStyles';
import NumericInput from '../../../../components/Forms/NumericInput';
import { Spacer } from '../../../../components/Layout';
import Typography, { TypographyType } from '../../../../components/Typography/Typography';
import { useAppDispatch } from '../../../../redux/hooks';
import secondsToTimeString from '../../../../utils/time/secondsToTimeString';
import { EditorStateType, EnduranceTrainingTableType } from '../../editorTypes';
import { ChangeEnduranceLapsType, changeEnduranceLaps } from '../../redux/actions/composed/changeEnduranceLaps';
import { EditorChangeTableBaseAction, changeTableBase } from '../../redux/actions/composed/changeTableBase';
import { ChangeTableBaseBreaksType, changeTableBaseBreaks } from '../../redux/actions/composed/changeTableBaseBreaks';

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

type EditorEnduranceProps = {
  editor: EditorStateType;
};

const EditorEnduranceInputs: FC<EditorEnduranceProps> = props => {
  const dispatch = useAppDispatch();
  const actionHandler = handleAction(dispatch);

  const {
    editor: { trainingTable },
  } = props;

  const { enduranceLaps, base, baseBreaks, duration: totalTime } = trainingTable as EnduranceTrainingTableType;

  return (
    <Spacer xAxis={2} top={3} bottom={2}>
      <Typography type={TypographyType.H1} color={COLOR_GREEN_NORMAL} centered>
        {secondsToTimeString(totalTime)}
      </Typography>

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
        <Typography type={TypographyType.H3} color={FONT_COLOR_GREY} centered>
          {enduranceLaps}
        </Typography>
      </NumericInput>

      <NumericInput
        headline="Dive Time"
        decrease={() =>
          actionHandler({
            original: base,
            increase: -1,
            action: changeTableBase,
          })
        }
        decreaseInterval={() =>
          actionHandler({
            original: base,
            increase: -5,
            action: changeTableBase,
          })
        }
        increase={() =>
          actionHandler({
            original: base,
            increase: 1,
            action: changeTableBase,
          })
        }
        increaseInterval={() =>
          actionHandler({
            original: base,
            increase: 5,
            action: changeTableBase,
          })
        }
      >
        <Typography type={TypographyType.H3} color={FONT_COLOR_GREY} centered>
          {secondsToTimeString(base)}
        </Typography>
      </NumericInput>

      <NumericInput
        headline="Breaks"
        decrease={() =>
          actionHandler({
            original: baseBreaks,
            increase: -1,
            action: changeTableBaseBreaks,
          })
        }
        decreaseInterval={() =>
          actionHandler({
            original: baseBreaks,
            increase: -5,
            action: changeTableBaseBreaks,
          })
        }
        increase={() =>
          actionHandler({
            original: baseBreaks,
            increase: 1,
            action: changeTableBaseBreaks,
          })
        }
        increaseInterval={() =>
          actionHandler({
            original: baseBreaks,
            increase: 5,
            action: changeTableBaseBreaks,
          })
        }
      >
        <Typography type={TypographyType.H3} color={FONT_COLOR_GREY} centered>
          {secondsToTimeString(baseBreaks)}
        </Typography>
      </NumericInput>
    </Spacer>
  );
};

export default EditorEnduranceInputs;

import React, { FC } from 'react';
import { AppDispatch } from '../../../../../App';
import { COLOR_DARK, COLOR_GREEN_NORMAL, FONT_COLOR_GREY } from '../../../../commonStyles';
import { Col, Row } from '../../../../components/Grid';
import { Spacer } from '../../../../components/Layout';
import LongTouchButton from '../../../../components/LongTouchButton';
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
    <Spacer spacing={1}>
      <Row>
        <Col>
          <Typography type={TypographyType.H1} color={COLOR_GREEN_NORMAL} centered>
            {secondsToTimeString(totalTime)}
          </Typography>
        </Col>
      </Row>

      <Row>
        <Col>
          <Typography type={TypographyType.H5} color={COLOR_DARK}>
            Laps
          </Typography>
        </Col>
      </Row>

      <Row>
        <Col>
          <LongTouchButton
            title="-"
            onPressStart={() =>
              actionHandler({
                original: enduranceLaps,
                increase: -1,
                action: changeEnduranceLaps,
              })
            }
          />
        </Col>
        <Col flex={1.5}>
          <Typography type={TypographyType.H3} color={FONT_COLOR_GREY} centered>
            {enduranceLaps}
          </Typography>
        </Col>
        <Col>
          <LongTouchButton
            title="+"
            onPressStart={() =>
              actionHandler({
                original: enduranceLaps,
                increase: 1,
                action: changeEnduranceLaps,
              })
            }
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Typography type={TypographyType.H5} color={COLOR_DARK}>
            Dive Time
          </Typography>
        </Col>
      </Row>

      <Row>
        <Col>
          <LongTouchButton
            title="-"
            onPressStart={() =>
              actionHandler({
                original: base,
                increase: -1,
                action: changeTableBase,
              })
            }
            onPressInterval={() =>
              actionHandler({
                original: base,
                increase: -5,
                action: changeTableBase,
              })
            }
          />
        </Col>
        <Col flex={1.5}>
          <Typography type={TypographyType.H3} color={FONT_COLOR_GREY} centered>
            {secondsToTimeString(base)}
          </Typography>
        </Col>
        <Col>
          <LongTouchButton
            title="+"
            onPressStart={() =>
              actionHandler({
                original: base,
                increase: 1,
                action: changeTableBase,
              })
            }
            onPressInterval={() =>
              actionHandler({
                original: base,
                increase: 5,
                action: changeTableBase,
              })
            }
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Typography type={TypographyType.H5} color={COLOR_DARK}>
            Breaks
          </Typography>
        </Col>
      </Row>

      <Row>
        <Col>
          <LongTouchButton
            title="-"
            onPressStart={() =>
              actionHandler({
                original: baseBreaks,
                increase: -1,
                action: changeTableBaseBreaks,
              })
            }
            onPressInterval={() =>
              actionHandler({
                original: baseBreaks,
                increase: -5,
                action: changeTableBaseBreaks,
              })
            }
          />
        </Col>
        <Col flex={1.5}>
          <Typography type={TypographyType.H3} color={FONT_COLOR_GREY} centered>
            {secondsToTimeString(baseBreaks)}
          </Typography>
        </Col>
        <Col>
          <LongTouchButton
            title="+"
            onPressStart={() =>
              actionHandler({
                original: baseBreaks,
                increase: 1,
                action: changeTableBaseBreaks,
              })
            }
            onPressInterval={() =>
              actionHandler({
                original: baseBreaks,
                increase: 5,
                action: changeTableBaseBreaks,
              })
            }
          />
        </Col>
      </Row>
    </Spacer>
  );
};

export default EditorEnduranceInputs;

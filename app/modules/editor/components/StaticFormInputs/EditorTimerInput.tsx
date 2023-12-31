import React, { FC } from 'react';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL, FONT_COLOR_GREY } from '../../../../commonStyles';
import { Col, Row } from '../../../../components/Grid';
import LongTouchButton from '../../../../components/LongTouchButton';
import Typography, { TypographyType } from '../../../../components/Typography/Typography';
import { useAppDispatch } from '../../../../redux/hooks';
import secondsToTimeString from '../../../../utils/time/secondsToTimeString';
import { SetTypeEnum } from '../../enums';
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

  return (
    <>
      <Row>
        <Col>
          <LongTouchButton title="-" onPressStart={decrease} onPressInterval={decrease} />
        </Col>

        <Col flex={2}>
          <Typography type={TypographyType.H3} color={clockColor} centered>
            {secondsToTimeString(duration)}
          </Typography>
        </Col>

        <Col flex={0.5}>
          <Typography color={FONT_COLOR_GREY} centered>
            ({setNumber})
          </Typography>
        </Col>

        <Col>
          <LongTouchButton title="+" onPressStart={increase} onPressInterval={increase} />
        </Col>
      </Row>

      {/* TODO: Needs spacer component here */}
      <Row>
        <Col>
          <Typography> </Typography>
        </Col>
      </Row>
    </>
  );
};

export default EditorTimerInput;

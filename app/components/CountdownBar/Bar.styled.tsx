import styled from 'styled-components/native';
import { COLOR_GREEN_LIGHT, COLOR_RED_NORMAL, FONT_CLOLR_GREY_LIGHT } from '../../commonStyles';
import { CronoSetType } from '../../modules/crono/cronoTypes';
import { SetModeEnum, SetTypeEnum } from '../../modules/editor/enums';

const decideBackgroundColor = (props: SingleBarInnerProps): string =>
  props.set?.type === SetTypeEnum.SET_TYPE_HOLD ? COLOR_RED_NORMAL : COLOR_GREEN_LIGHT;

const decideHeight = (props: SingleBarInnerProps): number | string => {
  const { set } = props;

  // check set
  if (!set) {
    return 0;
  }

  const {
    running: { mode, countdown },
    duration,
  } = set;

  // check mode
  if (mode === SetModeEnum.SET_MODE_FINISHED || mode === SetModeEnum.SET_MODE_SKIPED) {
    return 0;
  }

  // calculate
  const percent = (countdown * 100) / duration;
  return `${percent} %`;
};

export const SingleBarOuter = styled.View`
  flex: 1;
  width: 5px;
  max-width: 5px;
  align-items: baseline;
  background-color: ${FONT_CLOLR_GREY_LIGHT};
`;

type SingleBarInnerProps = {
  set?: CronoSetType;
};

export const SingleBarInner = styled.View<SingleBarInnerProps>`
    position: absolute;
    bottom: 0;
    width: 5px;
    background-color: ${decideBackgroundColor}
    height: ${decideHeight}
`;

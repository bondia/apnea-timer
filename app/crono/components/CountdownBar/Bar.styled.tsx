import styled from 'styled-components/native';
import { COLOR_GREEN_LIGHT, COLOR_RED_NORMAL, FONT_CLOLR_GREY_LIGHT } from '../../../commonStyles';
import { SetMode, SetType } from '../../../editor/enums';
import { ImmutableJSSetType } from '../../redux/CronoTypes';

function decideBackgroundColor(props: SingleBarInnerProps): string {
  const { set } = props;
  const type = set ? set.get('type') : null;
  return type === SetType.SET_TYPE_HOLD ? COLOR_RED_NORMAL : COLOR_GREEN_LIGHT;
}

function decideHeight(props: SingleBarInnerProps): number | string {
  const { set } = props;
  // check set
  if (set == null) {
    return 0;
  }
  // check mode
  const mode = set.getIn(['running', 'mode']);
  if (mode === SetMode.SET_MODE_FINISHED || mode === SetMode.SET_MODE_SKIPED) {
    return 0;
  }
  // calculate
  const should = set.get('duration');
  const has = set.getIn(['running', 'countdown']);
  const percent = (has * 100) / should;
  return `${percent} %`;
}

export const SingleBarOuter = styled.View`
  flex: 1;
  width: 5px;
  max-width: 5px;
  align-items: baseline;
  background-color: ${FONT_CLOLR_GREY_LIGHT};
`;

interface SingleBarInnerProps {
  set?: ImmutableJSSetType;
}
export const SingleBarInner = styled.View<SingleBarInnerProps>`
    position: absolute;
    bottom: 0;
    width: 5px;
    background-color: ${decideBackgroundColor}
    height: ${decideHeight}
`;

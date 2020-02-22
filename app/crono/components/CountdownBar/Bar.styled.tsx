
import styled from 'styled-components/native';

import {
    FONT_CLOLR_GREY_LIGHT,
    COLOR_GREEN_LIGHT,
    COLOR_RED_LIGHT
} from '../../../common/styles/commonStyles';

import {
    SET_TYPE_HOLD,
    SET_MODE_FINISHED,
    SET_MODE_SKIPED
} from '../../../editor/enums';
import { ImmutableJSSetType } from '../../redux/CronoTypes';

export const SingleBarOuter = styled.View`
    flex: 1;
    width: 5px;
    max-width: 5px;
    align-items: baseline;
    background-color: ${FONT_CLOLR_GREY_LIGHT};
`;

interface SingleBarInnerProps {
    set: ImmutableJSSetType;
}
export const SingleBarInner = styled.View<SingleBarInnerProps>`
    position: absolute;
    bottom: 0;
    width: 5px;
    background-color: ${decideBackgroundColor}
    height: ${decideHeight}
`;

function decideBackgroundColor(props: SingleBarInnerProps): string {
    const { set } = props;
    const type = set.get('type');
    return type === SET_TYPE_HOLD ? COLOR_RED_LIGHT : COLOR_GREEN_LIGHT
}

function decideHeight(props: SingleBarInnerProps): number | string {
    const { set } = props;
    // check set
    if (set == null) {
        return 0;
    }
    // check mode
    const mode = set.getIn(['running', 'mode']);
    if (mode === SET_MODE_FINISHED || mode === SET_MODE_SKIPED) {
        return 0;
    }
    // calculate
    const should = set.get('duration');
    const has = set.getIn(['running', 'countdown']);
    const percent = has * 100 / should;
    return `${percent} %`;
}
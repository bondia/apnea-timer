import React from 'react';

import * as enums from '../../../editor/enums';
import { ImmutableJSSetType } from '../../redux/CronoTypes';

import * as SC from './SetsList.styled';
import Crono from '../Crono';

interface SetItemProps {
    item: ImmutableJSSetType;
}

export default function SetItem(props: SetItemProps): JSX.Element {
    const { item } = props;
    const type = item.get('type');
    const mode = item.getIn(['running', 'mode']);
    const countdown = item.getIn(['running', 'countdown']);
    const contraction = item.getIn(['running', 'contraction']);
    return (
        <SC.SetItemWrapper>
            <Crono
                active={mode === enums.SET_MODE_RUNNING || mode === enums.SET_MODE_INITIAL}
                running={mode === enums.SET_MODE_RUNNING}
                type={type}
                duration={countdown}
                contraction={contraction}
                />
        </SC.SetItemWrapper>
    );
}
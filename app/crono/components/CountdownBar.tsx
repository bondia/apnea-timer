import React from 'react';

import { ImmutableJSSetType } from '../redux/CronoTypes';
import * as SC from './CountdownBar.styled';

export interface CountdownBarProps {
    set: ImmutableJSSetType;
}

export default function CountdownBar(props: CountdownBarProps): JSX.Element {
    const { set } = props;
    return (
        <SC.OuterBar>
            <SC.InnerBar set={set} />
        </SC.OuterBar>
    );
}


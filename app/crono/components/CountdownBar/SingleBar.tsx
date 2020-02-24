import React from 'react';

import { ImmutableJSSetType } from '../../redux/cronoTypes';
import * as SC from './Bar.styled';

export interface SingleBarProps {
    set: ImmutableJSSetType;
}

export default function SingleBar(props: SingleBarProps): JSX.Element {
    const { set } = props;
    return (
        <SC.SingleBarOuter>
            <SC.SingleBarInner set={set} />
        </SC.SingleBarOuter>
    );
}


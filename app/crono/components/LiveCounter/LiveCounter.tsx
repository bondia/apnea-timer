import React from 'react';
import { View } from 'react-native';

import {
    COLOR_RED_NORMAL,
    COLOR_GREEN_NORMAL
} from '../../../common/styles/commonStyles';

import * as enums from '../../../editor/enums';
import { ImmutableJSCronoType } from '../../redux/CronoTypes';
import findRunningSet from '../../pure/findRunningSet';

import * as SC from './LiveCounter.styled';
import LiveCounterBlock from './LiveCounterBlock';

interface LiveCounterProps {
    crono: ImmutableJSCronoType;
}

export default function LiveCounter(props: LiveCounterProps): JSX.Element {
    const { crono } = props;
    const tableType = crono.getIn(['trainingTable', 'type']);
    const spentTime = crono.getIn(['running', 'clock']);
    const totalTime = crono.getIn(['running', 'countdown']);
    const contractions = crono.getIn(['running', 'contractions']);

    // set data
    const current = findRunningSet(crono.get('sets'));
    const setType = current ? current.get('type') : null;
    const mode = current ? current.getIn(['running', 'mode']) : null;
    const countdown = current ? current.getIn(['running', 'countdown']) : null;
    const pos = current ? current.get('pos') : 0;
    const currentSet = pos <= 1 ? 1 : Math.floor(pos / 2) + 1;
    const targeting = spentTime > 0 ? spentTime + totalTime : totalTime;
    const currentSetHeader = enums.SET_TYPE_HOLD === setType ? 'Breath Hold' : 'Breath Up';
    const currentSetColor = enums.SET_TYPE_HOLD === setType ? COLOR_RED_NORMAL : COLOR_GREEN_NORMAL;

    return (
        <SC.LiveCounterWrapper>
            {enums.TABLE_TYPE_ENDURANCE === tableType && (
            <>
                <LiveCounterBlock
                    title="Targeting"
                    timeContent={targeting}
                />
                <LiveCounterBlock
                    title="Spent Time"
                    timeContent={spentTime > 0 ? spentTime : 0}
                />

                <LiveCounterBlock
                    title="Current Dive"
                    rawContent={currentSet}
                />
            </>
            )}

            {enums.TABLE_TYPE_ENDURANCE !== tableType && (
            <>
                <LiveCounterBlock
                    title="Remaining Time"
                    timeContent={totalTime}
                />
                <LiveCounterBlock
                    title="Contractions"
                    timeContent={contractions}
                />
            </>
            )}

            {current && mode !== enums.SET_MODE_FINISHED && (
                <LiveCounterBlock
                    title={currentSetHeader}
                    timeContent={countdown}
                    textColor={currentSetColor}
                />
            )}
        </SC.LiveCounterWrapper>
    );
}

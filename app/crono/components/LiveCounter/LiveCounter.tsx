import React from 'react';

import {
    SET_TYPE_HOLD,
    SET_MODE_FINISHED,
    TABLE_TYPE_ENDURANCE
} from '../../../editor/enums';
import { ImmutableJSCronoType, ImmutableJSSetType } from '../../redux/cronoTypes';

import {
    COLOR_RED_NORMAL,
    COLOR_GREEN_NORMAL
} from '../../../common/styles/commonStyles';
import * as SC from './LiveCounter.styled';

import InfoBlock from '../../../common/components/InfoBlock';

interface LiveCounterProps {
    crono: ImmutableJSCronoType;
    set: ImmutableJSSetType;
}

export default function LiveCounter(props: LiveCounterProps): JSX.Element {
    const { crono, set } = props;
    const tableType = crono.getIn(['trainingTable', 'type']);
    const spentTime = crono.getIn(['running', 'clock']);
    const totalTime = crono.getIn(['running', 'countdown']);
    const contractions = crono.getIn(['running', 'contractions']);

    // set data
    const setType = set ? set.get('type') : null;
    const mode = set ? set.getIn(['running', 'mode']) : null;
    const countdown = set ? set.getIn(['running', 'countdown']) : null;
    const pos = set ? set.get('pos') : 0;
    const currentSet = pos <= 1 ? 1 : Math.floor(pos / 2) + 1;
    const targeting = spentTime > 0 ? spentTime + totalTime : totalTime;
    const currentSetHeader = SET_TYPE_HOLD === setType ? 'Breath Hold' : 'Breath Up';
    const currentSetColor = SET_TYPE_HOLD === setType ? COLOR_RED_NORMAL : COLOR_GREEN_NORMAL;

    return (
        <SC.LiveCounterWrapper>
            {TABLE_TYPE_ENDURANCE === tableType && (
            <>
                <InfoBlock
                    title="Targeting"
                    timeContent={targeting}
                />
                <InfoBlock
                    title="Spent Time"
                    timeContent={spentTime > 0 ? spentTime : 0}
                />

                <InfoBlock
                    title="Current Dive"
                    rawContent={currentSet}
                />
            </>
            )}

            {TABLE_TYPE_ENDURANCE !== tableType && (
            <>
                <InfoBlock
                    title="Remaining Time"
                    timeContent={totalTime}
                />
                <InfoBlock
                    title="Contractions"
                    timeContent={contractions}
                />
            </>
            )}

            {set && mode !== SET_MODE_FINISHED && (
                <InfoBlock
                    title={currentSetHeader}
                    timeContent={countdown}
                    textColor={currentSetColor}
                />
            )}
        </SC.LiveCounterWrapper>
    );
}

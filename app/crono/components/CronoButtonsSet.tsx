import React from 'react';
import { Actions } from 'react-native-router-flux';

import * as tableEnums from '../../editor/enums';
import findRunningSet from '../pure/findRunningSet';
import LongTouchButton from '../../common/components/LongTouchButton';
import * as SC from './CronoButtonSet.styled';
import { CronoActionsTypes } from '../redux/CronoActionsTypes';

interface CronoButtonSetProps {
    crono: ImmutableJSCronoType;
    cronoActions: CronoActionsTypes;
}
export default function CronoButtonSet(props: CronoButtonSetProps): JSX.Element {
    const { crono, cronoActions } = props;
    const clock = crono.getIn(['running', 'clock']);
    const tableType = crono.getIn(['trainingTable', 'type']);
    const tableMode = crono.getIn(['running', 'mode']);
    return (
        <SC.ButtonSetWrapper>
            {clock < 0 && tableEnums.TABLE_TYPE_ENDURANCE !== tableType && (
                <SC.ButtonWrapper>
                    <LongTouchButton
                        title="Auto"
                        onPressStart={() => handleStartAuto(cronoActions)}
                        />
                </SC.ButtonWrapper>
            )}

            {clock < 0 && (
                <SC.ButtonWrapper>
                    <LongTouchButton
                        title="Coach"
                        onPressStart={() => handleStartCoach(cronoActions)}
                    />
                </SC.ButtonWrapper>
            )}

            {clock >= 0 && tableEnums.CRONO_MODE_FINISHED !== tableMode && (
                <SC.ButtonWrapper>
                    <LongTouchButton
                        title="Skip"
                        onPressStart={() => handleSkip(crono, cronoActions)}
                    />
                </SC.ButtonWrapper>
            )}

            {clock >= 0 && canTrackContractions(crono) && (
                <SC.ButtonWrapper>
                    <LongTouchButton
                        title="1st Cont"
                        onPressStart={() => handleContraction(cronoActions)}
                    />
                </SC.ButtonWrapper>
            )}

            {tableEnums.CRONO_MODE_FINISHED === tableMode && (
                <SC.ButtonWrapper>
                    <LongTouchButton
                        title="Finish"
                        onPressStart={() => handleFinish(cronoActions)}
                    />
                </SC.ButtonWrapper>
            )}
        </SC.ButtonSetWrapper>
    );
}

/**
 * TODO: Remove immutable js
 */
interface ImmutableJSCronoType {
    get: (prop: string) => any;
    getIn: (stack: string[]) => any;
}

const canTrackContractions = (crono: ImmutableJSCronoType) => {
    // no contractions tracking for endurance tables
    const tableType = crono.getIn(['trainingTable', 'type']);
    if (tableEnums.TABLE_TYPE_ENDURANCE === tableType) {
        return false;
    }
    // get current active set
    const current = findRunningSet(crono.get('sets'));
    if (current == null) {
        return false;
    }
    // decide if can track
    const setType = current.get('type');
    return current && tableEnums.SET_TYPE_HOLD === setType;
}

const handleStart = (cronoActions: CronoActionsTypes, mode: string) => {
    cronoActions.startCrono(mode);
}

const handleStartAuto = (cronoActions: CronoActionsTypes) => {
    handleStart(cronoActions, tableEnums.CRONO_MODE_AUTO);
}

const handleStartCoach = (cronoActions: CronoActionsTypes) => {
    handleStart(cronoActions, tableEnums.CRONO_MODE_COACH);
}

const handleSkip = (crono: ImmutableJSCronoType, cronoActions: CronoActionsTypes) => {
    const current = findRunningSet(crono.get('sets'));
    if (current != null) {
        cronoActions.skipSet(current.get('pos'));
    }
}

const handleContraction = (cronoActions: CronoActionsTypes) => {
    cronoActions.trackContraction();
}

const handleFinish = (cronoActions: CronoActionsTypes) => {
    Actions.pop();
    cronoActions.clearCrono();
}

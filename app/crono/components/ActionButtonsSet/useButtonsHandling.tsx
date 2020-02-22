import findRunningSet from '../../pure/findRunningSet';
import * as tableEnums from '../../../editor/enums';
import { Actions } from 'react-native-router-flux';
import {
    CronoActionsTypes,
    ImmutableJSCronoType
} from '../../redux/CronoTypes';

interface UseButtonsHandlingInput {
    crono: ImmutableJSCronoType;
    cronoActions: CronoActionsTypes;
}

interface UseButtonsHandlingOutput {
    clock: number;
    tableType: string;
    tableMode: string;
    canTrackContractions: () => boolean;
    handleStartAuto: () => void;
    handleStartCoach: () => void;
    handleSkip: () => void;
    handleContraction: () => void;
    handleFinish: () => void;
}

export default function useButtonsHandling(input: UseButtonsHandlingInput): UseButtonsHandlingOutput {
    const { crono, cronoActions } = input;
    const clock = crono.getIn(['running', 'clock']);
    const tableType = crono.getIn(['trainingTable', 'type']);
    const tableMode = crono.getIn(['running', 'mode']);
    return {
        clock,
        tableType,
        tableMode,
        canTrackContractions: (): boolean => canTrackContractions(crono),
        handleStartAuto: (): void => handleStartAuto(cronoActions),
        handleStartCoach: (): void => handleStartCoach(cronoActions),
        handleSkip: (): void => handleSkip(crono, cronoActions),
        handleContraction: (): void => handleContraction(cronoActions),
        handleFinish: (): void => handleFinish(cronoActions)
    }
}

const canTrackContractions = (crono: ImmutableJSCronoType): boolean => {
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
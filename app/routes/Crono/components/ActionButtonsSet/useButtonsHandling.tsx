import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { debounce } from 'lodash';
import { useCallback } from 'react';
import findRunningSet from '../../../../crono/pure/findRunningSet';
import { CronoActionsTypes, CronoSetType, CronoStateType } from '../../../../crono/redux/CronoTypes';
import { CronoMode, SetType, TableType } from '../../../../editor/enums';

interface UseButtonsHandlingInput {
  crono: CronoStateType;
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

const canTrackContractions = (crono: CronoStateType, current: CronoSetType): boolean => {
  // no contractions tracking for endurance tables
  const tableType = crono?.trainingTable?.type;
  if (TableType.TABLE_TYPE_ENDURANCE === tableType) {
    return false;
  }
  // get current active set
  if (current == null) {
    return false;
  }
  // decide if can track
  return current && SetType.SET_TYPE_HOLD === current.type;
};

const handleStart = (cronoActions: CronoActionsTypes, mode: CronoMode) => {
  cronoActions.startCrono(mode);
};

const handleStartAuto = (cronoActions: CronoActionsTypes) => {
  handleStart(cronoActions, CronoMode.CRONO_MODE_AUTO);
};

const handleStartCoach = (cronoActions: CronoActionsTypes) => {
  handleStart(cronoActions, CronoMode.CRONO_MODE_COACH);
};

const handleSkip = (cronoActions: CronoActionsTypes, current: CronoSetType) => {
  if (current != null) {
    cronoActions.skipSet(current.pos);
  }
};

const handleContraction = (cronoActions: CronoActionsTypes) => {
  cronoActions.trackContraction();
};

const handleFinish = (cronoActions: CronoActionsTypes, navigation: NativeStackNavigationProp<any, string>) => {
  navigation.pop();
  cronoActions.clearCrono();
};

export default function useButtonsHandling(input: UseButtonsHandlingInput): UseButtonsHandlingOutput {
  const { crono, cronoActions } = input;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const clock = crono?.running?.clock;
  const tableType = crono?.trainingTable?.type;
  const tableMode = crono?.running.mode;

  const current: CronoSetType = findRunningSet(crono.sets);

  const skip = useCallback((actions: CronoActionsTypes, set: CronoSetType) => {
    handleSkip(actions, set);
  }, []);

  const deubuncedSkip = useCallback(
    debounce(skip, 500, {
      leading: true,
      trailing: false,
    }),
    [skip],
  );

  return {
    clock,
    tableType,
    tableMode,
    canTrackContractions: (): boolean => canTrackContractions(crono, current),
    handleStartAuto: (): void => handleStartAuto(cronoActions),
    handleStartCoach: (): void => handleStartCoach(cronoActions),
    handleSkip: () => deubuncedSkip(cronoActions, current),
    handleContraction: (): void => handleContraction(cronoActions),
    handleFinish: (): void => handleFinish(cronoActions, navigation),
  };
}

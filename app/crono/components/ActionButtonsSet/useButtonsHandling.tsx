import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Immutable from 'immutable';
import * as tableEnums from '../../../editor/enums';
import findRunningSet from '../../pure/findRunningSet';
import {
  CronoActionsTypes,
  CronoSetType,
  ImmutableJSCronoType,
  ImmutableJSSetType
} from '../../redux/cronoTypes';

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

export default function useButtonsHandling(
  input: UseButtonsHandlingInput
): UseButtonsHandlingOutput {
  const { crono, cronoActions } = input;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const clock = crono.getIn(['running', 'clock']);
  const tableType = crono.getIn(['trainingTable', 'type']);
  const tableMode = crono.getIn(['running', 'mode']);

  // TODO: Maybe no need to find running set (performance)
  const sets: CronoSetType[] = crono.get('sets').toJS() as CronoSetType[];
  const current: CronoSetType = findRunningSet(sets);
  const immutableCurrentSet = Immutable.fromJS(current);

  return {
    clock,
    tableType,
    tableMode,
    canTrackContractions: (): boolean =>
      canTrackContractions(crono, immutableCurrentSet),
    handleStartAuto: (): void => handleStartAuto(cronoActions),
    handleStartCoach: (): void => handleStartCoach(cronoActions),
    handleSkip: (): void => handleSkip(cronoActions, immutableCurrentSet),
    handleContraction: (): void => handleContraction(cronoActions),
    handleFinish: (): void => handleFinish(cronoActions, navigation)
  };
}

const canTrackContractions = (
  crono: ImmutableJSCronoType,
  current: ImmutableJSSetType
): boolean => {
  // no contractions tracking for endurance tables
  const tableType = crono.getIn(['trainingTable', 'type']);
  if (tableEnums.TABLE_TYPE_ENDURANCE === tableType) {
    return false;
  }
  // get current active set
  if (current == null) {
    return false;
  }
  // decide if can track
  const setType = current.get('type');
  return current && tableEnums.SET_TYPE_HOLD === setType;
};

const handleStart = (cronoActions: CronoActionsTypes, mode: string) => {
  cronoActions.startCrono(mode);
};

const handleStartAuto = (cronoActions: CronoActionsTypes) => {
  handleStart(cronoActions, tableEnums.CRONO_MODE_AUTO);
};

const handleStartCoach = (cronoActions: CronoActionsTypes) => {
  handleStart(cronoActions, tableEnums.CRONO_MODE_COACH);
};

const handleSkip = (
  cronoActions: CronoActionsTypes,
  current: ImmutableJSSetType
) => {
  if (current != null) {
    cronoActions.skipSet(current.get('pos'));
  }
};

const handleContraction = (cronoActions: CronoActionsTypes) => {
  cronoActions.trackContraction();
};

const handleFinish = (
  cronoActions: CronoActionsTypes,
  navigation: NativeStackNavigationProp<any, string>
) => {
  navigation.pop();
  cronoActions.clearCrono();
};

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { debounce } from 'lodash';
import { useCallback } from 'react';
import findRunningSet from '../../helpers/findRunningSet';
import { CronoSetType, CronoStateType } from '../../redux/CronoTypes';
import { CronoModeEnum, SetTypeEnum, TableTypeEnum } from '../../../editor/enums';
import { FixMe } from '../../../../types';
import useAppNavitation from '../../../../routes/useAppNavigation';
import { useAppDispatch } from '../../../../redux/hooks';
import { clearCrono, skipSet, startCrono } from '../../redux/cronoActions';
import trackContractionAction from '../../redux/creators/trackContractionAction';

type UseButtonsHandlingInput = {
  crono: CronoStateType;
};

type UseButtonsHandlingOutput = {
  clock: number;
  tableType: string;
  tableMode: string;
  canTrackContractions: () => boolean;
  handleStartAuto: () => void;
  handleStartCoach: () => void;
  handleSkip: () => void;
  handleContraction: () => void;
  handleFinish: () => void;
};

const canTrackContractions = (crono: CronoStateType, current: CronoSetType): boolean => {
  // no contractions tracking for endurance tables
  const tableTypeEnum = crono?.trainingTable?.type;
  if (TableTypeEnum.TABLE_TYPE_ENDURANCE === tableTypeEnum) {
    return false;
  }
  // get current active set
  if (current == null) {
    return false;
  }
  // decide if can track
  return current && SetTypeEnum.SET_TYPE_HOLD === current.type;
};

const handleFinish = (navigation: NativeStackNavigationProp<FixMe, string>) => {
  navigation.pop();
  clearCrono();
};

export default function useButtonsHandling(input: UseButtonsHandlingInput): UseButtonsHandlingOutput {
  const { crono } = input;
  const dispatch = useAppDispatch();
  const navigation = useAppNavitation();
  const clock = crono?.running?.clock;
  const tableType = crono?.trainingTable?.type as TableTypeEnum;
  const tableMode = crono?.running.mode;

  const current: CronoSetType = findRunningSet(crono.sets);

  const skip = useCallback(
    (set: CronoSetType) => {
      if (set != null) {
        return dispatch(skipSet(set.pos));
      }
      return undefined;
    },
    [dispatch],
  );

  // TODO: Check that callback
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
    handleStartAuto: (): void => dispatch(startCrono(CronoModeEnum.CRONO_MODE_AUTO)),
    handleStartCoach: (): void => dispatch(startCrono(CronoModeEnum.CRONO_MODE_COACH)),
    handleSkip: () => deubuncedSkip(current),
    handleContraction: (): void => dispatch(trackContractionAction()),
    handleFinish: (): void => handleFinish(navigation),
  };
}

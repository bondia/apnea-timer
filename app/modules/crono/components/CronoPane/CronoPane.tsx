import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import React, { FC, useCallback, useEffect } from 'react';
import { useAppDispatch } from '../../../../redux/hooks';
import useAppNavitation from '../../../../useAppNavigation';
import generateTimestamp from '../../../../utils/time/generateTimestamp';
import { EditorStateType } from '../../../editor/editorTypes';
import { CronoModeEnum } from '../../../editor/enums';
import { startTimer, stopTimer } from '../../helpers/cronoTimer';
import findRunningSet from '../../helpers/findRunningSet';
import handleTickAction from '../../redux/actions/composed/handleTickAction';
import initTableAction from '../../redux/actions/composed/initTableAction';
import setCronoModeAction from '../../redux/actions/setCronoModeAction';
import setCronoStartTimestampAction from '../../redux/actions/setCronoStartTimestampAction';
import setInitialStateAction from '../../redux/actions/setInitialStateAction';
import { useCronoSelector } from '../../redux/cronoSelectors';
import CronoButtonsSet from '../ActionButtonsSet';
import LiveCounter from '../LiveCounter/LiveCounter';
import Sets from '../Sets/Sets';
import * as SC from './CronoPane.styled';

type CoronoPaneProps = {
  initialData: EditorStateType;
};

const CronoPane: FC<CoronoPaneProps> = ({ initialData }) => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavitation();
  const crono = useCronoSelector();

  const endCrono = useCallback(() => {
    stopTimer();
    dispatch(setInitialStateAction(null));
  }, [dispatch]);

  const onClickStart = useCallback(
    (cronoMode: CronoModeEnum) => {
      stopTimer();
      dispatch(setCronoStartTimestampAction(generateTimestamp()));
      dispatch(setCronoModeAction(cronoMode));
      startTimer(() => dispatch(handleTickAction()));
    },
    [dispatch],
  );

  const endClickCrono = useCallback(() => {
    endCrono();
    navigation.pop();
  }, [endCrono, navigation]);

  useEffect(() => {
    dispatch(initTableAction(initialData));
    activateKeepAwakeAsync();
    return () => {
      endCrono();
      deactivateKeepAwake();
    };
  }, [dispatch, endCrono, initialData]);

  if (!crono?.sets) {
    return null;
  }

  const { sets } = crono;
  const current = findRunningSet(sets);

  return (
    <SC.PaneWrapper>
      <SC.ContentWrapper>
        <LiveCounter crono={crono} set={current || undefined} />
        <Sets sets={sets} active={current || undefined} />
      </SC.ContentWrapper>
      <CronoButtonsSet crono={crono} start={onClickStart} end={endClickCrono} />
    </SC.PaneWrapper>
  );
};

export default CronoPane;

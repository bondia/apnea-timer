import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import React, { FC, useCallback, useEffect } from 'react';
import findRunningSet from '../../helpers/findRunningSet';
import { CronoSetType } from '../../cronoTypes';
import { EditorStateType } from '../../../editor/editorTypes';
import CronoButtonsSet from '../ActionButtonsSet';
import LiveCounter from '../LiveCounter/LiveCounter';
import * as SC from './CronoPane.styled';
import { useAppDispatch } from '../../../../redux/hooks';
import initTableAction from '../../redux/actions/composed/initTableAction';
import { useCronoSelector } from '../../redux/cronoSelectors';
import { startTimer, stopTimer } from '../../helpers/cronoTimer';
import setCronoStartTimestampAction from '../../redux/actions/setCronoStartTimestampAction';
import generateTimestamp from '../../../../utils/time/generateTimestamp';
import setCronoModeAction from '../../redux/actions/setCronoModeAction';
import { CronoModeEnum } from '../../../editor/enums';
import handleTickAction from '../../redux/actions/composed/handleTickAction';
import useAppNavitation from '../../../../useAppNavigation';
import setInitialStateAction from '../../redux/actions/setInitialStateAction';
import Sets from '../Sets/Sets';

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
  const current: CronoSetType = findRunningSet(sets);

  return (
    <SC.PaneWrapper>
      <SC.CountersWrapper>
        <SC.ContentWrapper>
          <LiveCounter crono={crono} set={current} />
          <Sets sets={sets} active={current} />
        </SC.ContentWrapper>
      </SC.CountersWrapper>
      <CronoButtonsSet crono={crono} start={onClickStart} end={endClickCrono} />
    </SC.PaneWrapper>
  );
};

export default CronoPane;

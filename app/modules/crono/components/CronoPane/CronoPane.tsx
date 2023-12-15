import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import React, { FC, useCallback, useEffect } from 'react';
import MultipleBar from '../../../../components/CountdownBar/MultipleBar';
import SingleBar from '../../../../components/CountdownBar/SingleBar';
import SetsList from '../../../../components/CronoSetsList.tsx';
import findRunningSet from '../../helpers/findRunningSet';
import { CronoSetType } from '../../cronoTypes';
import { EditorStateType } from '../../../editor/editorTypes';
import CronoButtonsSet from '../ActionButtonsSet';
import LiveCounter from '../LiveCounter';
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

type CoronoPaneProps = {
  initialData: EditorStateType;
};

const CronoPane: FC<CoronoPaneProps> = ({ initialData }) => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavitation();
  const crono = useCronoSelector();

  const startCrono = useCallback(
    (cronoMode: CronoModeEnum) => {
      stopTimer();
      dispatch(setCronoStartTimestampAction(generateTimestamp()));
      dispatch(setCronoModeAction(cronoMode));
      startTimer(() => dispatch(handleTickAction()));
    },
    [dispatch],
  );

  const endCrono = useCallback(() => {
    stopTimer();
    dispatch(setInitialStateAction(null));
    navigation.pop();
  }, [dispatch, navigation]);

  useEffect(() => {
    if (!crono) {
      dispatch(initTableAction(initialData));
    }
    activateKeepAwakeAsync();
    return () => {
      deactivateKeepAwake();
    };
  }, [crono, initialData, dispatch]);

  if (!crono || !crono.sets || crono.sets.length <= 0) {
    return null;
  }

  const { sets } = crono;
  const current: CronoSetType = findRunningSet(sets);

  return (
    <SC.PaneWrapper>
      <SC.CountersWrapper>
        <MultipleBar sets={sets} />

        <SC.ContentWrapper>
          <LiveCounter crono={crono} set={current} />

          <SC.SetsWrapper>
            <SetsList sets={crono.sets} />
          </SC.SetsWrapper>
        </SC.ContentWrapper>

        <SingleBar set={current} />
      </SC.CountersWrapper>

      <CronoButtonsSet crono={crono} start={startCrono} end={endCrono} />
    </SC.PaneWrapper>
  );
};

export default CronoPane;

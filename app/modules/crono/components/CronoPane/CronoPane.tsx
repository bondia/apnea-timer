import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import React, { FC, useCallback, useEffect, useMemo } from 'react';
import MultipleBar from '../../../../components/CountdownBar/MultipleBar';
import SingleBar from '../../../../components/CountdownBar/SingleBar';
import SetsList from '../../../../components/CronoSetsList.tsx';
import findRunningSet from '../../helpers/findRunningSet';
import { CronoSetType, CronoStateType } from '../../redux/CronoTypes';
import { EditorStateType } from '../../../editor/editorTypes';
import CronoButtonsSet from '../ActionButtonsSet';
import LiveCounter from '../LiveCounter';
import * as SC from './CronoPane.styled';
import { useAppDispatch } from '../../../../redux/hooks';
import initTableAction from '../../redux/actions/composed/initTableAction';
import { useCronoSelector } from '../../redux/cronoSelectors';
import { startTimer, stopTimer } from '../../cronoTimer';
import setCronoStartTimestampAction from '../../redux/actions/setCronoStartTimestampAction';
import generateTimestamp from '../../../../utils/time/generateTimestamp';
import setCronoModeAction from '../../redux/actions/setCronoModeAction';
import { CronoModeEnum } from '../../../editor/enums';
import handleTick from '../../redux/actions/composed/handleTick';
import useAppNavitation from '../../../../routes/useAppNavigation';
import setInitialStateAction from '../../redux/actions/setInitialStateAction';

type CoronoPaneProps = {
  initialData: EditorStateType;
};

const CronoPane: FC<CoronoPaneProps> = ({ initialData }) => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavitation();
  const crono = useCronoSelector();

  const rawCrono: CronoStateType = useMemo(() => crono?.toJS<CronoStateType>(), [crono]);

  const startCrono = useCallback(
    (cronoMode: CronoModeEnum) => {
      stopTimer();
      dispatch(setCronoStartTimestampAction(generateTimestamp()));
      dispatch(setCronoModeAction(cronoMode));
      startTimer(() => dispatch(handleTick()));
    },
    [dispatch],
  );

  const endCrono = useCallback(() => {
    stopTimer();
    dispatch(setInitialStateAction(null));
    navigation.pop();
  }, [dispatch, navigation]);

  useEffect(() => {
    if (!rawCrono) {
      dispatch(initTableAction(initialData));
    }
    activateKeepAwakeAsync();
    return () => {
      deactivateKeepAwake();
    };
  }, [rawCrono, initialData, dispatch]);

  if (!rawCrono || rawCrono.sets.length <= 0) {
    return null;
  }

  const { sets } = rawCrono;
  const current: CronoSetType = findRunningSet(sets);

  return (
    <SC.PaneWrapper>
      <SC.CountersWrapper>
        <MultipleBar sets={sets} />

        <SC.ContentWrapper>
          <LiveCounter crono={rawCrono} set={current} />

          <SC.SetsWrapper>
            <SetsList sets={rawCrono.sets} />
          </SC.SetsWrapper>
        </SC.ContentWrapper>

        <SingleBar set={current} />
      </SC.CountersWrapper>

      <CronoButtonsSet crono={rawCrono} start={startCrono} end={endCrono} />
    </SC.PaneWrapper>
  );
};

export default CronoPane;

import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import React, { FC, useCallback, useEffect } from 'react';
import { Stack } from '../../../../components/Flow';
import ActionsLayout from '../../../../components/Layouts/ActionsLayout';
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
import ActionButtonSet from '../ActionButtonSet/ActionButtonSet';
import LiveCounter from '../LiveCounter/LiveCounter';
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
  const current = findRunningSet(sets);

  return (
    <ActionsLayout
      content={
        <Stack grow={1}>
          <LiveCounter crono={crono} set={current || undefined} />
          <Sets sets={sets} active={current || undefined} />
        </Stack>
      }
      actions={<ActionButtonSet crono={crono} start={onClickStart} end={endClickCrono} />}
    />
  );
};

export default CronoPane;

import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import { now } from 'lodash';
import React, { FC, useCallback, useEffect } from 'react';
import Countdown from '../../components/Counters/Countdown';
import { Spacer, Stack, Surface } from '../../components/Flow';
import ActionsLayout from '../../components/Layouts/ActionsLayout';
import useAppTheme from '../../hooks/useAppTheme';
import { useAppDispatch } from '../../redux/hooks';
import useAppNavitation from '../../useAppNavigation';
import { EditorStateType } from '../editor/editorTypes';
import { CronoModeEnum } from '../editor/enums';
import ActionButtonSet from './components/ActionButtonSet/ActionButtonSet';
import LiveCounter from './components/LiveCounter/LiveCounter';
import SetsList from './components/SetsList/SetsList';
import { startTimer, stopTimer } from './helpers/cronoTimer';
import findRunningSet from './helpers/findRunningSet';
import handleTickAction from './redux/actions/composed/handleTickAction';
import initTableAction from './redux/actions/composed/initTableAction';
import setCronoModeAction from './redux/actions/setCronoModeAction';
import setCronoStartTimestampAction from './redux/actions/setCronoStartTimestampAction';
import setInitialStateAction from './redux/actions/setInitialStateAction';
import { useCronoSelector } from './redux/cronoSelectors';

type CoronoPaneProps = {
  initialData: EditorStateType;
};

const CronoPane: FC<CoronoPaneProps> = ({ initialData }) => {
  const dispatch = useAppDispatch();
  const { elevations } = useAppTheme();
  const navigation = useAppNavitation();
  const crono = useCronoSelector();

  const endCrono = useCallback(() => {
    stopTimer();
    dispatch(setInitialStateAction(null));
  }, [dispatch]);

  const onClickStart = useCallback(
    (cronoMode: CronoModeEnum) => {
      stopTimer();
      dispatch(setCronoStartTimestampAction(now()));
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
          <Surface grow={1} elevation={elevations.ELEVATION_05}>
            <LiveCounter crono={crono} set={current || undefined} />
            <SetsList sets={sets} active={current || undefined} />
          </Surface>
        </Stack>
      }
      actions={
        <Surface grow={1} elevation={elevations.ELEVATION_05}>
          <Surface
            grow={1}
            elevation={elevations.ELEVATION_16}
            radiusTL="20px"
            radiusTR="20px"
          >
            <Stack spaceAround horizontal spaceY={10}>
              {current ? <Countdown set={current} /> : null}
            </Stack>
            <Spacer bottom={5} xAxis={8}>
              <ActionButtonSet
                crono={crono}
                start={onClickStart}
                end={endClickCrono}
              />
            </Spacer>
          </Surface>
        </Surface>
      }
    />
  );
};

export default CronoPane;

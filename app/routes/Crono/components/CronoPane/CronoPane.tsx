import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import React, { FC, useEffect, useMemo } from 'react';
import MultipleBar from '../../../../components/CountdownBar/MultipleBar';
import SingleBar from '../../../../components/CountdownBar/SingleBar';
import SetsList from '../../../../components/CronoSetsList.tsx';
import findRunningSet from '../../../../modules/crono/helpers/findRunningSet';
import { CronoSetType, CronoStateType } from '../../../../modules/crono/redux/CronoTypes';
import { EditorStateType } from '../../../../modules/editor/editorTypes';
import CronoButtonsSet from '../ActionButtonsSet';
import LiveCounter from '../LiveCounter';
import * as SC from './CronoPane.styled';
import { useAppDispatch } from '../../../../redux/hooks';
import initTableAction from '../../../../modules/crono/redux/creators/initTableAction';
import { useCronoSelector } from '../../../../modules/crono/redux/cronoSelectors';

type CoronoPaneProps = {
  initialData: EditorStateType;
};

const CronoPane: FC<CoronoPaneProps> = props => {
  const { initialData } = props;

  const dispatch = useAppDispatch();
  const crono = useCronoSelector();
  const rawCrono: CronoStateType = useMemo(() => crono?.toJS<CronoStateType>(), [crono]);

  useEffect(() => {
    if (!rawCrono) {
      dispatch(initTableAction(initialData));
    }
    activateKeepAwakeAsync();
    return () => {
      deactivateKeepAwake();
    };
  }, [rawCrono, initialData]);

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

      <CronoButtonsSet crono={rawCrono} />
    </SC.PaneWrapper>
  );
};

export default CronoPane;

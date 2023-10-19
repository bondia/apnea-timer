import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import React, { FC, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MultipleBar from '../../../../components/CountdownBar/MultipleBar';
import SingleBar from '../../../../components/CountdownBar/SingleBar';
import SetsList from '../../../../components/CronoSetsList.tsx';
import findRunningSet from '../../../../modules/crono/pure/findRunningSet';
import { cronoActions } from '../../../../modules/crono/redux/cronoActions';
import {
  CronoActionsTypes,
  CronoSetType,
  CronoStateType,
  ImmutableJSCronoType,
} from '../../../../modules/crono/redux/CronoTypes';
import { EditorStateType } from '../../../../modules/editor/redux/editorTypes';
import CronoButtonsSet from '../ActionButtonsSet';
import LiveCounter from '../LiveCounter';
import * as SC from './CronoPane.styled';

type CoronoPaneProps = {
  initialData: EditorStateType;
  crono: ImmutableJSCronoType;
  actions: CronoActionsTypes;
};

const CronoPane: FC<CoronoPaneProps> = props => {
  const { crono, initialData, actions } = props;
  const rawCrono: CronoStateType = useMemo(() => crono?.toJS<CronoStateType>(), [crono]);

  useEffect(() => {
    if (!rawCrono) {
      actions.initTable(initialData);
    }
    activateKeepAwakeAsync();
    return () => {
      deactivateKeepAwake();
    };
  }, [actions, rawCrono, initialData]);

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

      <CronoButtonsSet crono={rawCrono} cronoActions={actions} />
    </SC.PaneWrapper>
  );
};

/**
 * REDUX
 */

const stateToProps = (state, ownProps) => {
  return {
    initialData: ownProps.initialData,
    crono: state.crono ? state.crono : null,
  };
};

const dispatchToProps = dispatch => {
  return {
    actions: bindActionCreators<any, any>(cronoActions, dispatch),
  };
};

export default connect(stateToProps, dispatchToProps)(CronoPane);

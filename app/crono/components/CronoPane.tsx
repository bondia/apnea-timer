// import KeepAwake from 'react-native-keep-awake';
import Immutable from 'immutable';
import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/native';
import { EditorStateType } from '../../editor/redux/editorTypes';
import findRunningSet from '../pure/findRunningSet';
import { cronoActions } from '../redux/cronoActions';
import { CronoActionsTypes, CronoSetType, ImmutableJSCronoType } from '../redux/cronoTypes';
import CronoButtonsSet from './ActionButtonsSet';
import MultipleBar from './CountdownBar/MultipleBar';
import SingleBar from './CountdownBar/SingleBar';
import LiveCounter from './LiveCounter';
import SetsList from './SetsList';

/**
 * STYLES
 */

const PaneWrapper = styled.View`
  flex: 1;
  padding: 10px 5px;
`;

const CountersWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 35px;
  margin-bottom: 10px;
`;

const ContentWrapper = styled.View`
  flex: 1;
`;

const SetsWrapper = styled.View`
  flex: 5;
`;
interface CoronoPaneProps {
  initialData: EditorStateType;
  crono: ImmutableJSCronoType;
  actions: CronoActionsTypes;
}

const CronoPane: FC<CoronoPaneProps> = props => {
  const { crono, initialData, actions } = props;

  useEffect(() => {
    if (crono === null) {
      actions.initTable(initialData);
    }
    // TODO: Keep awake not working
    // KeepAwake.activate();

    return () => {
      // KeepAwake.deactivate();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (crono === null || crono.get('sets').size <= 0) {
    return null;
  }

  const sets: CronoSetType[] = crono.get('sets').toJS() as CronoSetType[];
  const current: CronoSetType = findRunningSet(sets);
  const immutableCurrentSet = Immutable.fromJS(current);

  return (
    <PaneWrapper>
      <CountersWrapper>
        <MultipleBar sets={crono.getIn(['sets'])} />

        <ContentWrapper>
          <LiveCounter crono={crono} set={immutableCurrentSet} />

          <SetsWrapper>
            <SetsList crono={crono} />
          </SetsWrapper>
        </ContentWrapper>

        <SingleBar set={immutableCurrentSet} />
      </CountersWrapper>

      <CronoButtonsSet crono={crono} cronoActions={actions} />
    </PaneWrapper>
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

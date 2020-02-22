import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
// import KeepAwake from 'react-native-keep-awake';

import { CronoActionsTypes, ImmutableJSCronoType } from '../redux/CronoTypes';

import * as cronoActions from '../redux/cronoActions';
import findRunningSet from '../pure/findRunningSet';

import CountdownBar from './CountdownBar/SingleBar';
import MultipleCountdownBar from './CountdownBar/MultipleBar';
import LiveCounter from './LiveCounter';
import SetsList from './SetsList';
import CronoButtonsSet from './CronoButtonsSet';

interface CoronoPaneProps {
    crono: ImmutableJSCronoType;
    editorData: object;
    cronoActions: CronoActionsTypes;
}

function CronoPane(props: CoronoPaneProps): JSX.Element {
    const { crono, editorData, cronoActions } = props;

    useEffect(() => {
        if (crono === null) {
            cronoActions.initTable(editorData);
        }
        // TODO: Keep awake not working
        // KeepAwake.activate();

        return () => {
            // KeepAwake.deactivate();
        }
    }, []);

    if (crono === null || crono.get('sets').size <= 0) {
        return null;
    }

    const current = findRunningSet(crono.get('sets'));

    return (
        <PaneWrapper>
            <CountersWrapper>
                <MultipleCountdownBar sets={crono.getIn(['sets'])} />

                <ContentWrapper>
                    <LiveCounter crono={crono} />

                    <SetsWrapper>
                        <SetsList crono={crono} />
                    </SetsWrapper>
                </ContentWrapper>

                <CountdownBar set={current} />
            </CountersWrapper>

            <CronoButtonsSet crono={crono} cronoActions={cronoActions} />
        </PaneWrapper>
    );
}

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

/**
 * REDUX
 */

const stateToProps = (state, ownProps) => {
    return {
        crono: state.crono ? state.crono : null,
        editorData: ownProps.crono
    };
};

const dispatchToProps = dispatch => {
    return {
        cronoActions: bindActionCreators(cronoActions, dispatch)
    };
};

export default connect(stateToProps, dispatchToProps)(CronoPane);

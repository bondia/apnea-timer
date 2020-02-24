import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
// import KeepAwake from 'react-native-keep-awake';
import Immutable from 'immutable';

import { CronoActionsTypes, ImmutableJSCronoType, CronoSetType } from '../redux/cronoTypes';
import * as cronoActions from '../redux/cronoActions';
import findRunningSet from '../pure/findRunningSet'

import SingleBar from './CountdownBar/SingleBar';
import MultipleBar from './CountdownBar/MultipleBar';
import LiveCounter from './LiveCounter';
import SetsList from './SetsList';
import CronoButtonsSet from './ActionButtonsSet';
import { EditorStateType } from '../../editor/redux/editorTypes';

interface CoronoPaneProps {
    initialData: EditorStateType;
    crono: ImmutableJSCronoType;
    cronoActions: CronoActionsTypes;
}

function CronoPane(props: CoronoPaneProps): JSX.Element {
    const { crono, initialData, cronoActions } = props;

    useEffect(() => {
        if (crono === null) {
            cronoActions.initTable(initialData);
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

            <CronoButtonsSet
                crono={crono}
                cronoActions={cronoActions}
            />
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
        initialData: ownProps.initialData,
        crono: state.crono ? state.crono : null
    };
};

const dispatchToProps = dispatch => {
    return {
        cronoActions: bindActionCreators(cronoActions, dispatch)
    };
};

export default connect(stateToProps, dispatchToProps)(CronoPane);

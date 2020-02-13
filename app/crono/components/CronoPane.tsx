import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, StyleProp, TextStyle } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
// import KeepAwake from 'react-native-keep-awake';

import * as cronoActions from '../redux/cronoActions';
import findRunningSet from '../pure/findRunningSet';

import LiveCounter from './LiveCounter';
import SetsList from './SetsList';
import CronoButtonsSet from './CronoButtonsSet';
import MultipleCountdownBar from './MultipleCountdownBar';
import CountdownBar from './CountdownBar';


// TODO: Better types
interface CoronoPaneProps {
    crono: any;
    editorData: object;
    cronoActions: { 
        initTable: (editorData: object) => void 
    };
    style?: StyleProp<TextStyle>;
}

function CronoPane(props: CoronoPaneProps): JSX.Element {
    const { crono, editorData, cronoActions, style } = props;

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
        <View style={[style, baseStyles.pane]}>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 35, marginBottom: 10 }}>
                <MultipleCountdownBar sets={crono.getIn(['sets'])} />

                <View style={{ flex: 1 }}>
                    <LiveCounter crono={crono} />

                    <View style={baseStyles.setsWrapper}>
                        <SetsList crono={crono} />
                    </View>
                </View>

                <CountdownBar set={current} />
            </View>

            <CronoButtonsSet crono={crono} cronoActions={cronoActions} />
        </View>
    );
}

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

const baseStyles = StyleSheet.create({
    pane: {
        flex: 1
    },

    setsWrapper: {
        flex: 5
    }
});

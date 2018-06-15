import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import KeepAwake from 'react-native-keep-awake';

import * as cronoActions from 'app/crono/redux/cronoActions';
import findRunningSet from '../pure/findRunningSet';

import LiveCounter from './LiveCounter';
import SetsList from './SetsList';
import CronoButtonsSet from './CronoButtonsSet';
import MultipleCountdownBar from './MultipleCountdownBar';
import CountdownBar from './CountdownBar';

class CronoPane extends React.PureComponent {
    static propTypes = {
        crono: ImmutablePropTypes.map,
        editorData: ImmutablePropTypes.map.isRequired,
        cronoActions: PropTypes.object.isRequired
    };

    componentWillMount() {
        const { crono, editorData, cronoActions } = this.props;
        if (crono === null) {
            cronoActions.initTable(editorData);
        }
        KeepAwake.activate();
    }

    componentWillUnmount() {
        KeepAwake.deactivate();
    }

    render() {
        const { crono, cronoActions, style } = this.props;
        if (crono === null || crono.get('sets').size <= 0) {
            return null;
        }

        const current = findRunningSet(crono.get('sets'));
console.info(current.toJS());
        return (
            <View style={[style, baseStyles.pane]}>

                <View style={{ flex: 1, flexDirection: 'row' }}>

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
        flex: 4
    }
});

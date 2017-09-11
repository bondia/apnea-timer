import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import * as cronoActions from 'app/crono/redux/cronoActions'
import { FONT_COLOR_GREY } from 'app/common/styles/commonStyles'

import TextComponent from 'app/common/components/TextComponent'
import SetsList from './SetsList'
import CronoButtonsSet from './CronoButtonsSet'
import LiveCounter from './LiveCounter'

class CronoPane extends React.PureComponent {

    static propTypes = {
        crono: ImmutablePropTypes.map.isRequired,
        cronoActions: PropTypes.object.isRequired,
    }

    render() {
        const { crono, cronoActions, style } = this.props

        return (
            <View style={[ style, baseStyles.main ]}>

                <LiveCounter crono={crono} />

                <View style={baseStyles.setsTable}>
                    <TextComponent style={baseStyles.label}>
                        Sets
                    </TextComponent>
                    <SetsList crono={crono} />
                </View>

                <CronoButtonsSet    crono={crono}
                                    cronoActions={cronoActions}
                                    />
            </View>
        )
    }
}

const stateToProps = (state, ownProps) => {
    return {
        crono: state.crono ? state.crono : ownProps.crono
    }
}

const dispatchToProps = (dispatch) => {
    return {
        cronoActions: bindActionCreators(cronoActions, dispatch)
    }
}

export default connect(stateToProps, dispatchToProps)(CronoPane)

const baseStyles = StyleSheet.create({
    main: {
        flex: 1,
    },

    setsTable: { flex: 4 },

    label: {
        marginTop: 15,
        textAlign: 'center',
        width: '100%',
        color: FONT_COLOR_GREY
    },
})

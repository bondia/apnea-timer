import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { bindActionCreators } from 'redux';

import { FONT_COLOR_GREY } from 'app/common/styles/commonStyles';
import * as enums from '../../enums';

import * as editorActions from '../../redux/editorActions';

import TextComponent from 'app/common/components/TextComponent';
import EditorPaneHeader from './EditorPaneHeader';
import EditorTimersList from './EditorTimersList';
import StartButton from '../Common/StartButton';

class EditorPane extends React.PureComponent {
    static propTypes = {
        editor: ImmutablePropTypes.map
    };

    componentDidMount() {
        const { editor, editorActions } = this.props;
        if (editor === null) {
            editorActions.changeTableType(120, enums.TABLE_TYPE_O2);
        }
    }

    render() {
        const { editor, style } = this.props;
        if (editor === null) {
            return null;
        }

        const type = editor.getIn(['trainingTable', 'type']);
        const sets = editor.getIn(['sets']).filter(i => {
            let valid = false;
            valid = type === enums.TABLE_TYPE_CO2 && enums.SET_TYPE_PREPARE === i.get('type') ? true : valid;
            valid = type === enums.TABLE_TYPE_O2 && enums.SET_TYPE_HOLD === i.get('type') ? true : valid;
            valid = type === enums.TABLE_TYPE_FREE ? true : valid;
            return valid;
        });

        const crono = editor.update('sets', sets => sets.filter(s => !s.get('zombie')));
        const showStartButton = crono.get('sets').size > 0;
        const setsListBlockStyles = showStartButton ? baseStyles.setsListBlock : baseStyles.setsListBlockBig;

        return (
            <View style={[style, baseStyles.main]}>
                <EditorPaneHeader editor={editor} />

                <View style={setsListBlockStyles}>
                    <TextComponent style={baseStyles.label}>
                        {enums.TABLE_TYPE_CO2 === type ? 'Breath Up' : ''}
                        {enums.TABLE_TYPE_O2 === type ? 'Breath Hold' : ''}
                        {enums.TABLE_TYPE_FREE === type ? 'Sets' : ''}
                    </TextComponent>

                    <EditorTimersList sets={sets} />
                </View>

                {showStartButton && <StartButton data={crono} />}
            </View>
        );
    }
}

const baseStyles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10
    },

    label: {
        marginTop: 15,
        textAlign: 'center',
        width: '100%',
        color: FONT_COLOR_GREY
    },

    setsListBlock: {
        flex: 4
    },

    setsListBlockBig: {
        flex: 5
    }
});

const stateToProps = state => {
    return {
        editor: state.editor
    };
};

const dispatchToProps = dispatch => {
    return { editorActions: bindActionCreators(editorActions, dispatch) };
};

export default connect(stateToProps, dispatchToProps)(EditorPane);
